import tvIcon from "../../../assets/icon-category-tv.svg";
import { Category } from "../../../ts/enums/category.enum";
import movieIcon from "../../../assets/icon-category-movie.svg";
import { IMovieInfoProps } from "./ts/models/movie-info-props.model";

const MovieInfo = ({ movie, isTrending }: IMovieInfoProps) => {
    const titleStyles = isTrending ? "text-[0.938rem]/[1.188rem] tablet:text-[1.5rem]/[1.875rem]" : "text-[0.875rem]/[1.125rem] tablet:text-[1.125rem]/[1.438rem] tablet:mt-[0.313rem]";
    const containerStyles = isTrending ? "text-[0.75rem]/[0.938rem] gap-2 tablet:text-[0.938rem]/[1.188rem]" : "text-[0.688rem]/[0.875rem] gap-1.5 tablet:gap-2 tablet:text-[0.813rem]/[1rem]";

    return <>
        <div className={`flex items-center text-white-c opacity-75 ${containerStyles}`}>
            <span>{movie.year}</span>

            <span className="bg-white-c opacity-75 rounded-full w-[3px] h-[3px]"></span>

            <div className="flex items-center gap-[0.375rem]">
                {movie.category === Category.TV_SERIES && <img src={tvIcon} alt="tvIcon" />}

                {movie.category === Category.MOVIE && <img src={movieIcon} alt="movieIcon" />}

                <span>{movie.category}</span>
            </div>

            <span className="bg-white-c opacity-75 rounded-full w-[3px] h-[3px]"></span>

            <span>{movie.rating}</span>
        </div>

        <p className={`text-white-c font-outfit-m mt-1 ${titleStyles}`}>{movie.title}</p>
    </>;
};

export default MovieInfo;
