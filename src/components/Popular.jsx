import { ArrowBigRight } from "lucide-react";
import { MovieCard } from "./MovieCard";
import { useEffect, useState } from "react";
import { getPopularMovies } from "@/lib/api/get-popular-movies";

export const Popular = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const popularMovies = await getPopularMovies();

      setPopularMovies(popularMovies);
    };

    fetchMovies();
  }, []);
  return (
    <div className="flex flex-col gap-8 px-5 md:px-0">
      <div className="flex justify-between w-[1277px] h-[36px]">
        <h1 className="w-[114px] h-[32px] ">Popular</h1>
        <ArrowBigRight />
      </div>
      <div className="grid gap-2 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {popularMovies.slice(0, 10)?.map((movie) => (
          <MovieCard id={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};
