import React from 'react'
import { useSelector } from 'react-redux'
import LoadingShimmer from './LoadingShimmer';
const BookName = ({loading}) => {
  const bookstoreItems = useSelector(state => state.book.items);
   if(loading)
   {
    return<><LoadingShimmer/></>
   }
  if (!bookstoreItems || bookstoreItems.length === 0) {
    return <div className='pr-10 '>Enter Book name</div>;
  }
  console.log(bookstoreItems)

  return (
    <div className="grid grid-cols-1 gap-4 mt-2">
      {bookstoreItems.map((bookGroup, index) => (
        bookGroup.items.map((book, bookIndex) => {
          const volumeInfo = book?.volumeInfo;
          const title = volumeInfo?.title;
          const authors = volumeInfo?.authors;
          const publishedDate = volumeInfo?.publishedDate;

          if (!volumeInfo) {
            return (
              <div key={`${index}-${bookIndex}`} className="border border-gray-200 p-4 rounded-lg shadow-md">
                <p>No volume information available</p>
              </div>
            );
          }

          return (
            <div key={`${index}-${bookIndex}`} className="border border-gray-200 p-4 rounded-lg shadow-md">
              <ul>
                <li className="mb-2">
                  <h1 className="text-xl font-bold mb-1">Title:</h1>
                  <p>{title}</p>
                </li>
                <li className="mb-2">
                  <h2 className="font-bold mb-1">Authors:</h2>
                  <p>{authors ? authors : 'N/A'}</p>
                </li>
                <li>
                  <h2 className="font-bold mb-1">Published Date:</h2>
                  <p>{publishedDate || 'N/A'}</p>
                </li>
              </ul>
            </div>
          );
        })
      ))}
    </div>
  );
}

export default BookName;
