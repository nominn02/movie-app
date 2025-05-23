import { ArrowBigRight } from "lucide-react";
import { MovieCard } from "../MovieCard";

import { useEffect, useState } from "react";

export const MoreLikeThis = ({MoreLikeThis}) => {
 

  return (
    <div className="flex flex-col gap-8 px-5 md:px-0">
      <div className="flex justify-between">
        <h1>More Like This</h1>
        <ArrowBigRight />
      </div>
      <div className="grid gap-2 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {MoreLikeThis.slice(0, 5).map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
      </div>
    </div>
  );
};
