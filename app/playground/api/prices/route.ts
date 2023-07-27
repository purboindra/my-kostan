import Stripe from "stripe";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
      apiVersion: "2022-11-15",
    });

    const prices = await stripe.prices.list({
      active: true,
      limit: 4,
    });

    return NextResponse.json(prices.data, {
      status: 200,
    });
  } catch (error: any) {
    console.log("ERROR GET STRIPE", error);
    return new NextResponse("Internal Server Error", {
      status: 500,
    });
  }
}
