import './App.css'
import Blogs from './components/Blogs/Blogs'
import Boolmarks from './components/BookMarks/Boolmarks'
import Header from './components/Header/Header'

function App() {

  return (
    <>
      <Header></Header>
      <div className='flex'>
        <Blogs></Blogs>
        <Boolmarks></Boolmarks>
      </div>
    </>
  )
}

export default App
