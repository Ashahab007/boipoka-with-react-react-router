import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../components/Home/Home";
import About from "../components/About/About";
import BookDetails from "../components/BookDetails/BookDetails";
import ReadList from "../pages/ReadList/ReadList";

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
      // 7.1 creating about page and component
      {
        path: "about",
        Component: About,
      },
      {
        // 8.1 As we want to show the details of the book. To grab the specific details of the book we need it dynamically. here, we show the  details of specific book by grabbing the id dynamically using (:) which is a react router dynamic symbol
        path: "bookdetails/:id",
        // 9.2 use loader to fetch the data to use in useLoaderDta() for compare with useParam() data.
        loader: () => fetch("/public/booksData.json"),
        Component: BookDetails,
      },
      // 11.2 set the ReadList in routes
      {
        path: "readlist",
        // 11.3 As we want to compare with the localStorage so first fetch the all data using loader
        loader: () => fetch("/public/booksData.json"),
        Component: ReadList,
      },
    ],
  },
]);
