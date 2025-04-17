import React from "react";
import { FaStarHalfAlt } from "react-icons/fa";
import { Link } from "react-router";

// 6.3 show the each book in UI
const Book = ({ singleBook }) => {
  // console.log(singleBook);
  const {
    bookId,
    author,
    bookName,
    category,
    image,
    publisher,
    rating,
    tags,
    yearOfPublishing,
    totalPages,
  } = singleBook;

  return (
    // 8.2 as we are going to show details by clicking on the any sections of book. That's why we use Link and get the id dynamically from a Link
    <Link to={`/bookdetails/${bookId}`}>
      <div className="card bg-base-100 shadow-sm border p-2">
        <figure className="bg-gray-200 w-3/4 mx-auto p-4">
          <img className="h-44" src={image} />
        </figure>
        <div className="flex gap-12 justify-center mt-4">
          {tags.map((tag) => (
            <p>{tag}</p>
          ))}
        </div>
        <p className="flex ml-6 mt-5">By: {author}</p>
        <div className="card-body">
          <h2 className="card-title">
            {bookName}
            <div className="badge badge-secondary">{yearOfPublishing}</div>
          </h2>

          <p>
            A card component has a figure, a body part, and inside body there
            are title and actions parts
          </p>
          <div className="border-t-1 border-dashed"></div>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">{rating}</div>
            <div>
              <FaStarHalfAlt size={20} />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
