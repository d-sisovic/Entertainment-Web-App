import BookmarkList from "./BookmarkList";
import { render, screen } from "@testing-library/react";
import { bookmarkedMoviesMock, bookmarkedTvSeriesMock } from "../../test/util";

const mocks = vi.hoisted(() => ({
    useIsFilterSet: vi.fn(),
    useSelectNonTrendingMovies: vi.fn(),
    useAppStore: vi.fn().mockReturnValue({ movies: { toggleMovieBookmark: vi.fn() } })
}));

vi.mock("../../store", () => ({ 
    useAppStore: mocks.useAppStore,
    useIsFilterSet: mocks.useIsFilterSet,
    useSelectNonTrendingMovies: mocks.useSelectNonTrendingMovies 
}));

describe("Bookmark List component", () => {
    it("should render empty bookmarked items", () => {
        mocks.useSelectNonTrendingMovies.mockReturnValue([]);

        render(<BookmarkList />);

        const noBookmarkedItems = screen.getByText("No Bookmarked Items");

        expect(noBookmarkedItems).toBeVisible();
    });

    it("should render 2 bookmarked movies", () => {
        mocks.useIsFilterSet.mockReturnValue(false);
        mocks.useSelectNonTrendingMovies.mockReturnValue(bookmarkedMoviesMock);

        render(<BookmarkList />);

        const movieCards = screen.getAllByTestId("movie");

        expect(movieCards).toHaveLength(2);
    });

    it("should render 1 bookmarked tv series", () => {
        mocks.useIsFilterSet.mockReturnValue(false);
        mocks.useSelectNonTrendingMovies.mockReturnValue(bookmarkedTvSeriesMock);

        render(<BookmarkList />);

        const movieCards = screen.getAllByTestId("movie");

        expect(movieCards).toHaveLength(1);
    });
});