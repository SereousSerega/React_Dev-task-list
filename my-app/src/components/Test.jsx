import { useState } from 'react'
import '../App.css'
import icon from '../assets/jsx.png'

function Test() {
  const [count, setCount] = useState(0)

  
  return (
    <>
      <img src={icon} alt="test" width={300} />
      <h1>Hello World</h1>
    </>
  )
}

export default Test
