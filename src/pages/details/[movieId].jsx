import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getMovieById } from "@/utils/getMovieById";
import { MovieDetails } from "@/components/details/MovieDetails"
import { MoreLikeThis } from "@/components/details/MoreLikeThis";
import { getMoreLikeThis } from "@/lib/api/get-more-like-this";


export default function Page() {
  const router = useRouter();
  const movieId = router.query.movieId;

  const [movie, setMovie] = useState({});
  
  
  console.log("jjjjjj", movie);

   const [moreLikeThis, setMoreLikeThis] = useState([]);
   
   console.log("movie iddd:", moreLikeThis);
   

  useEffect(() => {
    const fetchMovies = async () => {
      const moreLike = await getMoreLikeThis(movieId);
      console.log("arrayyyy:", moreLike);
      
      setMoreLikeThis(moreLike);
    };

    fetchMovies();
  }, []);
  
 
  const effectCallback = () => {
    if (movieId === undefined) return;

    const getMovie = async () => {
      const data = await getMovieById(movieId);
      setMovie(data);
    };
    getMovie();
  };

  useEffect(effectCallback, [movieId]);

  return (
    <div className="w-full lg:max-w-[1278px] mx-auto">
      <Header />
      <MovieDetails movie={movie}/>
      {/* <MoreLikeThis/> */}
      <Footer />
    </div>
  );    
}
