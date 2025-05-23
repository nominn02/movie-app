import { Star } from "lucide-react";

export const MovieDetails = ({ movie }) => {
  const imgUrl = `${process.env.NEXT_PUBLIC_TMDB_IMAGE_SERVICE_URL}${movie.backdrop_path}`;
  const posterUrl = `${process.env.NEXT_PUBLIC_TMDB_IMAGE_SERVICE_URL}${movie.poster_path}`;
  return (
    <div>
      <div>
        <img src={posterUrl} className="" />
        <div>genres</div>
        <p>{movie.overview}</p>
        <div>
          <p>director</p>
          <p>writers</p>
          <p>stars</p>
        </div>
      </div>
      <div>
        <div>
          <h1>{movie.title}</h1>
          <div>
            <p>date</p>
            <p>pg</p>
            <p>duration</p>
          </div>
        </div>
        <div>
           <div className="flex gap-[4px]">
              <Star className=" text-yellow-300 fill-amber-300 w-[16px] h-[16px]" />
              <div className="flex">
                <p className="text-[18px]  font-semibold text-[black] md:text-[white]">
                  {movie.vote_average}
                </p>
                <p className="text-[18px] font-medium text-grey-400">/10</p>
              </div>
            </div>
        </div>
        <img src={imgUrl} className="" />
      </div>
    </div>
  );
};
