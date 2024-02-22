import { useMemo } from "react";
import MovieList from "../movie-list/MovieList";
import { Category } from "../../ts/enums/category.enum";
import { useSelectNonTrendingMovies } from "../../store";

const BookmarkList = () => {
    const movies = useSelectNonTrendingMovies();
    const bookmarkedMovies = useMemo(() => movies.filter(movie => movie.category === Category.MOVIE), [movies]);
    const bookmarkedTvSeries = useMemo(() => movies.filter(movie => movie.category === Category.TV_SERIES), [movies]);

    const haveBookmarkedMovies = !!bookmarkedMovies.length;
    const haveBookmarkedTvSeries = !!bookmarkedTvSeries.length;

    return <>
        {!haveBookmarkedMovies && !haveBookmarkedTvSeries && <h1 className="text-[1.25rem]/[1.563rem] text-white-c my-6">No Bookmarked Items</h1>}

        {haveBookmarkedMovies && <MovieList movies={bookmarkedMovies} title="Bookmarked Movies"></MovieList>}

        {haveBookmarkedTvSeries && <MovieList movies={bookmarkedTvSeries} title="Bookmarked TV Series"></MovieList>}
    </>;
};

export default BookmarkList;