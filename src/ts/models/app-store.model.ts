import { IUserStore } from "./user-store.model";
import { IMovieStore } from "./movie-store.model";

export interface IAppStore {
    user: IUserStore;
    movies: IMovieStore;
}