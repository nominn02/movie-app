import { getMovieGenres } from "@/lib/api/get-movie-genres";

import { useEffect, useState } from "react";

import { Badge } from "../ui/badge";
import { useRouter } from "next/router";

export const MovieGenres = () => {
    const router = useRouter();
  const [movieGenres, setMovieGenres] = useState([]);
  const [genreIds, setGenreIds] = useState([]);

  useEffect(() => {
    const fetchGenres = async () => {
      const { genres } = await getMovieGenres();

      setMovieGenres(genres);
    };
    fetchGenres();
  }, []);

   const handleSelectGenre = (id, name) => {
      setGenreIds([...genreIds, id]);

      router.push(`/genres?genreIds=${genreIds}&name=${name}`);
    };

  return (
 
        <div className="my-4">
        {movieGenres?.map((genre) => (
         <Badge
          className="w-fit bg-white text-foreground hover:bg-none text-[12px] font-bold"
          onClick={() => handleSelectGenre(genre.id, genre.name)}
        >
          {genre.name}  
        </Badge>
        ))}
        </div>
     
  );
};

