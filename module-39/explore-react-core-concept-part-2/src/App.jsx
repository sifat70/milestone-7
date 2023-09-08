import './App.css'
import Counter from './Counter'
import Friends from './Friends'
import Team from './Team'
import Users from './User'


function App() {

  function handleClick() {
    alert('Button Clicked')
  }

  const handleClick2 = () => {
    alert('Button Clicked 2')
  }


  const handleClick3 = (num) => {
    alert(num + 5)
  }


  return (
    <>
      <h3>React Core Concept 2</h3>

      <Friends></Friends>

      <Users></Users>

      <Team></Team>

      <Counter></Counter>
      {/* ager niom */}
      {/* <button onclick="handleClick()"></button> */}

      
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Button 2</button>
      <button onClick={() => { alert('clicked') }}>Click 3</button>

      <button onClick={() => handleClick3(2)}>Handler</button>
    </>
  )
}

export default App
