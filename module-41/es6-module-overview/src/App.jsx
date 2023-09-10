import { useEffect, useState } from 'react'
import './App.css'
import Watch from './components/Watch/Watch'

function App() {

  const [watches, setWatches] = useState([])


  useEffect(() => {
    fetch('watches.json')
    .then(res => res.json())
    .then(data => setWatches(data))
  }, [])

  // const watches = [
  //   { id: 1, name: 'Apple Watch', price: 250 },
  //   { id: 2, name: 'Sumsung Watch', price: 250 },
  //   { id: 3, name: 'Readmi Watch', price: 250 },
  //   { id: 4, name: 'MI Watch', price: 250 }
  // ]


  // const watches = [
  //   {
  //     "id": 1,
  //     "name": "Apple Watch Series 7",
  //     "price": 399.99
  //   },
  //   {
  //     "id": 2,
  //     "name": "Samsung Galaxy Watch 4",
  //     "price": 299.95
  //   },
  //   {
  //     "id": 3,
  //     "name": "Fitbit Versa 3",
  //     "price": 229.95
  //   },
  //   {
  //     "id": 4,
  //     "name": "Garmin Forerunner 945",
  //     "price": 599.99
  //   },
  //   {
  //     "id": 5,
  //     "name": "Fossil Gen 6",
  //     "price": 249.00
  //   }
  // ]

  return (
    <>
      <h1>Vite + React</h1>
      {
        watches.map(watch => <Watch key={watch.id} watch={watch}></Watch>)
      }
    </>
  )
}

export default App
