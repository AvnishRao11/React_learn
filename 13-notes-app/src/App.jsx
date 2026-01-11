import React, { useState } from 'react'
import { X } from 'lucide-react';
const App = () => {
  const [title, settitle] = useState('');
  const [details, setdetails] = useState('');
  const [task, settask] = useState([]);

  const submitHandler=(evt)=>{
    evt.preventDefault();
    const copyTask=[...task];
    copyTask.push({title,details});
    settask(copyTask);
    settitle('');
    setdetails('');
  }
  const deleteNote=(idx)=>{
    const copyTask=[...task];
    copyTask.splice(idx,1);
    settask(copyTask);
  }
  return (
    <div className=' h-screen lg:flex bg-black text-white '>
      <form className='flex  lg:w-1/2 flex-col items-start gap-4 p-10 w-full  'onSubmit={(evt)=>{
        submitHandler(evt); 
      }} >
          <h1 className='font-bold text-3xl'>Add Notes </h1>
          <input type="text" className='px-4 font-medium w-full py-2 border-2 rounded-md outline-none'value={title} onChange={(e)=>{
            settitle(e.target.value);
          }}placeholder='Enter Notes Heading' />
          <textarea className='px-4 py-2 w-full border-2 rounded-md font-medium h-20 outline-none 'value={details} placeholder='Enter Details' onChange={(e)=>{
            setdetails(e.target.value);
          }}></textarea>
          <button className='bg-white w-full text-black active:scale-94 outline-none px-4 py-2 rounded-md font-medium '>Add Note</button>
      </form>
      <div className='  lg:w-1/2  lg:border-l p-10'>
        <h1 className='font-bold text-3xl'>Recent Notes </h1>
        <div className='flex gap-5 flex-wrap items-start justify-start mt-5 h-[90%] overflow-auto'>
            {task.map(function(elem,idx){
              return <div key={idx} className=" flex flex-col justify-between relative h-52 w-35 bg-cover text-black  py-9 pb-6 px-4 bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')]  rounded-md ">
                <div>
                  <h3 className='leading-tight text-xl font-bold'>{elem.title}</h3>
                  <p className='mt-4 leading-tight font-medium text-gray-500'>{elem.details}e</p>
                </div>
                <button onClick={()=>{
                  deleteNote(idx);
                }} className='bg-red-500 cursor-pointer active:scale-95 rounded font-bold text-white w-full py-1 text-xs'> Delete</button>

              </div> 
            })}
        </div>
      </div>
    </div>
  )
}

export default App
