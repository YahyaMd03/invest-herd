import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest){
    console.log(req)
    return NextResponse.json({message: 'hello from post'}, {status: 200})
}