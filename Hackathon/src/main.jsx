import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./components/Store/Store";
import App from "./App";
import Home from "./Pages/Home";
import FindTeam from "./Pages/FindTeam";
import Notifications from "./components/Notifications";
import Profile from "./Pages/Profile";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Authlayout from "./components/Authlayout";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />, // Public route
      },
      {
        path: "/find-team",
        element: (
          <Authlayout Authentication={true}>
            <FindTeam />
          </Authlayout>
        ),
      },
      {
        path: "/notifications",
        element: (
          <Authlayout Authentication={true}>
            <Notifications />
          </Authlayout>
        ),
      },
      {
        path: "/profile",
        element: (
          <Authlayout Authentication={true}>
            <Profile />
          </Authlayout>
        ),
      },
      {
        path: "/login",
        element: (
          <Authlayout Authentication={false}>
            <Login />
          </Authlayout>
        ),
      },
      {
        path: "/signup",
        element: (
          <Authlayout Authentication={false}>
            <Signup />
          </Authlayout>
        ),
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
