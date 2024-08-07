import React, { useState } from 'react'
import './App.css';

function countInitialize(){
  console.log("run function")
  return 4
}

function App() {
  const [count, setCount] = useState(countInitialize());

  const increment = () =>{
    setCount(count + 1);
  }; 

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Simple Counter</h1>
        <p>Count: {count}</p>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </header>
    </div>
  )
}

export default App;