import { ArrowBigRight } from "lucide-react";
import { MovieCard } from "./MovieCard";

export const Popular = () => {
  const [nowPlayingMovies,getNowPlayingMovies] = useState([])

  useEffect(() => {
      const fetchMovies = async () => {
        const nowPlayingMovies = await getNowPlayingMovies();
  
        setMovies(nowPlayingMovies);
      };
  
      fetchMovies();
    }, []);
  return (
    <div className="flex flex-col gap-8 px-5 md:px-0">
      <div className="flex justify-between">
        <h1>Popular</h1>
        <ArrowBigRight />
      </div>
      <div className="grid gap-2 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {Array.from({ length: 10 }).map((_, index) => (
          <MovieCard key={index} />
        ))}
      </div>
    </div>
  );
};
