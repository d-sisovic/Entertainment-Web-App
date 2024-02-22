import TrendingCard from "./TrendingCard";
import { useSelectTrendingMovies } from "../../store";

const Trending = () => {
    const trendingItems = useSelectTrendingMovies();

    return <>
        <h1 className="text-[1.25rem]/[1.563rem] text-white-c mb-4 tablet:text-[2rem]/[2.5rem] tablet:mb-[1.563rem]">Trending</h1>

        <div className="flex gap-4 tablet:gap-10 overflow-x-auto">
            {trendingItems.map(movie => <TrendingCard movie={movie} key={movie.title} />)}
        </div>
    </>;
};

export default Trending;