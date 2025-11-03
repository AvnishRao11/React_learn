import React from 'react'
import RightCardContent from './RightCardContent'
const RightCard = (props) => {
  console.log(props.id)
  return (
    <div className='relative shrink-0 h-full w-80 overflow-hidden rounded-4xl'>
      <img className='h-full w-full object-cover ' src={props.img}/>
      <RightCardContent tag={props.tag} id={props.id}/>
    </div>
    
  )
}

export default RightCard
