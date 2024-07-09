import { useState } from 'react'
import Navbar from './components/Navbar'
import Main from './components/Main'
import Footer from './components/Footer'


function App() {

// Challenge:
// change fragment to div with className to app
// give main div a height and width to fill the page
// use flexbox to align vertically and horizontally on the page

  return (
    //JSX
    <div className = "app">
      <Navbar />
      <Main />
      <Footer />
    </div>
  )
}

export default App
