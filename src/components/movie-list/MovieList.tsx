import Movie from "./Movie";
import { useIsFilterSet } from "../../store";
import { IMovieListProps } from "./ts/models/movie-list-props.model";

const MovieList = ({ movies, title }: IMovieListProps) => {
    const isFilterSet = useIsFilterSet();

    return <>
        {!isFilterSet && <h1 className="text-[1.25rem]/[1.563rem] text-white-c my-6">{title}</h1>} 

        <div className="flex flex-wrap gap-y-4 gap-x-3">
            {movies.map(movie => <Movie movie={movie} key={movie.title} ></Movie>)}
        </div>
    </>;
};

export default MovieList;
