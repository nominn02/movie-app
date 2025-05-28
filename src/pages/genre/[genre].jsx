import { MovieCard } from "@/components/MovieCard";
import { getMovieByGenre } from "@/lib/api/get-by-genre";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const GenrePage = () => {
  const router = useRouter();
  const genre = router.query.genre;
  // console.log(genre)
  const [byGenre, setByGenre] = useState([]);
  console.log(byGenre);

  useEffect(() => {
    const fetchGenres = async () => {
      const movie = await getMovieByGenre(genre, 1);
      // console.log([getMovieByGenre]);

      setByGenre(movie);
    };
    fetchGenres();
  }, [genre]);

  return (
    <div>
      genre: {genre}
      {byGenre?.map((movie) => (
        <MovieCard key={movie.genreIds} movie={movie} />
      ))}
    </div>
  );
};

export default GenrePage;
