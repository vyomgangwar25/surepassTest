import React from 'react'
import { useSelector } from 'react-redux'
const BookName = () => {
    const bookstoreItems = useSelector(state => state.book.items);


    if (bookstoreItems.length === 0) {
        return <div>No books found</div>;
    }
 
  const firstBook = bookstoreItems[0].items[0];
 
  const volumeInfo = firstBook?.volumeInfo?.title;
  const Publish=firstBook?.volumeInfo?.publishedDate;
  const authors=firstBook?.volumeInfo?.authors[0];

  if (!volumeInfo) {
    return <div>No volume information available</div>;
  }

  return (
    <div className="border border-gray-200 p-4 rounded-lg shadow-md">
     <ul>
    <li className="mb-2">
      <h1 className="text-xl font-bold mb-1">Title:</h1>
      <p>{volumeInfo}</p>
    </li>
    <li className="mb-2">
      <h2 className="font-bold mb-1">Authors:</h2>
      <p>{authors}</p>
    </li>
    <li>
      <h2 className="font-bold mb-1">Published Date:</h2>
      <p>{Publish}</p>
    </li>
  </ul>
    </div>
  )
}

export default BookName
