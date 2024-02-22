import { useEffect } from "react";
import Header from "../header/Header";
import styles from "./Home.module.scss";
import Search from "../ui/search/Search";
import Loading from "../ui/loading/Loading";
import Trending from "../trending/Trending";
import MixedList from "../mixed-list/MixedList";
import { useQuery } from "@tanstack/react-query";
import { fetchMovies } from "../../utils/async-util";
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

    return <div className="desktop:flex flex-row gap-9">
        <Header></Header>

        <div className={`mx-4 tablet:mx-[1.531rem] desktop:mx-0 desktop:mt-16 desktop:flex-1 ${styles.content}`}>
            <Search isFilterSet={isFilterSet} filter={filter}></Search>

            {!isFilterSet && showTrending && <Trending></Trending>}

            {category !== Category.BOOKMARK && <MixedList></MixedList>}

            {category === Category.BOOKMARK && <BookmarkList></BookmarkList>}
        </div>
    </div>
};

export default Home;
