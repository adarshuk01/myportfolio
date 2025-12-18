import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Layout from './layout/Layout'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProjectDetails from './pages/ProjectDetails'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route element={<Layout/>} >
        <Route path='/' element={<HomePage/>} />
        <Route path='/project/:id' element={<ProjectDetails/>}/>

        </Route>
      </Routes>
    </>
  )
}

export default App
