import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
//pages
import Home from './pages/Home'
import About from './pages/About'
import Error from './pages/Error'
//components
import Navbar from './components/Navbar'
import Footer from './components/Footer'


function App() {
  return (
    <Router>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/about' element={<About/>}/>
            <Route path='/*' element={<Error/>}/>
        </Routes>
        <Footer/>
    </Router>
  )
}

export default App