import React from 'react'
import { useState } from 'react';

const App = () => {
  const [title, settitle] = useState('');

  const submithandler=(elem)=>{
    elem.preventDefault();
    console.log("form submitted by ", title);
    settitle('');
  }
  return (
    <div id='parent'> 
      <form id="mad" onSubmit={(elem)=>{
        submithandler(elem);
      }}>
      <input  type="text" value={title} placeholder='Enter Your name ' onChange={(event)=>{
        settitle(event.target.value);
      }}/>
      <button>Submit</button>
      </form>
    </div>
  )}
export default App