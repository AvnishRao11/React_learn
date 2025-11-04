import React, { useState } from 'react'

const App = () => {
  const [count, setcount] = useState(0);
  function increment(){
    setcount(count+1);
  }
  function decrement(){
    setcount(count-1);
  }
  return (
    <div id="parent">
     <h1>Count is {count} </h1>
     <button id="positive" onClick={increment}>Increae Count</button>
     <button id="negative" onClick={decrement}>Decrease Count </button>
    </div>
  )
}

export default App
