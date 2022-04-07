import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Alex/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders learn react abc", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Alex/i);
  expect(linkElement).toBeInTheDocument();
});
