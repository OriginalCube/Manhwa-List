import { NextResponse } from "next/server";
import connect from "../../../../utils/mongoose/connect";
import NewsModel from "../../../../models/News";
import UserModel from "../../../../models/User";

export async function GET(req: Request, res: Response) {
  try {
    await connect();
    const getNews = await NewsModel.find({});
    let newsInfo = [];

    return NextResponse.json({ message: getNews });
  } catch (err) {
    console.log(err);
  }
}
