import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
  } catch (error: any) {
    return new NextResponse("Internal Server Error", {
      status: 500,
    });
  }
}
