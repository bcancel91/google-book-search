import React from "react";
import Axios from "axios";
import API from  "../../utils/API";



function Book(props) {

  function saveBook (){
    console.log(  
      {
      title: props.title,
      author: props.author,
      description: props.description,
      image: props.image
    }
    )
    API.saveBook(
      {
        title: props.title,
        author: props.author,
        description: props.description,
        image: props.image
      }
      )
  }
  function removeBook (){
    console.log(props.bookid)
    console.log(  {
      title: props.title,
      author: props.author,
      description: props.description,
      image: props.image
    })
    Axios.delete("/api/books",
      {data:{
        id:props.bookid
      }}
      ).then(()=>{window.location.reload()})
  }



  let button = "";
  if(props.saveBTN==="true"){
    button =  <button onClick={()=>{saveBook()}} >Save</button>
  
  }else{
    button =  <button onClick={()=>{removeBook()}} >Remove</button>
  
  }
  return (
   <div>
     <div>
  <h3>{props.title}</h3>
  <strong>{props.author}</strong>
  </div>
  <img src= {props.image}></img>
  {button}
   <p>{props.description}</p>
  
   </div>
  );
}



export default Book;
