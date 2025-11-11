import React, { useState } from 'react'



const App = () => {
  const [title, settitle] = useState('');
  const onsumbit=(evt)=>{
    evt.preventDefault();
    console.log("form submitted");
    settitle('');
  }
  return (
    <div>
      <div id='parent'>
        <form action="" id='mad'onSubmit={(evt)=>{
          onsumbit(evt);
        }} >
          <input type="text" placeholder='Enter your name ' value={title} onChange={(evt)=>{
            settitle(evt.target.value);
          }}/>
          <button>submit</button>
        </form>
      </div>
    </div>
  )
}

export default App
