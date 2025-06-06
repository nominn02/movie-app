import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HeaderSearch } from "@/components/Search";

export default function Page() {
  return (
    <div>
      <Header />
      <h1>Search results</h1>
      <div className="w-[804px] flex flex-wrap gap-2">
        {genreMovies?.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
      <HeaderSearch />
      <Footer />
    </div>
  );
}
