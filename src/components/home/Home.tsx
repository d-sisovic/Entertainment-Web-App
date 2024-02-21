import { useEffect } from "react";
import Header from "../header/Header";
import Search from "../ui/search/Search";
import Loading from "../ui/loading/Loading";
import Trending from "../trending/Trending";
import MixedList from "../mixed-list/MixedList";
import { useQuery } from "@tanstack/react-query";
import { fetchMovies } from "../../utils/fetch-util";
import { Category } from "../../ts/enums/category.enum";
import BookmarkList from "../bookmark-list/BookmarkList";
import { ReactQuery } from "../../ts/enums/react-query.enum";
import { useAppStore, useIsFilterSet, useShowTrending } from "../../store";

const Home = () => {
    const isFilterSet = useIsFilterSet();
    const showTrending = useShowTrending();

    const { filter, category, movies, setMovies } = useAppStore().movies;
    const { data } = useQuery({ queryFn: fetchMovies, queryKey: [ReactQuery.MOVIES_KEY], refetchInterval: 0 });

    useEffect(() => {
        if (!data?.length) { return; }

        setMovies(data);
    }, [data, setMovies]);

    if (!movies.length) { return <Loading></Loading>; }

    return <>
        <Header></Header>

        <div className="my-6 mx-4">
            <Search isFilterSet={isFilterSet} filter={filter}></Search>

            {!isFilterSet && showTrending && <Trending></Trending>}

            {category !== Category.BOOKMARK && <MixedList></MixedList>}

            {category === Category.BOOKMARK && <BookmarkList></BookmarkList>}
        </div>
    </>;
};

export default Home;
