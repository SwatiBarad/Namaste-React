import { render, screen } from "@testing-library/react";
import Rescard, { withOpenLabel } from "../components/Rescard";

import MOCK_DATA from "../MockData/mock.json";
import "@testing-library/jest-dom";

it("should render restaurant name", () => {
  render(<Rescard resData={MOCK_DATA} />);

  //quering
  const name = screen.getByText("Cabane Bambou");
  //assertion
  expect(name).toBeInTheDocument();
});

it("should render component withOpen label", () => {
  // withOpenLabel to Be In The Documenet
});
