import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import getMovieById from "@/utils/getMovieById";
import getMoreLikeThis from "@/lib/api/get-more-like-this";
import MovieDetails from "@/components/details/MovieDetails";
import MoreLikeThis from "@/components/details/MoreLikeThis";
export default function Page() {
 const router = useRouter();
 const movieId = router.query.movieId;
 const [movie, setMovie] = useState({});
 const [moreLikeThis, setMoreLikeThis] = useState([]);
 useEffect(() => {
   if (!movieId) return;
   const fetchDetails = async () => {
     const [movieData, similarMovies] = await Promise.all([
       getMovieById(movieId),
       getMoreLikeThis(movieId),
     ]);
     setMovie(movieData);
     setMoreLikeThis(similarMovies);
   };
   fetchDetails();
 }, [movieId]);
 return (
<div className="w-full lg:max-w-[1278px] mx-auto">
<Header />
<MovieDetails movie={movie} />
{/* <MoreLikeThis movies={moreLikeThis} /> */}
<Footer />
</div>
 );
}