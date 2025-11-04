import React, { useState } from 'react'

const App = () => {
  const [num, setnum] = useState(0);
  const btnclick=async()=>{
    setnum(prev=>(prev+1));
    setnum(prev=>(prev+1));
    setnum(prev=>(prev+1));

  }
  return (
    <div id='parent'>
      <h1> {num}</h1>
      <button onClick={btnclick}>click</button>
    </div>
  )
}

export default App
