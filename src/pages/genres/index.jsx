// import { Footer } from "@/components/Footer";
// import { Header } from "@/components/Header";
// import { MovieCard } from "@/components/MovieCard";
// import { getMovieByGenre } from "@/lib/api/get-by-genre";
// import { useRouter } from "next/router";
// import { useEffect, useState } from "react";

// const GenrePage = () => {
//   const router = useRouter();
//   const genre = router.query.genre;
//   // console.log(genre)
//   const [byGenre, setByGenre] = useState([]);
//   console.log(byGenre);

//   useEffect(() => {
//     const fetchGenres = async () => {
//       const movie = await getMovieByGenre(genre, 1);
//       // console.log([getMovieByGenre]);

//       setByGenre(movie);
//     };
//     fetchGenres();
//   }, [genre]);

//   return (
//     <div>
//      <Header/>
//       {byGenre?.map((movie) => (
//         <MovieCard key={movie.genreIds} movie={movie} />
//       ))}
//        <Footer/>
//     </div>
//   );
// // };

// export default GenrePage;

import { Footer } from "@/components/Footer";
import { MovieGenres } from "@/components/genres/MovieGenres";
import { Header } from "@/components/Header";
import { MovieCard } from "@/components/MovieCard";
import { Separator } from "@/components/ui/separator";
import { getMovieByGenre } from "@/lib/api/get-by-genre";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

const GenrePage = () => {
  const [genreMovies, setGenreMovies] = useState([]);
  const router = useRouter();
  const genreIds = router.query.genreIds;

  useEffect(() => {
    const fetchMovies = async () => {
      if (!genreIds) return;
      console.log("fetching movies", genreIds)
     try {
       const data = await getMovieByGenre(genreIds, 1);
       console.log("fetch", JSON.stringify(data, null, 2));
       
      setGenreMovies(data);
    } catch (err) {
      console.error("error fetching movies", err)
    }
     }
    fetchMovies();
  }, [genreIds]);

  return (
    <div>
      <Header />
      <div className="max-w-[1280px] mx-auto">
        <h1>Search filter</h1>
        <div className="flex mt-8">
          <div className="w-[387px]">
            <MovieGenres />
          </div>
          <Separator orientation="vertical" className="mx-4" />
          <div className="w-[804px] flex flex-wrap gap-2">
            {genreMovies?.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default GenrePage;
