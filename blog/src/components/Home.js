import React, { useState, useEffect } from 'react'
import BlogLists from './BlogLists';


const Home = () => {


 const [blogs, setBlogs]= useState([]);
 const [name, SetName] = useState("vincent");

 useEffect(() => {
    fetch(" http://localhost:3000/blogs")
    .then(res => {
      return  res.json();
    })
    .then(data => {
        setBlogs(data)
        // Taking the array of  objects and updating    the array blog by data array
    })
 }, []);
//  [] dependancy array only enures the function runs once 
// for every render when clicked


return (
    <div className="Home">  
    {blogs  && <BlogLists blogs={blogs} title="all blogs!" /> }
    {/* conditional templating in react */}
   


    </div>
  );
}

export default Home; 