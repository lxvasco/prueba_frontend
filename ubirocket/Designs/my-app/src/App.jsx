import { useState } from 'react'
import './App.css'
import { InicialView } from './components/Home/InicialView/InicialView'
import { DataNextLaunch } from './components/Countdown/DataNextLaunch/DataNextLaunch'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

/*function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    <InicialView/>
   <DataNextLaunch/>
    </div>
  )
}*/

function App() {
 /* const [count, setCount] = useState(0)*/

  return (
    <BrowserRouter>
      <div>
        <Routes>
        <Route path="/" element={<InicialView />}></Route>
        <Route path="/NextLaunch" element={<DataNextLaunch />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
