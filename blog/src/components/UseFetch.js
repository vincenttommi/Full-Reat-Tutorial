import React from "react";
import { useState, useEffect } from "react";

const useFetch = (url) => {



    const [data, setData]= useState(null);
    const [ispending,SetIsPending]= useState(true)
    const [error, setError] = useState(null)
   //  creating state to store errors
    
    
   
    useEffect(() => {
       setTimeout(() => {
       fetch(url)
       .then(res => {
   
         if(!res.ok){
   
   
         throw Error("could not  fetch data for that   resource");
   
   
   
         }
         return  res.json();
         
       })
       .then(data => {
           setData(data)
           // Taking the array of  objects and updating    the array blog by data array
           SetIsPending(false);
           setError(null)
       })
   
       .catch(err => {
       setError(err.message);
       SetIsPending(false);  
          
       })
         
       }, 1000);
    }, []);



     return { data,ispending, Error}  
}


export  default useFetch;