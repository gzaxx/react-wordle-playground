import { render, screen } from "@testing-library/react";
import Home from "../pages/index";

const tMap = new Map<string, string>([
  ["title", "Test Title"],
  ["footer.text", "Test Footer"],
]);
const t = (key: string) => tMap.get(key);
jest.mock("next-i18next", () => ({
  useTranslation: () => [t],
}));

describe("Home", () => {
  it("renders a heading", () => {
    render(<Home />);

    const heading = screen.getByRole("title");

    expect(heading).toHaveTextContent("Test Title");
  });
  it("renders a footer", () => {
    render(<Home />);

    const heading = screen.getByRole("footer");

    expect(heading).toHaveTextContent("Test Footer");
  });
});
