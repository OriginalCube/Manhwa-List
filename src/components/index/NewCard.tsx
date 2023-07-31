type NewCardProps = {
  title: string;
  description: string;
  author: string;
  profile: string;
};

export default function NewCard({
  title,
  description,
  author,
  profile,
}: NewCardProps) {
  return (
    <div className="h-auto w-full flex gap-10 items-center justify-center border-b-2 p-2">
      <div className="h-24 w-auto flex flex-col items-center justify-center gap-4">
        <img
          className="h-auto w-20 rounded-full border-2 "
          src={`/assets/profile/${profile}`}
          alt=""
        />
        <p className="text-md font-medium">{author}</p>
      </div>
      <div className="h-auto w-full flex flex-col gap-2 items-start justify-start">
        <p className="text-xl font-medium text-blue-300">{title}</p>
        <p className="text-md text-justify">{description}</p>
      </div>
    </div>
  );
}
