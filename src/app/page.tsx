import Main from "@/components/index/Main";
import Trending from "@/components/index/Trending";

export default function Homepage() {
  return (
    <div className="w-full h-auto flex items-center justify-center text-white">
      <div className="w-5/6 h-auto flex gap-6 justify-center">
        <Main />
        <div className="w-1/4 h-auto">
          <Trending />
        </div>
      </div>
    </div>
  );
}
