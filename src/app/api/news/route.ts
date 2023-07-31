import { NextResponse } from "next/server";
import connect from "../../../../utils/mongoose/connect";
import NewsModel from "../../../../models/News";
import UserModel from "../../../../models/User";

export async function GET(req: Request, res: Response) {
  try {
    await connect();
    const getNews = await NewsModel.find({});
    let newsInfo = [];
    for (let i = 0; i < getNews.length; ++i) {
      const getUserDetails = await UserModel.findById(getNews[i].author);
      const createNews = {
        title: getNews[i].title,
        author: getUserDetails.username,
        description: getNews[i].description,
        profile: getUserDetails.profile,
      };
      newsInfo.push(createNews);
    }
    return NextResponse.json({ message: newsInfo });
  } catch (err) {
    console.log(err);
  }
}
