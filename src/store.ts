import { create } from "zustand";
import { IUser } from "./ts/models/user.model";
import { Category } from "./ts/enums/category.enum";
import { IAppStore } from "./ts/models/app-store.model";
import { IMovieItem } from "./ts/models/movie-item.model";

export const useAppStore = create<IAppStore>((set, get) => ({
    user: {
        user: null,
        loading: true,
        logoutUser: () => set({}, true),
        setUser: (user: IUser | null) => set({ user: { ...get().user, user, loading: false } })
    },
    movies: {
        filter: "",
        movies: [],
        category: Category.ALL,
        setFilter: (filter: string) => set({ movies: { ...get().movies, filter } }),
        setMovies: (movies: IMovieItem[]) => set({ movies: { ...get().movies, movies } }),
        setCategory: (category: Category) => set({ movies: { ...get().movies, category } }),
        toggleMovieBookmark: (movie: IMovieItem) => {
            const moviesState = get().movies;
            const updatedMovies = getUpdatedBookmarkMovies(movie, moviesState.movies);

            set({ movies: { ...moviesState, movies: updatedMovies } });
        },
    }
}));

export const useSelectTrendingMovies = () => {
    const { movies, filter } = useAppStore().movies;

    return movies.filter(movie => isMatchingByTitle(movie.title, filter) && movie.isTrending);
};

export const useSelectNonTrendingMovies = () => {
    const { movies, category, filter } = useAppStore().movies;
    const filteredMovies = movies.filter(movie => isMatchingByTitle(movie.title, filter) && isMatchingByCategory(movie, category));

    if (filter.length || category !== Category.ALL) { return filteredMovies.slice(); }

    return filteredMovies.filter(movie => !movie.isTrending);
};

export const useIsFilterSet = () => !!useAppStore().movies.filter.length;

export const useGetFilteredMoviesLength = () => useSelectNonTrendingMovies().length;

export const useShowTrending = () => useAppStore().movies.category === Category.ALL;

export const useGetSearchPlaceholder = () => {
    const { category } = useAppStore().movies;

    switch (category) {
        case Category.ALL:
            return "Search for movies or TV series";
        case Category.MOVIE:
            return "Search for movies";
        case Category.TV_SERIES:
            return "Search for TV series";
        case Category.BOOKMARK:
            return "Search for bookmarked shows";
    }
};

export const useGetSearchTitleText = () => {
    const { category } = useAppStore().movies;

    switch (category) {
        case Category.ALL:
            return "Recommended for you";
        case Category.MOVIE:
            return "Movies";
        case Category.TV_SERIES:
            return "TV Series";
        case Category.BOOKMARK:
            return "";
    }
};

const getUpdatedBookmarkMovies = (movie: IMovieItem, existingMovies: IMovieItem[]) => {
    return existingMovies.map(existingMovie => {
        const { title, isBookmarked } = existingMovie;

        if (title !== movie.title) { return existingMovie; }

        return { ...existingMovie, isBookmarked: !isBookmarked };
    });
};

const isMatchingByCategory = (movie: IMovieItem, category: Category) => {
    if (category === Category.BOOKMARK) { return movie.isBookmarked; }

    return category === Category.ALL || movie.category === category;
};

const isMatchingByTitle = (title: string, filter: string) => title.toLowerCase().includes(filter.toLowerCase());
