import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './todo'
import Actor from './Actor'
import Singer from './Singer'
import BookStore from './BookStore'

function App() {
  
  const actors = ['Skaib', 'raz', 'jashim', 'rubel'];

  const books = [
    {id: 1, name: 'Physics', price: 100},
    {id: 2, name: 'Chemistry', price: 100},
    {id: 3, name: 'Biology', price: 100},
    {id: 4, name: 'Math', price: 100},
  ]

  const singers = [
    {id: 1, name: 'Imran Mahmud', age: 30},
    {id: 2, name: 'Konal', age: 20},
    {id: 3, name: 'Asif Akbar', age: 50},
    {id: 4, name: 'Runa Laila', age: 70}
  ]

  return (
    <>
      <h1>Vite + React</h1>
      <BookStore books={books}></BookStore>

      {
        singers.map(singer => <Singer singer={singer}></Singer>)
      }

      <Actor name={'bappa raj'}></Actor>
      {
        actors.map(actor =><Actor name={actor}></Actor>)
      }
      {/* <Todo task="Learn React" isDone={true}></Todo>
      <Todo task="Core Concepts" isDone={false}></Todo>   
      <Todo task="Try jsx" isDone={true}></Todo> */}
      {/* <Device name="Laptop" price="55"></Device>
      <Device name="Mobile" price="25"></Device>
      <Device name="Watch" price="3"></Device>
      <Person></Person>
      <Person></Person>
      <Student grade="7" score="99"></Student>
      <Student></Student>
      <Developer></Developer> */}
    </>
  )

  function Device(props) {
    console.log(props);
    return (
      <h2>This Device: Name is: {props.name} And Price is {props.price}</h2>
    )
  }

  function Person() {
    const age = 25;
    const money = 20;
    const person = { name: 'sakib', age: 25 }
    return <h3>I am {person.name} with age {age + money} </h3>
  }

  const { grade, score } = { grade: '7', score: '99' };

  function Student({grade=1, score=0}) {
    console.log(grade, score)
    return (
      <div className='student'>
        <h3>This is a student</h3>
        <p>class: {grade}</p>
        <p>Age: {score}</p>
      </div>
    )
  }

  function Developer() {
    const developerStyle = {
      margin: "20px",
      padding: "20px",
      border: "2px solid skyblue",
      borderRadius: '10px'

    }
    return (
      <div style={developerStyle}>
        <h5>Debo Debo</h5>
        <p>Coding: </p>
      </div>
    )
  }
}

export default App
