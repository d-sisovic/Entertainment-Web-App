import { IMovieItem } from "../../../../../ts/models/movie-item.model";

export interface IMovieInfoProps {
    movie: IMovieItem;
    isTrending?: boolean;
}
