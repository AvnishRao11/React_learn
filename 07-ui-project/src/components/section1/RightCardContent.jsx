import React from 'react'
import {ArrowRight } from 'lucide-react'
const RightCardContent = (props) => {
  return (
    <div className=' absolute top-0 left-0 h-full w-full p-6 flex flex-col justify-between'>
        <h2 className='bg-white text-xl rounded-full h-10 w-10 flex justify-center items-center font-semibold'>{props.id+1}</h2>
        <div>
          <p className='text-xl leading-relaxed text-white mb-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, a fugiat reprehenderit rem voluptatem animi.</p>
          <div className='flex gap-2 '>
            <button className='bg-blue-600 text-white font-medium px-8 py-2 rounded-full '>{props.tag}</button>
            <button className='bg-blue-600 text-white font-medium px-3 py-2 rounded-full '> <ArrowRight /></button>
          </div>
        </div>
      </div>
  )
}

export default RightCardContent
