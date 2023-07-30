import Main from "@/components/index/Main";

export default function Homepage() {
  return (
    <div className="w-full h-auto flex items-center justify-center text-white">
      <div className="w-5/6 h-auto flex items-center gap-6 justify-center">
        <Main />
        <div className="w-1/4 h-auto"></div>
      </div>
    </div>
  );
}
