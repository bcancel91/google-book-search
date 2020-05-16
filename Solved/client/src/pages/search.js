import Book from "../components/book";
import Axios from "axios";
import React, { useState, useEffect } from 'react';

function Search(props) {
    const [search,setSearch] = useState("");
    const [books, setBooks] = useState(false);
    
  useEffect(() => {

    Axios.get("https://www.googleapis.com/books/v1/volumes?q=web%20development").then(res =>{
        if(!books){
            console.log(res);
            let array = [];
            array = res.data.items.map((book, index)=>{
                return  <Book title =  {book.volumeInfo.title} author = {book.volumeInfo.authors}
                 description = {book.volumeInfo.description} image = {book.volumeInfo.imageLinks.thumbnail} saveBTN="true" key={index}/>
            
            });
            setBooks(array)
        }

    })
  },[]);

  function handleSubmit(event){
      event.preventDefault();
      Axios.get("https://www.googleapis.com/books/v1/volumes?q="+ search).then(res =>{
        console.log(res);
        let array = [];
        array = res.data.items.map((book, index)=>{
            return  <Book title =  {book.volumeInfo.title} author = {book.volumeInfo.authors}
             description = {book.volumeInfo.description} image = {book.volumeInfo.imageLinks.thumbnail} saveBTN="true" key={index}/>
        
        })
        setBooks(array)
    })

  }

  function changeSearch(event){
      setSearch(event.target.value)
  }
  return (
   <div>
       <div className="input-group mt-4 mb-3">
  <div className="input-group-prepend">
    <button className="btn btn-outline-secondary" type="button" id="button-addon1" onClick={e => handleSubmit(e)}>Search</button>
  </div>
  <input type="text" className="form-control" placeholder="e.g. Harry Potter" onChange={e => changeSearch(e)} aria-label="Example text with button addon" aria-describedby="button-addon1"/>
</div>
     {books}
    

   </div>
  );
}

export default Search;
