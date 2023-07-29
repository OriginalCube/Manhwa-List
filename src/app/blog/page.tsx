import Main from "@/components/blog/Main";
import connectMongo from "../../../utils/mongoose/connect";
import ReviewModel from "../../../models/Review";

type genreProps = {
  action: boolean;
  romance: boolean;
  mystery: boolean;
  comedy: boolean;
  drama: boolean;
};

const submitReview = async (formData: FormData, genre: genreProps) => {
  "use server";
  try {
    await connectMongo();
    console.log("Connected to Mongo");
    const createReview = await ReviewModel.create({
      title: formData.get("title"),
      author: formData.get("author"),
      rating: formData.get("rating"),
      description: formData.get("description"),
      genre: JSON.stringify(genre),
    });
    console.log(createReview);
  } catch (err) {
    console.log(err);
  }
};

export default function Blog() {
  return (
    <div className="w-full h-auto">
      <Main submitReview={submitReview} />
    </div>
  );
}
