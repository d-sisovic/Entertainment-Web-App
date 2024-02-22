import Movie from "./Movie";
import styles from "./MovieList.module.scss";
import { useIsFilterSet } from "../../store";
import { IMovieListProps } from "./ts/models/movie-list-props.model";

const MovieList = ({ movies, title }: IMovieListProps) => {
    const isFilterSet = useIsFilterSet();

    return <>
        {!isFilterSet && <h1 className="text-[1.25rem]/[1.563rem] text-white-c mb-6 tablet:text-[2rem]/[2.5rem] tablet:mt-[2.063rem]">{title}</h1>} 

        <div className={`grid gap-y-4 gap-x-[0.938rem] tablet:gap-y-6 tablet:gap-x-[1.813rem] desktop:gap-y-8 desktop:gap-x-10 ${styles.container}`}>
            {movies.map(movie => <Movie movie={movie} key={movie.title} ></Movie>)}
        </div>
    </>;
};

export default MovieList;
