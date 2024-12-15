import { NextRequest, NextResponse } from "next/server";
import prisma from "@/db"; // Adjust the import based on your project structure
import axios from "axios";

export async function GET(req: NextRequest) {
  try {
    const url = process.env.DHAN_URL; // Ensure this is set in your environment variables

    if (!url) {
      throw new Error("API URL is missing");
    }

    // Extract userId or other identifier from request (e.g., headers, query params, etc.)
    const userId = req.nextUrl.searchParams.get("userId"); // Assuming you pass the userId as a query parameter

    if (!userId) {
      return NextResponse.json(
        { success: false, message: "User ID is required" },
        { status: 400 }
      );
    }

    // Fetch the access token from the UserBrokerAccount table using Prisma
    const userBrokerAccount = await prisma.userBrokerAccount.findUnique({
      where: { userId },
    });

    if (!userBrokerAccount || !userBrokerAccount.accessToken) {
      return NextResponse.json(
        { success: false, message: "Access token not found for the user" },
        { status: 404 }
      );
    }

    const accessToken = userBrokerAccount.accessToken;

    // Make the API request to Dhan
    const response = await axios.get(`${url}/holdings`, {
      headers: {
        "Content-Type": "application/json",
        "access-token": accessToken,
      },
    });

    // Return the API response as JSON
    return NextResponse.json({
      success: true,
      data: response.data,
    });
  } catch (error: any) {
    console.error("Error fetching holdings:", error);

    return NextResponse.json(
      {
        success: false,
        message: error.response?.data?.message || error.message || "Failed to fetch holdings",
      },
      { status: error.response?.status || 500 }
    );
  }
}
