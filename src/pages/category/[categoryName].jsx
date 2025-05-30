import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MovieCard } from "@/components/MovieCard";
import { Popular } from "@/components/Popular";
import { TopRated } from "@/components/TopRated";
import { Upcoming } from "@/components/Upcoming";
import { getSeeMore } from "@/lib/api/get-see-more";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Page() {
 const router = useRouter();
 const categoryName = router.query.CategoryName;
 const [category, setCategory] = useState([]);

useEffect(() => {
    if (!categoryName) return;
    const getUpcomingMovies = async () => {
        const data = await getSeeMore(categoryName);
        console.log("cafasf", data)

        setCategory(data?.results);
    };
    getUpcomingMovies();
}, [categoryName])

return (
    
    <div>
        <Header/>
        {(categoryName === "Upcoming" && <Upcoming data={category}/>) ||
        (categoryName === "TopRated" && <TopRated data={category}/>) ||
         (categoryName === "Popular" && <Popular data={category}/>) 
        } 
        {/* <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {upComingMovies?.map((movie) => (
          <MovieCard movie={movie} />
        ))}
        </div> */}
        <Footer/>
    </div>
)
}
