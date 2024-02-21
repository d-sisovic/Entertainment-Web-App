import MovieList from "../movie-list/MovieList";
import { useGetSearchTitleText, useSelectNonTrendingMovies } from "../../store";

const MixedList = () => {
    const title = useGetSearchTitleText();
    const nonTrendingMovies = useSelectNonTrendingMovies();

    return <MovieList movies={nonTrendingMovies} title={title}></MovieList>
};

export default MixedList;
