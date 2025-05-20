import { Star } from "lucide-react";

export const MovieCard = () => {
  return (
    <div className="rounded-lg w-fit overflow-hidden">
      <div className="w-[158px] md:w-[230px] h-[234px] md:h-[340px]">
        <img
          className="object-cover h-full w-full"
          src="https://cdn11.bigcommerce.com/s-ydriczk/images/stencil/1500x1500/products/90301/98769/the-creator-original-movie-poster-one-sheet-final-style-buy-now-at-starstills__81077.1697644483.jpg?c=2&imbypass=on"
        />
      </div>
      <div className="p-2 text-[12px] bg-gray-100">
        <div className="flex">
          <Star fill="yellow" strokeWidth={0} />
          <div className="flex pt-0.5 pl-1">
            <p className="font-[500]">6.9</p>
            <p className="font-[400] text-gray-400">/10</p>
          </div>
        </div>
        <p className="pl-1">Dear Santa</p>
      </div>
    </div>
  );
};
