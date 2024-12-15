import { getServerSession } from "next-auth/next";
import {authOptions} from "@/lib/auth"
import prisma from '@/db'; 
import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions, req);
  console.log(session, "sesionsssssssssssssssssssssssssssssssssssssssss")
  if (!session) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const { user } = session;
  const body = await req.json();
  const { token, broker } = body;

  if (!token || !broker) {
    return NextResponse.json({ message: "Token and broker are required." }, { status: 400 });
  }

  try {
    const brokerApiUrl = process.env.DHAN_URL;

    // Validate token
    const validationResponse = await axios.post(`${brokerApiUrl}/validate`, {
      token,
    });

    if (!validationResponse.data.valid) {
      return NextResponse.json({ success: false, message: "Invalid token." });
    }

    // Store token
    const userBrokerAccount = await prisma.userBrokerAccount.create({
      data: {
        userId: user.id,
        broker,
        token,
      },
    });

    // Fetch holdings and positions
    const [holdingsResponse, positionsResponse] = await Promise.all([
      axios.get(`${brokerApiUrl}/holdings`, { headers: { Authorization: token } }),
      axios.get(`${brokerApiUrl}/positions`, { headers: { Authorization: token } }),
    ]);

    // Store holdings and positions in the database
    await prisma.holdings.createMany({
      data: holdingsResponse.data.map((holding) => ({
        brokerAccountId: userBrokerAccount.id,
        ...holding,
      })),
    });

    await prisma.positions.createMany({
      data: positionsResponse.data.map((position) => ({
        brokerAccountId: userBrokerAccount.id,
        ...position,
      })),
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Error:", err);
    return NextResponse.json({ success: false, message: "Internal server error." }, { status: 500 });
  }
}
