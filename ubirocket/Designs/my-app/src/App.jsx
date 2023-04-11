import { useState } from 'react'
import './App.css'
import { InicialView } from './components/Home/InicialView/InicialView'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    <InicialView/>
    </div>
  )
}

export default App
