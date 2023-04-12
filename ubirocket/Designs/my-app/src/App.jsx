import './App.css'
import { InicialView } from './components/Home/InicialView/InicialView'
import { DataNextLaunch } from './components/Countdown/DataNextLaunch/DataNextLaunch'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Navbar } from './components/NavBar/Navbar'

function App() {
  return (
    <BrowserRouter>
      <div className='navbar'>
        <img src="https://cdn-icons-png.flaticon.com/512/10321/10321221.png" alt="Rocket" />
        <Navbar />
      </div>
      <div>
        <Routes>
          <Route path="/" element={<InicialView />}></Route>
          <Route path="/Upcoming" element={<DataNextLaunch />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
