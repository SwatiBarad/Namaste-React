import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "/src/components/Header";
import Body from "./src/components/Body";
import About from "./src/components/About";
import Error from "./src/components/Error";
import RestaurantMenu from "./src/components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <React.Fragment>
      <Header />
      <Outlet />
    </React.Fragment>
  );
};
/* LAZY LOADING (CHUNKING)(DYNAMIC IMPORT)(ON DEMAND IMPORT)*/
const Contact = lazy(() => import("./src/components/Contact"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: (
          <suspense fallback="loading...">
            {" "}
            <Contact />
          </suspense>
        ),
      },
      {
        path: `/restaurants/:resId`,
        element: <RestaurantMenu />,
      },
    ],

    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<AppLayout />);
root.render(<RouterProvider router={appRouter} />);
