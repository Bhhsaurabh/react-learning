import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cards from "./component/Cards"
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1 className="text-3xl font-bold underline bg-green-400 p-4 rounded-xl text-black mb-4">
      Props examples: 
    </h1>
    <Cards name = "Saurabh kumar" btn="Click me"/>
    <Cards name = "Golu kumar" btn = "Press me"/>
    
    </>
  )
   
}

export default App
