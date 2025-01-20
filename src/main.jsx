
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/home";
import Events from "./components/events";
import Services from "./components/services";
import Virtualtours from "./components/virtualtours";
import App from "./App";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/events",
        element: <Events />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/virtualtours",
        element: <Virtualtours />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
 );