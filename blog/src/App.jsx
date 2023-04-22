import './App.css';


function App() {

  //function  component
const title = 'serialcoder';
const likes = 50;
  return (
    <div className="App">
       <div className="content">
       
          <h1>{ title }</h1>
          <p>liked {likes}  times</p>



       </div>
    </div>
  );
}

export default App;
