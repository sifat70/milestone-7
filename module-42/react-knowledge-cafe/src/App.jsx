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

  const handleMakeAsRead = (time, id) => {
    const newReadingTime = readingTime +time;
    setReadingTime(newReadingTime)

    // remove the read blog from bookmark

    const remainingBookMarks = bookmarks.filter(bookmark => bookmark.id !== id);
    setBookmarks(remainingBookMarks)
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
