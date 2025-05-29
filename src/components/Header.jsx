import { Film, Moon, Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { Input } from "./ui/input";
import { HeaderGenre } from "./HeaderGenre";

export const Header = () => {
  return (
    <div className="flex gap-3 my-3 max-w-[1280px] mx-auto">
      <div className="flex">
        <Film color="#4338ca" />
        <p className="text-[16px] text-indigo-700">Movie Z</p>
      </div>
      <HeaderGenre />
      <div className="flex align-bottom ">
        <div className={cn("relative text-muted-foreground", "w-[379px]")}>
          <Search
            size={16}
            className="absolute left-3 top-1/2 -translate-y-1/2"
          />
          <Input
            type="text"
            placeholder="Search.."
            className={cn("pl-[38px]", "border-none shadow-none")}
          />
        </div>
      </div>
      <button className="flex w-[36px] h-[36px] rounded-md border-[#E4E4E7] shadow-sm justify-center items-center ">
        <Moon className="w-[12px] h-[12px]  " />
      </button> 
    </div>
  );
};
