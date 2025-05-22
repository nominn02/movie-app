import { getMovieById } from "@/utils"
import { useRouter } from "next/router";
import { useEffect, useState } from "react";


export default function Page() {
    const router = useRouter();
    const movieId = router.query.movieId;
    const [movie, setMovie] = useState({});

    const getMovie = async () => {
        const data = await getMovieById(movieId);
    setMovie(data);
    }

useEffect(() => {
    getMovie();
}, []);
return <div>

</div>
} 