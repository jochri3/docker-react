import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Alex/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders Alexandro Del Pierro", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Alex/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders Alexandro Del D", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Alex/i);
  expect(linkElement).toBeInTheDocument();
});
