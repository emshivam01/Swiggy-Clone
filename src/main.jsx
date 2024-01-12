import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Error from "./Components/Error.jsx";
import Contact from "./Components/Contact.jsx";
import Body from "./Components/Body.jsx";
import Restaurant from "./Components/Restaurant.jsx";
import RestauramtShimmer from "./Components/Restaurant/RestaurantShimmer.jsx";
import Testing from "./Components/Testing.jsx";
import Res from "./Components/Res.jsx";
import ClassyComponent from "./Components/ClassyComponent.jsx";
import LiveRestaurant from "./Components/LiveRestaurant.jsx";

const Lazyy = lazy(() => import("./Components/Lazy.jsx"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:id",
        element: <Restaurant />,
      },
      {
        path: "/testing",
        element: <Testing />,
      },
      {
        path: "/hotel",
        element: <LiveRestaurant />,
      },
      {
        path: "/res",
        element: <Res />,
      },
      {
        path: "/lazy",
        element: (
          <Suspense>
            <Lazyy />
          </Suspense>
        ),
      },
      {
        path: "/classy",
        element: <ClassyComponent name={"Classy"} />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <RouterProvider router={router} />
  // </React.StrictMode>
);
