type ReviewCardProps = {
  title: string;
  ratings: number;
  image: string;
  genre: string;
};

export default function ReviewCard({
  title,
  ratings,
  image,
  genre,
}: ReviewCardProps) {
  console.log(JSON.parse(genre[0]));
  return (
    <div
      className="w-48 h-auto cursor-pointer flex gap-1 flex-col items-center justify-start 
    border-2 rounded-md border-blue-200 shadows-md"
    >
      <img
        className="w-full h-60"
        src={`/uploads/images/${title}.jpg`}
        alt=""
      />
      <div className="flex flex-col gap-1 h-auto p-2">
        <p className="text-xl w-full text-center font-medium">{title}</p>
        <div className="flex gap-4 items-center justify-center">
          <p className="text-sm">{ratings} / 10</p>
          <p className="text-xs">Action, Comedy</p>
        </div>
      </div>
    </div>
  );
}
