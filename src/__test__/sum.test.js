import { render } from "@testing-library/react";
import sum from "../components/sum";

test("sum of both arguments", () => {
  const result = sum(3, 5);
  //Assertion
  expect(result).toBe(8);
});
