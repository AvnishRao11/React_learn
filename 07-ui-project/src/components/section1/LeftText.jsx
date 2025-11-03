import React from 'react'
import {ArrowUpRight} from 'lucide-react'
const LeftText = () => {
  return (
    <div className='h-full flex flex-col justify-between w-1/3  '>
      <div className='p-6'>
        <h3 className='text-5xl font-bold leading-[1.1]'>Prospective <br /> <span >customer</span> <br />Segmentation</h3>
        <p className='mt-7 text-xl w-[90%] text-gray-400 font-medium' >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione dicta veniam ut sapiente quisquam minima ex neque id quis omnis.</p>
      </div>
      <div className=''><ArrowUpRight size={70}/></div>
    </div>
  )
}

export default LeftText
