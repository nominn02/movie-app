import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MovieCarousel } from "@/components/MovieCarousel";
import { Popular } from "@/components/Popular";
import { TopRated } from "@/components/TopRated";
import { Upcoming } from "@/components/Upcoming";
import { useEffect, useState } from "react";
import { getNowPlayingMovies } from "../lib/api/get-playing-now";

const Home = () => {
  return (
    <div className="w-full lg:max-w-[1278px] mx-auto">
      <Header />
      <MovieCarousel />
      <Upcoming />
      <Popular />
      <TopRated />
      <Footer />
    </div>
  );
};
export default Home;
