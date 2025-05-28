import { Film, Moon, Search } from "lucide-react";
import { MovieGenres } from "@/components/genres/MovieGenres";

export const Header = () => {
  return (
    <div>
      <nav className="flex justify-between h-{59px] items-center">
        <div className="flex">
          <Film color="#4338ca" />
          <p className="text-[16px] text-indigo-700">Movie Z</p>
        </div>
        <MovieGenres />
        <div className="flex gap-[12px]">
          <button className="flex w-[36px] h-[36px] rounded-md border-[#E4E4E7] shadow-sm justify-center items-center">
            <Search className="w-[12px] h-[12px]" />
          </button>
          <button className="flex w-[36px] h-[36px] rounded-md border-[#E4E4E7] shadow-sm justify-center items-center ">
            <Moon className="w-[12px] h-[12px]" />
          </button>
        </div>
      </nav>
    </div>
  );
};
