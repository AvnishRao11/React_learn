import React from 'react'

const App = () => {
  const user={
    username:"avnish",
    age:"19",
    city:"faridabad",
  }
  localStorage.setItem("user",JSON.stringify(user));
  const get_user=JSON.parse(localStorage.getItem('user'));
  console.log(get_user);
  return (
    <div>

      app
    </div>
  )
}

export default App
