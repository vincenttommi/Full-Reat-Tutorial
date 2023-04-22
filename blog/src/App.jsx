import './App.css';


function App() {

  //function  component
  // numbers integes  string and arrays can be   outputted as dynamic values in react
const title = 'serialcoder';
const likes = 50;
const person = {name: "vincent", age:24};
const link = 'http://www.google.com';
  return (
    <div className="App">
       <div className="content">
          <h1>{ title }</h1>
          <p>liked {likes}  times</p>
          <p>{ 10 }</p>
          <p>{"Hello, ninajas"}</p>
          <p>{[1,2,3,4,5,6,7,8,9,10]}</p>
          <p>{Math.random() * 20}</p>
          {/* <p>{person}</p> */}

        {/* objects and boolean cannot be outputted as dynamic values in react */}


   {/*outputting dynamic values in element tags in jsx  */}
     <a href={link}>Google Site</a>

       </div>
    </div>
  );
}

export default App;
