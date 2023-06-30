import { useState } from "react"

export const useSearch = (initial) => {
    const [searchMovies, setSearchMovies] = useState(initial)
    const onChange = (event) => {
        setSearchMovies(event.target.value)
    }

    return {searchMovies,onChange}
}