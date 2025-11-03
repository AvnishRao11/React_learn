import React from 'react'
import LeftText from './LeftText.jsx'
import RightContent from './RightContent.jsx'
const Page1Content = (props) => {

  return (
    <div className='px-18 pt-6 pb-16 h-[90vh] flex items-center gap-10x'>
     <LeftText/>
     <RightContent users={props.users} />
    </div>
  )
}

export default Page1Content
