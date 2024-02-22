import { useAppStore } from "../../store";
import Bookmark from "../ui/bookmark/Bookmark";
import PlayMovie from "../ui/play-movie/PlayMovie";
import MovieInfo from "../ui/movie-info/MovieInfo";
import { useMoviePicture } from "../../hooks/use-movie-picture";
import { IMovieItemProps } from "../../ts/models/movie-item-props.model";

const TrendingCard = ({ movie }: IMovieItemProps) => {
    const picture = useMoviePicture(movie, true);
    const { toggleMovieBookmark } = useAppStore().movies;
    const onToggleBookmark = () => toggleMovieBookmark(movie);

    return <div className="group flex flex-col justify-between min-w-[15rem] h-[8.75rem] relative bg-cover rounded-[0.5rem] pt-2 pr-2 pb-4 pl-4
    tablet:min-w-[29.375rem] tablet:h-[14.375rem] tablet:pt-4 tablet:pr-6 tablet:p-8"
        style={{ backgroundImage: `url(${picture})` }}>
        <div className="opacity-0 group-hover:opacity-100">
            <PlayMovie></PlayMovie>
        </div>

        <Bookmark isBookmarked={movie.isBookmarked} handleBookmarkClick={onToggleBookmark} ></Bookmark>

        <div>
            <MovieInfo movie={movie} isTrending={true}></MovieInfo>
        </div>
    </div>;
};

export default TrendingCard;