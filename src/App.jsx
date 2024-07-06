import { useState } from 'react'


function App() {
  //JS
  //Challenge:
  //Lets add to our JSX. 
  //Create an ordered list under the <h1>
  //Inside the ordered list insert two <li>'s
  // each li should contain reasons you want to learn React.

  const username = "John Doe"

  const userStyles = {
    backgroundColor: "blue",
    color: "white"
  }
  return (
    //JSX
    <>
      <h1 style={userStyles}>Welcome, {username}</h1>
      <ol>
        <li>It's a popular library, so I'll be in the know</li>
        <li>I'm more likely to get a job as a developer if I know React</li>
      </ol>
    </>
  )
}

export default App
