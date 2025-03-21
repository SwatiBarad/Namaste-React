import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import appStore from "../redux/appStore";
import Header from "../components/Header";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

// wrap all test case in describe

describe("Testing Header Component", () => {
  // beforeAll(() => {
  //   console.log("Before All");
  // });

  // beforeEach(() => {
  //   console.log("Before Each");
  // });

  // afterAll(() => {
  //   console.log("After All");
  // });

  // afterEach(() => {
  //   console.log("After Each");
  // });

  it("should remder login button", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
    //Quring

    const loginBtn = screen.getByRole("button");
    //Assertion

    expect(loginBtn).toBeInTheDocument();
  });

  it("should render Header Component with a Cart Items 0", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    const cartItems = screen.getByRole("paragraph");

    expect(cartItems).toBeInTheDocument();
  });

  it("should render cart with items", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
    const cartItems = screen.getByTestId("cart");

    expect(cartItems).toBeInTheDocument();
  });

  it("should rchange log-in button to log-out on click", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
    //Quring

    const loginBtn = screen.getByRole("button", { name: "Log-In" });

    fireEvent.click(loginBtn);

    const logoutBtn = screen.getByRole("button", { name: "Log-Out" });
    //Assertion

    expect(logoutBtn).toBeInTheDocument();
  });
});
