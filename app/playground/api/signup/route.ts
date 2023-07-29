import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    return NextResponse.json(body, {
      status: 200,
    });
  } catch (error: any) {
    console.log("ERROR SIGN UP", error);
    return new NextResponse("Internal Server Error", {
      status: 500,
    });
  }
}
