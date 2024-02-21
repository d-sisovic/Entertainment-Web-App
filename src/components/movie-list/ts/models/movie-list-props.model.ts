import { IMovieItem } from "../../../../ts/models/movie-item.model";

export interface IMovieListProps {
    title: string;
    movies: IMovieItem[];
}
