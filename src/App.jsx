
import './App.css'
import Chai from './chai'
import { useState } from 'react'
import Card from './components/cards'

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
      <button className="bg-blue-500 p-4 rounded" onClick={add}>Add</button>

      <button className="bg-red-500 p-4 rounded" onClick={remove}>Remove</button>

      <Card username="John Doe" />
      
    </>
  )
}

export default App
