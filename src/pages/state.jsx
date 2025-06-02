import { useRouter } from "next/navigation";
import { useState } from "react";
import { parseAsBoolean, useQueryState } from "next-usequerystate";

const Page = () => {
    const [state, setState] = useState("movieId")
    const router = useRouter()
    const [queryState, setqueryState] = useQueryState('queryState', parseAsBoolean.withDefault(false)
    )
    const handleClick=()=>{
        router.push(`/newPage?queryState=${queryState}`)
    }
    return (
        <div>
        <button onClick={()}>click</button>
        </div>
    )
}
export default Page  