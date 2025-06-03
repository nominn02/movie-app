// import { getMovieGenres } from "@/lib/api/get-movie-genres";
// import { useEffect, useState } from "react";
// import { useRouter } from "next/router";
// import { Button } from "../ui/button";

// export const MovieGenres = () => {
//   const router = useRouter();
//   const [movieGenres, setMovieGenres] = useState([]);
//   const [genreIds, setGenreIds] = useState([]);
//   const [genreNames, setGenreNames] = useState([]);

//   useEffect(() => {
//     const fetchGenres = async () => {
//       const { genres } = await getMovieGenres();
//       setMovieGenres(genres);
//     };
//     fetchGenres();
//   }, []);

//   const handleSelectGenre = (id, name) => {
//     if (genreIds.includes(id)) return;

//     const updatedIds = [...genreIds, id];
//     const updatedNames = [...genreNames, name];

//     setGenreIds(updatedIds);
//     setGenreNames(updatedNames);

//     router.push({
//       pathname: "/genres",
//       query: {
//         genreIds: updatedIds.join(","),
//         name: updatedNames.join(","),
//       },
//     });
//   };

//   return (
//     <div className="my-4 flex flex-wrap gap-2">
//       {movieGenres?.map((genre) => (
//         <Button
//           key={genre.id}
//           className="w-fit bg-white text-foreground hover:bg-none text-[12px] font-bold"
//           onClick={() => handleSelectGenre(genre.id, genre.name)}>
//           {genre.name}
//         </Button>
//       ))}
//     </div>
//   );
// };

import { getMovieGenres } from "@/lib/api/get-movie-genres";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Button } from "../ui/button";

export const MovieGenres = () => {
  const router = useRouter();
  const [movieGenres, setMovieGenres] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);

  useEffect(() => {
    const fetchGenres = async () => {
      const { genres } = await getMovieGenres();
      setMovieGenres(genres);
    };
    fetchGenres();
  }, []);

  useEffect(() => {
    if (!router.isReady) return;

    const ids = router.query.genreIds?.toString().split(",") || [];
    const names = router.query.name?.toString().split(",") || [];

    const genresFromUrl = ids.map((id, index) => ({
      id: Number(id),
      name: names[index] || "Unknown",
    }));

    setSelectedGenres(genresFromUrl);
  }, [router.isReady]);

  const handleSelectGenre = (id, name) => {
    const alreadySelected = selectedGenres.find((g) => g.id === id);
    if (alreadySelected) return;

    const updatedGenres = [...selectedGenres, { id, name }];
    setSelectedGenres(updatedGenres);

    const genreIds = updatedGenres.map((g) => g.id).join(",");
    const genreNames = updatedGenres.map((g) => g.name).join(",");

    router.push(
      {
        pathname: "/genres",
        query: { genreIds, name: genreNames },
      },
      undefined,
      { shallow: true }
    );
  };

  return (
    <div className="my-4 flex flex-wrap gap-2">
      {movieGenres.map((genre) => (
        <Button
          key={genre.id}
          onClick={() => handleSelectGenre(genre.id, genre.name)}
          className={`w-fit text-[12px] font-bold ${
            selectedGenres.some((g) => g.id === genre.id)
              ? "bg-black text-white"
              : "bg-white text-foreground"
          }`}>
          {genre.name}
        </Button>
      ))}
    </div>
  );
};
