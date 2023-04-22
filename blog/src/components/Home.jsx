import React from 'react'

const Home = () => {

  // is passed in function argument so as to know the objects being used by event
  const handleClick = (e) =>{
    console.log('Hello, Ninjas  ', e);
  }
  // second function

  const handleClickAgain = (name,e) =>{


      console.log('hello' + name,e.target);
      // concatinating  the  parameter passed in our function inside an alert

  }
  return (
      <div className="Home">

       <h2>Home Page</h2>
       <button onClick={handleClick}>Click Me</button>
       <br></br>
       <button onClick={(e)=> handleClickAgain('msenge', e)}>Click Me Again</button>
 {/* //invoking anyomous  function to pass an argument when a button is clicked and the curly braces signifies the dynamic value */}
     
      </div>
  )
}

export default Home