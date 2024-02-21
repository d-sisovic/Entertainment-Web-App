import { IMovieItem } from "./movie-item.model";
import { Category } from "../enums/category.enum";

export interface IMovieStore {
    filter: string;
    category: Category;
    movies: IMovieItem[];
 
    setFilter: (filter: string) => void;
    setMovies: (movies: IMovieItem[]) => void;
    setCategory: (category: Category) => void;
    toggleMovieBookmark: (movie: IMovieItem) => void;
}
