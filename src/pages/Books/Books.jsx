import React, { useEffect, useState } from "react";

const Books = () => {
  // 5.1 fetch the book data using useEffect
  const [allBooks, setAllBooks] = useState([]);
  useEffect(() => {
    fetch("booksData.json")
      .then((res) => res.json())
      .then((data) => setAllBooks(data));
    console.log(allBooks);
  }, [allBooks]);
  return (
    <div>
      <h3>Book</h3>
    </div>
  );
};

export default Books;
