import React, { Suspense, useEffect, useState } from "react";

const Books = () => {
  // 5.1 fetch the book data using useEffect but commented because we will use loader

  /*  const [allBooks, setAllBooks] = useState([]);
  useEffect(() => {
    fetch("booksData.json")
      .then((res) => res.json())
      .then((data) => setAllBooks(data));
    console.log(allBooks);
  }, [allBooks]); */
  return (
    <div>
      <Suspense fallback={<span>Loading . . . . .</span>}>
        <h3>Book</h3>
      </Suspense>
    </div>
  );
};

export default Books;
