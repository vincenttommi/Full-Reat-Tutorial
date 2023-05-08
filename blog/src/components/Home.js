import React, { useState, useEffect } from 'react'
import BlogLists from './BlogLists';


const Home = () => {



 const [blogs, setBlogs]= useState(null);
 const [ispending,SetIsPending]= useState(true)
 const [error, SetError] = useState(null)
//  creating state to store errors
 
 

 useEffect(() => {
    setTimeout(() => {
    fetch(" http://localhost:8000/blogs ")
    .then(res => {

      if(!res.ok){


      throw Error("could not  fetch data for that   resource");



      }
      return  res.json();
      
    })
    .then(data => {
        setBlogs(data)
        // Taking the array of  objects and updating    the array blog by data array
        SetIsPending(false);
        SetError(null)
    })

    .catch(err => {
      
    
    SetError(err.message);
    SetIsPending(false);  
       
    })
      
    }, 1000);
 }, []);
//  [] dependancy array only enures the function runs once 
// for every render when clicked


return (
    <div className="Home">  
    { ispending &&  <div>Loading...</div>}
    {/* using conditional operator to join two statements    */}
    {blogs  && <BlogLists blogs={blogs} title="all blogs!" /> }
    {/* conditional templating in react */}

    { error && <div>{error}</div>}

    {/* using conditional  operator to render an error when captured in reactz */}
   


    </div>
  );
}

export default Home; 