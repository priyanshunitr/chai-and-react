
import './App.css'
import Chai from './chai'
import { useState } from 'react'

function App() {

  const [count, setCount] = useState(0)

  const add = () => {
    setCount(count + 1)
  }

  const remove = () => {
    if (count > 0) {
      setCount(count - 1)
    }
  }

  return (
    <>
      <Chai/>

      <h2>Current count = {count}</h2>
      <button onClick={add}>Add</button>

      <button onClick={remove}>Remove</button>
    </>
  )
}

export default App
