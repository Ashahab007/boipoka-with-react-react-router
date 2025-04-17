import React, { Suspense } from "react";
import Banner from "../Banner/Banner";
import Books from "../../pages/Books/Books";
import { useLoaderData } from "react-router";
import Book from "../../pages/Book/Book";

const Home = () => {
  // 6.2 get the data using useLoaderData
  const data = useLoaderData();
  console.log(data);

  return (
    // 4.3 apply the banner component in Home component as we want to show the banner as default in Home
    <div>
      <Banner></Banner>
      {/* 5.2 apply the Books component in Home component */}
      {/* 6.2  */}
      <Suspense fallback={<span>Loading . ...</span>}>
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4 mt-7">
          {data.map((singleBook) => (
            <Book singleBook={singleBook} key={singleBook.bookId}></Book>
          ))}
        </div>
      </Suspense>
    </div>
  );
};

export default Home;
