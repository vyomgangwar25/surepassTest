import React, {useState } from 'react';
import axios from 'axios'
import { useDispatch} from 'react-redux';
import { addBooks } from './bookSlice';
import BookName from './BookName';
const Inputfield = () => {
 
const[searchText,setSearchText]=useState()
  const dispatch=useDispatch();
 
  const handleSubmit = (event) => {
    event.preventDefault();
    fetchBooks()
     };

const fetchBooks=async()=>{
    const response=await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchText}`)
    console.log(response)
    dispatch(addBooks(response.data));
} 

  return (
    <div className='mt-10'>
      <form onSubmit={handleSubmit}>
        <input type="text" class="border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent" 
        placeholder="Search for books or authors"
        value={searchText} onChange={(e)=>{
        setSearchText(e.target.value)
        }} />
        <button type="submit" class="rounded-lg px-4 py-2 ml-2 bg-blue-500 text-white">Search</button>
        <BookName/>
      </form>
    </div>
  );
};

export default Inputfield;
