import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../components/Home/Home";

// 1.2 the router from documentation is defined here and export it and also import createBrowserRouter
export const router = createBrowserRouter([
  {
    path: "/",
    // 2.2 implement the Root component in Routes to show in ui
    Component: Root,
    // 2.3 created error element to show error if the path is not "/" it will show errorElement
    errorElement: <ErrorPage></ErrorPage>,
    // 2.4 now created children to show the home page as default i.e when index: true, Root path: "/", the home page path is set also "/" to show as default page.
    children: [
      {
        index: true,
        path: "/",
        // 6.1 fetching the data using loader. As i want to show the data in Home page so go to the Home component
        loader: () => fetch("/public/booksData.json"),
        Component: Home,
      },
    ],
  },
]);
