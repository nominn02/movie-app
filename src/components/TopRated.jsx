import { ArrowBigRight } from "lucide-react";
import { MovieCard } from "./MovieCard";
import { useEffect, useState } from "react";
import { getTopRatedMovies } from "@/lib/api/get-top-rated-movies";
import Link from "next/link";

export const TopRated = () => {
  const [topRatedMovies, setTopRatedMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const topRatedMovies = await getTopRatedMovies();

      setTopRatedMovies(topRatedMovies);
    };

    fetchMovies();
    
    
  }, []);
  // console.log(topRatedMovies);
  return (
    <div className="flex flex-col gap-8 px-5 md:px-0">
     <div className="flex justify-between w-[1277px] h-[36px]">
        <h1 className="text-2xl font-semibold pl-1 ">Top Rated</h1>
       <Link href={`/category/top_rated`}>
          <button className="flex py-2 px-4 gap-1 text-sm font-medium">
          See more
          <ArrowBigRight className="h-[16px] w-[16px]"/>
        </button>
        </Link>
      </div>
      <div className="grid gap-2 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {topRatedMovies.slice(0, 10)?.map((movie) => (
          <MovieCard id={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};
