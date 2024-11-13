import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../components/App";
import TestWrapper from "./TestWrapper";

describe("Page", () => {
  it("renders an aside", () => {
    render(
      <TestWrapper>
        <App />
      </TestWrapper>
    );

    const aside = screen.getByTestId('aside');
    expect(aside).toBeInTheDocument();
  });
});
