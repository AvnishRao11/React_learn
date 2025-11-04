import React from 'react'

const App = () => {
  const submithandler=(elem)=>{
    console.log(elem); 
    elem.preventDefault();
    console.log("form submitted");
  }
  return (
    <div id='parent'> 
      <form id="mad" onSubmit={(elem)=>{
        submithandler(elem);
      }}>
      <input  type="text"  placeholder='Enter Your name '/>
      <button>Submit</button>
      </form>
    </div>
  )}