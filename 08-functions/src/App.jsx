import React from 'react'

const App = () => {
  const onScroll=(val)=>{
    console.log("scrolling",val);
  }
  return (
    <div>
      <div onWheel={function(elem){
        onScroll(elem.deltaY);
      }} className="page1"></div>
      <div className="page2"></div>
      <div className="page3"></div>
    </div>
  )
}

export default App
