import { render, screen } from "@testing-library/react";
import Contact from "../components/Contact";
import "@testing-library/jest-dom";

test("Should load contact us component", () => {
  render(<Contact />);

  const heading = screen.getByRole("heading");

  // Assertion
  expect(heading).toBeInTheDocument();
});

test("should load a button", () => {
  render(<Contact />);

  const btn = screen.getByRole("button");
  expect(btn).toBeInTheDocument();
});

test("input is there", () => {
  render(<Contact />);

  const inputName = screen.getByPlaceholderText("Name");

  //Assertion

  expect(inputName).toBeInTheDocument();
});
