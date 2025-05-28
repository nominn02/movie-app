import { getMovieGenres } from "@/lib/api/get-movie-genres";

import { useEffect, useState } from "react";

import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

export const MovieGenres = () => {
  const [movieGenres, setMovieGenres] = useState([]);

  useEffect(() => {
    const fetchGenres = async () => {
      const { genres } = await getMovieGenres();

      setMovieGenres(genres);
    };
    fetchGenres();
  }, []);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>Genres</DropdownMenuTrigger>
      <DropdownMenuContent>
        {movieGenres?.map((genre) => (
          <Link key={genre.id} href={`/genre/${genre.id}`}>
            <DropdownMenuItem>{genre.name}</DropdownMenuItem>
          </Link>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
