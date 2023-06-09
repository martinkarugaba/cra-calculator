import React from "react";
import { render } from "@testing-library/react";
import SingleButton from "../SingleButton";
import AppContext from "../../context/context";

describe("SingleButton component", () => {
  test("renders correctly", () => {
    const props = {
      buttonName: "Test Button",
      basis: "basis-class",
      bg: "bg-class",
    };

    const { container } = render(
      <AppContext>
        <SingleButton {...props} />
      </AppContext>
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
