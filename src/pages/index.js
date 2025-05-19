import { Footer } from "@/components/Footer"
import { Header } from "@/components/Header"
import { MovieCard } from "@/components/MovieCard"
import { MovieCarouselItem } from "@/components/MovieCarouselItem"
 const Home = () => {
    return (
        <div>
            <MovieCarouselItem/>
            <MovieCard/>
            <Footer/>
            <Header/>
            
        </div>
    )
}
export default Home 