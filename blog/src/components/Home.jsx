import React from 'react'
import { useState } from 'react';
// used to handle reactive  values in js
const Home = () => {


  const [name, setName] = useState("vincent");
  // destructuring arrays used to captured  value  from usestate method
  const [age, setAge] = useState(25);
   const handleClick = ()=>{
// function that ensures our  name to change when the button is being clicked
setName("tommi");
//function used to change value  in array name 
setAge(24);



   }



  const handleClickAgain = (name,e) =>{


      console.log('hello' + name,e.target);
      // concatinating  the  parameter passed in our function inside an alert

  } 
  return (
      <div className="Home">

       <h2>Home Page</h2>
       <p>{name} is {age} old</p>
       <button onClick={handleClick} >Click Me</button>
       <br></br>
       <button onClick={(e)=> handleClickAgain('msenge', e)}>Click Me Again</button>
 {/* //invoking anyomous  function to pass an argument when a button is clicked and the curly braces signifies the dynamic value */}
     
      </div>
  )
}

export default Home