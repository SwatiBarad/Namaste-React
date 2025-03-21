import {
  findByTestId,
  fireEvent,
  render,
  screen,
} from "@testing-library/react";
import RestaurantMenu from "../components/RestaurantMenu";
import MOCK_DATA_MENU from "../MockData/ResMenuMockData.json";
import { act } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import appStore from "../redux/appStore";
import Header from "../components/Header";
import Cart from "../components/Cart";
import { BrowserRouter } from "react-router-dom";
import ItemList from "../components/ItemList";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA_MENU);
    },
  });
});

it("should render resMenu Component", async () => {
  await act(async () => {
    render(
      <Provider store={appStore}>
        <RestaurantMenu />
      </Provider>
    );
  });
});

it("should render resMenu Component with Recommended (20) text", async () => {
  await act(async () => {
    render(
      <Provider store={appStore}>
        <RestaurantMenu />
      </Provider>
    );
  });

  const accordianHeader = screen.getByText("Recommended (20)");
  expect(accordianHeader).toBeInTheDocument();

  fireEvent.click(accordianHeader);
  expect(screen.getAllByTestId("itemDiv").length).toBe(40);
});

it("should render cart in header", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
        </Provider>
      </BrowserRouter>
    );
  });

  const cartItems = screen.getByText("0");
  expect(cartItems).toBeInTheDocument();
});

it("Cart component test cases", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />

          <Cart />
        </Provider>
      </BrowserRouter>
    );
  });

  // const addBtns = screen.getAllByRole("button", { name: "Add +" });
  // fireEvent.click(addBtns);

  // console.log(addBtns);

  // const cartItems = screen.getByTestId("cart");
  // expect(cartItems).toBe("1");

  // expect(screen.getByText("0").toBe("1"));

  const clearCart = screen.getByRole("button", { name: "Clear Cart 🧹" });

  expect(clearCart).toBeInTheDocument();

  fireEvent.click(clearCart);
  expect(screen.getByText("0")).toBeInTheDocument();
});
