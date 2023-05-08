import React, { useState } from 'react'
import BlogLists from './BlogLists';


const Home = () => {


 const [blogs, setBlogs]= useState([
// destructuring  that captures values in array  
// setBlogs is a function that updates new values in the arrays blogs
 {title:"my new website", body:"lorem ipsum...", author:"vincenttommi",id: 1},
 {title:"my new website", body:"lorem ipsum...", author:"tommi",id: 2},
 {title:"my new website", body:"lorem ipsum...", author:"richie",id: 3},
 ]);



 const handleDelete =(id) =>{

  const newBlogs = blogs.filter()
  //array that holds  filtered arrayfs from array blogs
 }


return (
    <div className="Home">  
    <BlogLists blogs={blogs} title="all blogs!"/>
    <BlogLists blogs={blogs.filter((blog)=> blog.author == 'vincenttommi')} title="vincent's blog" handleDelete={handleDelete}/>
   {/* filter method fires a callback function in each  element in the array  */}
    {/* blogs and title are components */}
    {/* rendering our component */}
    </div>
  );
}

export default Home; 