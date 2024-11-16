import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCounter] = useState(10)

  const addValue = ()=>{
    setCounter(counter+1)
  }

  const removeValue = ()=>{
    setCounter(counter-1)
  }
  return (
    <>
      <h2>total Counter {counter}</h2>
      <button onClick={addValue}>Add Counter {counter}</button>
      <br/>
      <button onClick={removeValue}>Remove Counter {counter}</button>
    </>
  )
}

export default App
