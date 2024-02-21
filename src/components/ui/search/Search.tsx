import { FormEvent } from "react";
import { debounce } from "../../../utils/util";
import searchIcon from "../../../assets/icon-search.svg";
import { ISearchProps } from "./ts/models/search-props.model";
import { useAppStore, useGetFilteredMoviesLength, useGetSearchPlaceholder } from "../../../store";

const Search = ({ filter, isFilterSet }: ISearchProps) => {
    const { setFilter } = useAppStore().movies;
    const placeholder = useGetSearchPlaceholder();
    const filteredMoviesLength = useGetFilteredMoviesLength();

    const handleInputChange = (event: FormEvent<HTMLInputElement>) => setFilter((event.target as HTMLInputElement).value);

    const debouncedFn = debounce(handleInputChange, 250);

    const handleInputDebounced = (event: FormEvent<HTMLInputElement>) => debouncedFn(event);

    return <>
        <div className="my-6 flex items-start justify-between gap-4">
            <img src={searchIcon} alt="search" />

            <input type="text" name="search" className="bg-transparent outline-none text-[1rem]/[1.875rem] text-white-c flex-1
        placeholder-white placeholder-opacity-50 caret-red-c focus-within:border-b focus-within:border-b-1 focus-within:greyish-blue-c"
                placeholder={placeholder} onInput={handleInputDebounced} />
        </div>

        {isFilterSet && <p className="text-[1.25rem]/[1.563rem] text-white-c mb-6">
            Found {filteredMoviesLength} results for "{filter}"
        </p>}
    </>;
};

export default Search;