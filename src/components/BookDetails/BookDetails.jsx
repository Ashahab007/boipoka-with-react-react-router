import React from "react";
import { useLoaderData, useParams } from "react-router";
// 10.8 import
import { addItemsToLS } from "../../../public/utilities/localStorage";

const BookDetails = () => {
  // 9.1 as we want to show the specific book details so we want to find that book by comparing two id's. First id, is get by useParams which is automatically get by dynamic path id.
  //   const id = useParams();
  const { id } = useParams();

  //   9.3 as the id is in string so it needs to convert to number
  const bookId = parseInt(id);
  console.log(typeof bookId);

  //   9.4 use useLoaderData() to fetch and compare it with params
  const data = useLoaderData();
  console.log(data[0].bookId);

  //   9.5 use array find to get the specific book data to show
  const singleBook = data.find((book) => book.bookId === bookId);
  console.log(singleBook);

  //   9.6 destructured the found singleBook
  const {
    bookName,
    author,
    review,
    tags,
    totalPages,
    publisher,
    yearOfPublishing,
    rating,
    category,
    image,
  } = singleBook;

  //   10.1 save the data to the localStorage
  const handleMarkAsRead = (id) => {
    // 10.5 get the id from onCLick
    addItemsToLS(id);
  };

  return (
    <div className="flex w-10/12 mx-auto border">
      <div className="px-2 py-12 w-3/6 h-5/6">
        <img src={image} />
      </div>
      <div className="w-full space-y-4">
        <h1 className="font-extrabold text-5xl">{bookName}</h1>
        <p>By: {author}</p>
        <p>{category}</p>
        <p className="font-bold">
          Review:
          <span className="font-normal"> {review}</span>
        </p>
        <br />
        <p className="font-bold flex justify-around">
          Tag:
          {tags.map((tag) => (
            <span className="font-normal">{tag}</span>
          ))}
        </p>
        <br />
        <p>Number of pages: {totalPages}</p>
        <br />
        <p>Publisher: {publisher}</p>
        <br />
        <p>Year of publishing:{yearOfPublishing} </p>
        <br />
        <p>Rating: {rating}</p>
        <div>
          <button
            //   10.2 set the handleMarkAsRead to get the id
            onClick={() => handleMarkAsRead(id)}
            className="btn btn-active btn-accent"
          >
            Mark as Read
          </button>
          <button className="btn btn-active btn-info ml-4">
            Add to Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
