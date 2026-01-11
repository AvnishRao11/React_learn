import React from 'react'
import axios from 'axios'
import { useState } from 'react'
const App = () => {
  const [data, setdata] = useState([]);

  const getData=async ()=>{
    const response= await axios.get("https://picsum.photos/v2/list");
    setdata(response.data);
  }

  return (
    <div>
      <button onClick={getData}>Get Data</button>
      {data.map((elem,idx)=>{
       return  <h3 key={idx}>{elem.author}</h3>
      })}
    </div>
  )
}

export default App
