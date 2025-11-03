import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className='parent'>
      <Card user="Sanju" img="https://plus.unsplash.com/premium_photo-1757782323237-cc11aab3ccc0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDV8Q0R3dXdYSkFiRXd8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=60&w=600" />
      <Card user="Avnish" img="https://plus.unsplash.com/premium_photo-1761297666287-134798741b2d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIxfENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&q=60&w=600" />
    </div>
  )
}

export default App
