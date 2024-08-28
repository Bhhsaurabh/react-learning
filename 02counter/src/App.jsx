import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter] = useState(15)
  const Add_me = () =>{
    if(counter <= 19){
    setCounter(counter = counter + 1)
    }
  }
  const Subract_me = () =>{
    if(counter > 0){
    setCounter(counter = counter -1 )
    }
  }
  return (
    <>
      <h1>FUN TIME 🤓</h1>
      <div>
        <h3>My current value is {counter}</h3>
      </div>
      <div>
        <button onClick={Add_me}>Add me😍</button>
        <br/>
        <button onClick={Subract_me}>Subtract me😂</button>

      </div>
      <footer>
        @saurabh kumar
      </footer>
    </>
  )
}

export default App
