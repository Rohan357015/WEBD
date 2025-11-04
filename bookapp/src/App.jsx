import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Book from './component/Book.jsx' 
import "./component/Book.css"

function App() {
  

  return (
    <div className='container'>
      <Book title="Math" price="200" />
      <Book title="Chemistry" price="400" />
      <Book title="Physics" price="600" />
    </div>
  )
}

export default App
