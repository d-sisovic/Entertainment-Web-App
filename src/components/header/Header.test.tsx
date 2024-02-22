import Header from "./Header";
import { render, screen } from "@testing-library/react";

vi.mock("../../store", () => ({
    useAppStore: vi.fn().mockReturnValue({ movies: { } })
}));

describe("Header component", () => {
    beforeEach(() => render(<Header />));

    it("should render any of the icons", () => {
        const homeImage = screen.getByAltText("home");

        expect(homeImage).toBeVisible();
    });
});