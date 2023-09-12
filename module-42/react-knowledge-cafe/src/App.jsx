import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Boolmarks from './components/BookMarks/Boolmarks'
import Header from './components/Header/Header'

function App() {

  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0)

  const handleAddToBookmark = blog =>{
    const newBookmarks = [...bookmarks, blog]
    setBookmarks(newBookmarks)
  }

  const handleMakeAsRead = time => {
    const newReadingTime = readingTime +time;
    setReadingTime(newReadingTime)
  }

  return (
    <>
      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto'>
        <Blogs handleAddToBookmark={handleAddToBookmark} handleMakeAsRead={handleMakeAsRead}></Blogs>
        <Boolmarks bookmarks={bookmarks} readingTime={readingTime}></Boolmarks>
      </div>
    </>
  )
}

export default App
