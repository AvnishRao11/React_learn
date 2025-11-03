import React from 'react'
import RightCard from './RightCard'

const ImageContainer = (props) => {
  return (
    <div id='right' className=' h-full p-6 w-2/3 flex overflow-x-auto flex-nowrap gap-4  '>
     {props.users.map(function(elem,idx){
       return <RightCard key={idx} id={idx} img={elem.img} tag={elem.tag} intro={elem.intro}/>
     })}
    </div>
  )
}

export default ImageContainer
