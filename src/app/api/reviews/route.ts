import { NextRequest, NextResponse } from "next/server";
import connect from "../../../../utils/mongoose/connect";
import Review from "../../../../models/Review";

export async function GET(req: Request, res: Response) {
  connect();
  try {
    const getReviews = await Review.find({});
    console.log(getReviews);
    return NextResponse.json({ message: getReviews });
  } catch (err) {
    console.log(err);
  }
}
