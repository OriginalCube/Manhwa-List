import ReviewCard from "./ReviewCard";

export default function Main() {
  return (
    <div className="w-3/4 h-auto flex flex-col items-center justify-center gap-2">
      <div className="h-12 w-full">
        <p className="text-3xl font-medium p-1">Recently Uploaded Reviews</p>
      </div>
      <div className="h-auto w-full flex gap-2 items-center justify-start">
        <ReviewCard title={"Solo Levelling"} ratings={10} image={"solo.jpg"} />
      </div>
      <div className="h-12 w-full">
        <p className="text-3xl font-medium p-1">Recently Uploaded Blogs</p>
      </div>
      <div className="h-auto w-full"></div>
    </div>
  );
}
