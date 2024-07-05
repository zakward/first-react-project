import { useState } from 'react'


function App() {
//JS

//Challenge:
//Lets add to our JSX an <ol> 
//with a few nested <li>'s of why you are excited to learn React

const username = "John Doe"

const userStyles = {
  backgroundColor: "blue",
  color: "white"
}
  return (
//JSX
<>
  <h1 style = {userStyles}>Welcome, {username}</h1>
  <ol>
    <li>Its a popular library, so I'll be in the know</li>
    <li>I'm more likely to get a job if I know React</li>
  </ol>
</>
  )
}

export default App
