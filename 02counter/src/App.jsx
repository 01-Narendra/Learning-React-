import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(0); // counter is variable and setCounter is a method

  const addValue = () => {
    // console.log("adding value")
    if(counter+1 <= 20)
      setCounter(counter+1);
  }

  const removeVlaue = () => {
    if(counter-1 >= 0)
      setCounter(counter - 1);
  }
  return (
    <>
      <h1>Learning React</h1>
      <h2>counter value: {counter}</h2>
      <button onClick={addValue}>Add value</button>
      <br />
      <button onClick={removeVlaue}>Remove value</button>
    </>
  )
}

export default App
