import { Star } from "lucide-react";
import Link from "next/link";

export const MovieCard = ({ movie, moviePopular, movieTopRated, id }) => {
  const poster = `${process.env.NEXT_PUBLIC_TMDB_IMAGE_SERVICE_URL}${
    movie?.poster_path ||
    moviePopular?.poster_path ||
    movieTopRated?.poster_path 
  }`;

  return (
    <div className="rounded-lg w-fit overflow-hidden">
      <div className="w-[158px] md:w-[230px] h-[234px] md:h-[340px]">
        <Link href={`/details/${id}`}>
          <img className="object-cover h-full w-full" src={poster} />
        </Link>
      </div>
      <div className="p-2 text-[12px] bg-gray-100">
        <div className="flex">
          <Star fill="yellow" strokeWidth={0} />
          <div className="flex pt-0.5 pl-1">
            <p className="font-[500]">{movie.vote_average}</p>
            <p className="font-[400] text-gray-400">/10</p>
          </div>
        </div>
        <p className="pl-1">{movie.title}</p>
      </div>
    </div>
  );
};
