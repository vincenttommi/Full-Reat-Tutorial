import React, { useState, useEffect } from 'react'
import BlogLists from './BlogLists';


const Home = () => {


 const [blogs, setBlogs]= useState([
// destructuring  that captures values in array  
// setBlogs is a function that updates new values in the arrays blogs
 {title:"my new website", body:"lorem ipsum...", author:"vincenttommi",id: 1},
 {title:"my new website", body:"lorem ipsum...", author:"tommi",id: 2},
 {title:"my new website", body:"lorem ipsum...", author:"richie",id: 3},
 
 ]);



function handleDelete(id){
const newBlogs = blogs.filter(blog => blog.id !== id);
//array that holds filtered arrays from array blogs

 setBlogs(newBlogs);
//  setting  new values of array filtered from that array blog

 }


 useEffect(() => {

   console.log(blogs);

 });

//this function runs for every render

return (
    <div className="Home">  
    <BlogLists blogs={blogs} title="all blogs!"  handleDelete={handleDelete}/>
    <BlogLists blogs={blogs.filter((blog)=> blog.author == 'vincenttommi')} title="vincent's blog" />
   {/* filter method fires a callback function in each  element in the array  */}
    {/* blogs and title are components */}
    {/* rendering our component */}
    </div>
  );
}

export default Home; 