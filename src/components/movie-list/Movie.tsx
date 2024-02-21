import { useAppStore } from "../../store";
import Bookmark from "../ui/bookmark/Bookmark";
import MovieInfo from "../ui/movie-info/MovieInfo";
import { IMovieItemProps } from "../../ts/models/movie-item-props.model";

const Movie = ({ movie }: IMovieItemProps) => {
    const { toggleMovieBookmark } = useAppStore().movies;
    
    const onToggleBookmark = () => toggleMovieBookmark(movie);

    return <div className="flex flex-col">
        <div className="w-[10.25rem] h-[6.875rem] relative bg-cover rounded-[0.5rem] p-2 mb-2"
            style={{ backgroundImage: `url(${movie.thumbnail.regular.small})` }}>
            <Bookmark isBookmarked={movie.isBookmarked} handleBookmarkClick={onToggleBookmark} ></Bookmark>
        </div>

        <MovieInfo movie={movie}></MovieInfo>
    </div>
};

export default Movie;
