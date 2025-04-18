import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
// 11.7 Import getItemsFromDB
import { getItemsFromDB } from "../../../public/utilities/localStorage";
//   11.8 setup react table and use it
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Book from "../Book/Book";

// 11.1 creating readlist to show in ui create the ReadList Component
const ReadList = () => {
  // 11.4 get the data using useLoaderData
  const data = useLoaderData();
  console.log(data);

  // 11.10 defining state to assign readListedBook
  const [readList, setReadList] = useState([]);

  //  11.5 get the data from local storage using useEffect()
  useEffect(() => {
    const storedBookId = getItemsFromDB();
    console.log(storedBookId);
    // 11.6 as the id found in string  so converted it to number to compare it with data
    const ConvertedBookId = storedBookId.map((id) => parseInt(id));
    console.log(ConvertedBookId);

    // 11.7 as we want to get the all data that are stored in local storage so we use filter

    const readListedBook = data.filter((book) =>
      ConvertedBookId.includes(book.bookId)
    );
    console.log(readListedBook);
    // 11.11 Set the state
    setReadList(readListedBook);
  }, [data]);

  //   12.4 defining state to set the sort type
  const [sortType, setSortType] = useState("");
  // 12.2 create the handleSortBy function and receive the sortType
  const handleSortBy = (sortType) => {
    console.log(sortType);
    if (sortType === "year") {
      const sortByYear = readList.sort(
        (a, b) => a.yearOfPublishing - b.yearOfPublishing
      );
      setReadList(sortByYear);
    }
    if (sortType === "ratings") {
      const sortByRatings = readList.sort((a, b) => a.rating - b.rating);
      setReadList(sortByRatings);
    }
    setSortType(sortType);
  };
  //   11.9 use the table
  return (
    <Tabs>
      <details className="dropdown">
        <summary className="btn m-1">
          Sort By: {sortType ? sortType : ""}
        </summary>
        <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
          {/* 12.1 sort the wish list items so created sort by button*/}
          {/* 12.3 get the sort type by passing the parameter in  handleSortBy function*/}
          <li onClick={() => handleSortBy("year")}>
            <a>Year</a>
          </li>
          <li onClick={() => handleSortBy("ratings")}>
            <a>Ratings</a>
          </li>
        </ul>
      </details>
      <TabList>
        <Tab>Read List</Tab>
        <Tab>Wish List</Tab>
      </TabList>
      <TabPanel>
        {/* 11.12 use the state */}
        <h2>My Read List: {readList.length} </h2>
        {/* 11.13 now show the books in read list by passing in Book component in singleBook key, here, singleBook is previously defined Book's Props in Book component or you can create another component to show the wishlist */}
        <div>
          {readList.map((b) => (
            <Book singleBook={b}></Book>
          ))}
        </div>
      </TabPanel>
      <TabPanel>
        <h2>My Wish List</h2>
      </TabPanel>
    </Tabs>
  );
};

export default ReadList;
