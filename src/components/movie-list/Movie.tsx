import { useAppStore } from "../../store";
import Bookmark from "../ui/bookmark/Bookmark";
import PlayMovie from "../ui/play-movie/PlayMovie";
import MovieInfo from "../ui/movie-info/MovieInfo";
import { useMoviePicture } from "../../hooks/use-movie-picture";
import { IMovieItemProps } from "../../ts/models/movie-item-props.model";

const Movie = ({ movie }: IMovieItemProps) => {
    const picture = useMoviePicture(movie, false);
    const { toggleMovieBookmark } = useAppStore().movies;
    const onToggleBookmark = () => toggleMovieBookmark(movie);

    return <div className="flex flex-col w-[10.25rem] tablet:w-[13.75rem] desktop:w-[17.5rem]">
        <div style={{ backgroundImage: `url(${picture})` }}
            className="group h-[6.875rem] tablet:h-[8.75rem] desktop:h-[10.875rem] bg-cover rounded-[0.5rem] p-2 mb-2 tablet:p-4 bg-no-repeat relative">
            <div className="opacity-0 group-hover:opacity-100">
                <PlayMovie></PlayMovie>
            </div>

            <Bookmark isBookmarked={movie.isBookmarked} handleBookmarkClick={onToggleBookmark} ></Bookmark>
        </div>

        <MovieInfo movie={movie}></MovieInfo>
    </div>;
};

export default Movie;
