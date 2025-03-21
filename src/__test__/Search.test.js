import { act, fireEvent, render, screen } from "@testing-library/react";
import Body from "../components/Body";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import MOCK_DATA from "../MockData/resListMockData.json";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should render body component", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });
});

it("should search `Burger` text in search input", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });

  const resDivBeforeSearch = screen.getAllByTestId("resDiv");
  expect(resDivBeforeSearch.length).toBe(20);

  const searchBtn = screen.getByTestId("searchBtn");
  expect(searchBtn).toBeInTheDocument();

  const searchInput = screen.getByPlaceholderText("Search Here");
  expect(searchInput).toBeInTheDocument();

  fireEvent.change(searchInput, { target: { value: "burger" } });
  fireEvent.click(searchBtn);

  const resDivAfterSearch = screen.getAllByTestId("resDiv");
  expect(resDivAfterSearch.length).toBe(1);
});

it("Should filter top rated restaurant", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });

  //Qureing
  const resDivBeforeSearch = screen.getAllByTestId("resDiv");
  expect(resDivBeforeSearch.length).toBe(20);

  const ratedBtn = screen.getByRole("button", {
    name: "Top Rated Restaurants",
  });

  //Assertion

  fireEvent.click(ratedBtn);

  const resDivAfterSearch = screen.getAllByTestId("resDiv");
  expect(resDivAfterSearch.length).toBe(7);
});
