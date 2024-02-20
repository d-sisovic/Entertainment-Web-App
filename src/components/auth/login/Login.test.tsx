import Login from "./Login";
import { MemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";

vi.mock("@tanstack/react-query", () => ({
    useMutation: vi.fn().mockReturnValue(({ mutate: vi.fn() }))
}));

describe("Login component", () => {
    beforeEach(() => render(<MemoryRouter><Login /></MemoryRouter>))

    it("should render form", () => {
        const logoElement = screen.getByTestId("logo");

        expect(logoElement).toBeVisible();
    });
});