import React, { useState, useEffect } from 'react'
import BlogLists from './BlogLists';
import useFetch from './UseFetch';


const Home = () => {

const { data:blogs ,ispending, Error} = useFetch(' http://localhost:3000/blogs');
//destructuring  


 


return (
    <div className="Home">  

    { Error && <div>{ Error }</div>}
    { ispending &&  <div>Loading...</div>}
    {/* using conditional operator to join two statements    */}
    {blogs  && <BlogLists blogs={blogs} title="all blogs!" /> }
    {/* conditional templating in react */}

    {/* using conditional  operator to render an error when captured in reactz */}
   


    </div>
  );
}

export default Home; 