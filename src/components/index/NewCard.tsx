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
    <div className="h-auto w-full flex gap-10 items-center justify-center">
      <div className="h-24 w-auto flex flex-col items-center justify-center gap-4">
        <img className="h-12 w-auto rounded-full border-2 " src={`/assets/uploads/${profile}.webp`} alt="" />
        <p className="text-md">{author}</p>
      </div>
      <div className="h-auto w-full flex flex-col items-start justify-start">
        <p className="text-xl font-medium">{title}</p>
        <p className="text-md">{description}</p>
      </div>
    </div>
  );
}
