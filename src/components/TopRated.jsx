import { ArrowBigRight } from "lucide-react";
import { MovieCard } from "./MovieCard";
import { useEffect, useState } from "react";
import { getTopRatedMovies } from "@/lib/api/get-top-rated-movies";

export const TopRated = () => {
  const [topRatedMovies, setTopRatedMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const topRatedMovies = await getTopRatedMovies();

      setTopRatedMovies(topRatedMovies);
    };

    fetchMovies();
  }, []);
  return (
    <div className="flex flex-col gap-8 px-5 md:px-0">
      <div className="flex justify-between">
        <h1>Top Rated</h1>
       <div>
        <div className="flex gap-2">
          See more
          <ArrowBigRight />
        </div>
       </div>
      </div>
      <div className="grid gap-2 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {topRatedMovies.slice(0, 10)?.map((movie) => (
          <MovieCard id={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};
