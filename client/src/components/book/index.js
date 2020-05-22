import React from "react";
import Axios from "axios";
import API from  "../../utils/API";
import CSS from "./index.css";



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
      ).then((data)=>{props.updateBooks(data)})
  }



  let button = "";
  if(props.saveBTN==="true"){
    button =  <button onClick={()=>{saveBook()}} >Save</button>
  
  }else{
    button =  <button onClick={()=>{removeBook()}} >Remove</button>
  
  }
  return (

   





   <div className="box1 d-flex justify-content-center">
    
     <div clasName="d-flex justify-content-center">
  
  <h4>{props.author}</h4>
  <img src={props.image} height="300px"width="200px"></img>
  {button}
   
   </div>
   <div>
   <h3 className="mt-4">{props.title}</h3>
   <p className="mt-4 ml-4">{props.description}</p>
   </div>
   </div>

  

  

  
   
   
  );
}



export default Book;
