import Main from "@/components/blog/Main";
import connectMongo from "../../../utils/mongoose/connect";
import ReviewModel from "../../../models/Review";
import NewsModel from "../../../models/News";
import cracker from "../../../utils/middleware/cracker";

type genreProps = {
  action: boolean;
  romance: boolean;
  mystery: boolean;
  comedy: boolean;
  drama: boolean;
};

const submitReview = async (
  formData: FormData,
  genre: genreProps,
  key: string,
) => {
  "use server";
  try {
    await connectMongo();
    const token = await cracker(key);
    const createReview = await ReviewModel.create({
      title: formData.get("name"),
      author: token,
      writer: formData.get("author"),
      rating: formData.get("rating"),
      description: formData.get("description"),
      image: "nice",
      genre: JSON.stringify(genre),
    });
    console.log(createReview);
  } catch (err) {
    console.log(err);
  }
};

const submitNews = async (form: FormData, key: string) => {
  "use server";
  try {
    await connectMongo();
    const token = await cracker(key);
    const createNews = await NewsModel.create({
      title: form.get("title"),
      author: token,
      description: form.get("description"),
    });
  } catch (err) {
    console.log(err);
  }
};

export default function Blog() {
  return (
    <div className="w-full h-auto">
      <Main submitReview={submitReview} submitNews={submitNews} />
    </div>
  );
}
