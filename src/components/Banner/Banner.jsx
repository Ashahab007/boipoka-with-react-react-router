import React from "react";

// 4.2 import the book image from asset
import bookImage from "../../assets/books.jpg";

// 4.1 created banner section
const Banner = () => {
  return (
    <div className="flex justify-around items-center p-4 bg-amber-100">
      <div>
        <h1 className="text-5xl">Books to freshen up your bookshelf</h1>
        <button className="btn btn-primary mt-6">View The List</button>
      </div>
      <div>
        <img src={bookImage} />
      </div>
    </div>
  );
};

export default Banner;
