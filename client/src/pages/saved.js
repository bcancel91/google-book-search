import Book from "../components/book";
import Axios from "axios";
import React, { useState, useEffect } from 'react';

function Saved(props) {
    const [books, setBooks] = useState(0);
  useEffect(() => {
    
    Axios.get("/api/books").then(res =>{
        console.log(res)
        let array = [];
        array = res.data.map((book, index)=>{
            console.log(book);
            return  <Book bookid = {book._id} title =  {book.title} author = {book.authors}
             description = {book.description} image = {book.image} saveBTN="false" key={index}/>
        
        });
        setBooks(array)

    })
  },[]);
  return (
   <div>
   
     {books}
    

   </div>
  );
}

export default Saved;
