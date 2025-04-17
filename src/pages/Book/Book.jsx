import React from "react";
import { FaStarHalfAlt } from "react-icons/fa";

// 6.3 show the each book in UI
const Book = ({ singleBook }) => {
  console.log(singleBook);
  const { author, bookName, category, image, publisher, rating, tags } =
    singleBook;

  return (
    <div className="card bg-base-100 shadow-sm border p-2">
      <figure className="bg-gray-200 w-3/4 mx-auto p-4">
        <img className="h-44" src={image} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {bookName}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>
          A card component has a figure, a body part, and inside body there are
          title and actions parts
        </p>
        <div className="card-actions justify-end">
          <div className="flex gap-2">
            {tags.map((tag) => (
              <p>{tag}</p>
            ))}
          </div>
          <div className="badge badge-outline">{rating}</div>
          <div>
            <FaStarHalfAlt size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
