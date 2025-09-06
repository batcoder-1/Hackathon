import App from "./App";
import React from "react";
import "./index.css";
import { createRoot } from "react-dom/client";
import Home from "./Pages/Home";
import FindTeam from "./Pages/FindTeam";
import Notifications from "./components/Notifications";
import Profile from "./Pages/Profile";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { Provider } from "react-redux";
import store from "./components/Store/Store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
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
        path: "/find-team",
        element: <FindTeam />,
      },
      {
        path: "/notifications",
        element: <Notifications />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
    ],
  },
]);
const root = createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
