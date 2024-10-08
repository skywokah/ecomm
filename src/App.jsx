import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navi from './components/navbar'
import Content from './components/content' 
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navi/>
        <br/>
        <Content/>

     
      

      
    </>
  )
}

export default App
