import { IMovieItemThumbnail } from "./movie-item-thumbnail.model";
import { MovieItemCategory } from "../types/movie-item-category.type";

export interface IMovieItem {
    year: number;
    title: string;
    rating: string;
    isTrending: boolean;
    isBookmarked: boolean;
    category: MovieItemCategory;
    thumbnail: IMovieItemThumbnail;
}
