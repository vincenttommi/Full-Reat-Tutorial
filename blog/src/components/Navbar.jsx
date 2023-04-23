// a component is a function that returns jsx extention
import React from 'react'

const Navbar = () => {
  return (
  
    <nav className="navbar">
   <h1>Mzee Blog</h1>
     <div className="links">

       <a href='/'>Home</a>
       <a href='/create'>New Blog</a>

     </div>
    </nav>

  )
}

export default Navbar