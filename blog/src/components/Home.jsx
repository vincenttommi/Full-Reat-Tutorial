import React, { useState } from 'react'


const Home = () => {


 const [blogs, setBlogs]= useState([
// destructuring  that captures values in array  
// setBlogs is a function that updates new values in the arrays blogs
 {title:"my new website", body:"lorem ipsum...", author:"vincenttommi",id: 1},
 {title:"my new website", body:"lorem ipsum...", author:"tommi",id: 2},
 {title:"my new website", body:"lorem ipsum...", author:"richie",id: 3},
 ]);

return (
    <div className="Home">  

      {blogs.map((blog)=>(
 

// we use map method that uses callback function to to callout values from  element whenevere array is iterating as an item
    <div className="blog-preview" key={blog.id}>
      {/* React uses key property to keep track   when updating values in dom */}

      <h2>{blog.title}</h2>
      <p>Writted  by {blog.author}</p>
      
      


    </div>
      ))}
    </div>
  );
}

export default Home;