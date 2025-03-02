import React, { lazy, Suspense, useContext, useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import Header from "/src/components/Header";
import Body from "./src/components/Body";
import About from "./src/components/About";
import Error from "./src/components/Error";
import RestaurantMenu from "./src/components/RestaurantMenu";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  data,
} from "react-router-dom";
import UserContext from "./src/utils/UserContext";

/* LAZY LOADING (CHUNKING)(DYNAMIC IMPORT)(ON DEMAND IMPORT)*/
const Contact = lazy(() => import("./src/components/Contact"));

const AppLayout = () => {
  const [userName, setUserName] = useState();

  useEffect(() => {
    // Make an API call and send username and password
    const data = {
      name: "Swati Barad",
    };
    setUserName(data.name);
  }, []);
  return (
    <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
      <div className="app">
        <Header />
        <Outlet />
      </div>
    </UserContext.Provider>
  );
};

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
