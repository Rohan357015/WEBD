import React from 'react'
import Book from './Book.jsx'
import './Book.css'

function BookInfo() {
  return (
    <div>
     <div className='container'>
      <Book title="Math" price="200" />
      <Book title="Chemistry" price="400" />
      <Book title="Physics" price="600" />
    </div>
    </div>
  )
}

export default BookInfo
