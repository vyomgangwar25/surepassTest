import React, {useState } from 'react';
import axios from 'axios'
import { useDispatch} from 'react-redux';
import { addBooks } from './bookSlice';
import BookName from './BookName';

const Inputfield = () => {
 
const[searchText,setSearchText]=useState()
const [loading, setLoading] = useState(false); 
  const dispatch=useDispatch();
 
  const handleSubmit = (event) => {
    event.preventDefault();  
    fetchBooks()
     };

const fetchBooks=async()=>{
  setLoading(true)
  try {
    const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchText}`);
    dispatch(addBooks(response.data));
  } catch (error) {
    console.error('Error fetching books:', error);
  } finally {
    setLoading(false); 
  }
} 

  return (
    <div className='mt-10'>
     <h1 className='mb-4 pr-10' style={{ fontWeight: 'bold' }}>Book Search Application</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" class="border border-gray-300 px-3 py-2  rounded-lg focus:outline-none  " 
        placeholder="Search for books"
         
        value={searchText} onChange={(e)=>{
        setSearchText(e.target.value)
        }} />
        <button type="submit" class="rounded-lg px-4 py-2 ml-2 bg-blue-500 text-white">Search</button>
        <BookName loading={loading}/>
      </form>
    </div>
  );
};

export default Inputfield;
