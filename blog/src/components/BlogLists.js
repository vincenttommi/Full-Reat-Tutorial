// rafce  react component utilizing an arrow function
import React from 'react'

const BlogLists = ({blogs,title,handleDelete}) => {

  // accepting a function as a prop
    
  
  return (
<div className="blog-lists">
  {title}
 {blogs.map((blog)=>(
// we use map method that uses callback function to to callout values from  element whenevere array is iterating as an item
    <div className="blog-preview" key={blog.id}>
      {/* React uses key property to keep track   when updating values in dom */}
      <h2>{blog.title}</h2>
      <p>Writted  by {blog.author}</p>
      <button   onClick={() => handleDelete(blog.id)}>Delete Blog</button>
      {/* passsing ana anoymous function to take the id of our function to be deleted */}
    </div>
      ))}


     </div>
  )
}

export default BlogLists; 