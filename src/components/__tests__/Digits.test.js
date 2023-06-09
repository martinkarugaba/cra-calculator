import React from "react";
import { render } from "@testing-library/react";
import SingleButton from "../SingleButton";
import { useGlobalContext } from "../../context/context";

jest.mock("../../context/context", () => ({
  __esModule: true,
  useGlobalContext: jest.fn(),
}));

describe("SingleButton component", () => {
  test("renders correctly", () => {
    useGlobalContext.mockReturnValue({
      handleClick: jest.fn(),
    });

    const props = {
      buttonName: "Test Button",
      basis: "basis-class",
      bg: "bg-class",
    };

    const { container } = render(<SingleButton {...props} />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
