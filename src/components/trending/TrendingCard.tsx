import { useAppStore } from "../../store";
import Bookmark from "../ui/bookmark/Bookmark";
import MovieInfo from "../ui/movie-info/MovieInfo";
import { IMovieItemProps } from "../../ts/models/movie-item-props.model";

const TrendingCard = ({ movie }: IMovieItemProps) => {
    const { toggleMovieBookmark } = useAppStore().movies;

    const onToggleBookmark = () => toggleMovieBookmark(movie);

    return <div className="w-[15rem] h-[8.75rem] relative bg-cover rounded-[0.5rem] pt-2 pr-2 pb-4 pl-4"
        style={{ backgroundImage: `url(${movie.thumbnail.trending.small})` }}>
        <Bookmark isBookmarked={movie.isBookmarked} handleBookmarkClick={onToggleBookmark} ></Bookmark>

        <div className="mt-[5rem]">
            <MovieInfo movie={movie} isTrending={true}></MovieInfo>
        </div>
    </div>;
};

export default TrendingCard;