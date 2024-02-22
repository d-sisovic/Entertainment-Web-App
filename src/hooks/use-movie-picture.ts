import { useEffect, useState } from "react";
import { useWindowSize } from "./use-window-size";
import { WindowSize } from "../ts/enums/window-size.enum";
import { IMovieItem } from "../ts/models/movie-item.model";

const getPicture = (movie: IMovieItem, isTrending: boolean, windowSize: WindowSize) => {
    const { trending, regular } = movie.thumbnail;
    const thumbnail = isTrending ? trending : regular;

    switch (windowSize) {
        case WindowSize.MOBILE:
            return thumbnail.small;
        case WindowSize.TABLET:
            return isTrending ? trending.large : regular.medium;
        case WindowSize.DESKTOP:
            return thumbnail.large;
    }
};

export const useMoviePicture = (movie: IMovieItem, isTrending: boolean) => {
    const windowSize = useWindowSize();
    const [picture, setPicture] = useState<string>("");

    useEffect(() => setPicture(getPicture(movie, isTrending, windowSize)), [windowSize, movie, isTrending]);

    return picture;
}