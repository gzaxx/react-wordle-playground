import { ValueStatus } from "../../interfaces/row-data";
import { Letter } from "../../components/Letter";
import { render, screen } from "@testing-library/react";
import * as colors from "../../styles/colors";

const value = "A";

describe("Letter", () => {
  it("renders letter passed from props", () => {
    render(<Letter value={value} />);

    const div = screen.queryByRole("letter");
    expect(div).toHaveTextContent(value);
  });
  it("when letter is not checked render default background", () => {
    render(<Letter value={value} status={ValueStatus.notChecked} />);

    const div = screen.queryByRole("letter");
    expect(div).toHaveStyle(`background: ${colors.WHITE}`);
  });
  it("when letter is correct render green background", () => {
    render(<Letter value={value} status={ValueStatus.currect} />);

    const div = screen.queryByRole("letter");
    expect(div).toHaveStyle(`background: ${colors.GREEN}`);
  });
  it("when letter is incorrect render gray background", () => {
    render(<Letter value={value} status={ValueStatus.incorrect} />);

    const div = screen.queryByRole("letter");
    expect(div).toHaveStyle(`background: ${colors.GRAY}`);
  });

  it("when letter is in wrong position render yellow background", () => {
    render(<Letter value={value} status={ValueStatus.wrongPosition} />);

    const div = screen.queryByRole("letter");
    expect(div).toHaveStyle(`background: ${colors.YELLOW}`);
  });
});
