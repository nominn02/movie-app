import { ArrowBigRight } from "lucide-react";
import { MovieCard } from "./MovieCard";
import { getUpcomingMovies } from "../lib/api/get-upcoming-movies";
import { useEffect, useState } from "react";
import Link from "next/link";

export const Upcoming = () => {
  const [upcomingMovies, setUpcomingMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const upcomingMovies = await getUpcomingMovies();

      setUpcomingMovies(upcomingMovies);
    };

    fetchMovies();
  }, []);
  return (
    <div className="flex flex-col gap-8 px-5 md:px-0">
     <div className="flex justify-between w-[1277px] h-[36px]">
        <h1 className="text-2xl font-semibold pl-1 ">Upcoming</h1>
        <Link href={`/category/Upcoming`}>
          <button className="flex py-2 px-4 gap-1 text-sm font-medium">
          See more
          <ArrowBigRight className="h-[16px] w-[16px]"/>
        </button>
        </Link>
      </div>
      <div className="grid gap-2 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {upcomingMovies.slice(0, 10)?.map((movie) => (
          <MovieCard id={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

// import { MovieCard } from "@/components/MovieCard";
// import { getMovieByGenre } from "@/lib/api/get-by-genre";
// import { useRouter } from "next/router";
// import { useEffect, useState } from "react";

// const GenrePage = () => {
//   const router = useRouter();
//   const genre = router.query.genre;
//   <div>genre: {genre}</div>;

//   const [byGenre, setByGenre] = useState([]);

//   useEffect(() => {
//     const fetchGenres = async () => {
//       const { movie } = await getMovieByGenre();

//       setByGenre(movie);
//     };
//     fetchGenres();
//   }, []);

//   return (
//     <div>
//       {byGenre?.map((movie) => (
//         <MovieCard key={movie.genreIds} movie={movie}/>
//       ))}
//     </div>
//   );
// };
// export default GenrePage;