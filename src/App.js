import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

//pages
// import Home from './pages/Home'
// import About from './pages/About'
// import Articles from './pages/Articles'
// import Project from './pages/Project'
// import Error from './pages/Error'

//components
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const Home = React.lazy(() => import('./pages/Home'))
const About = React.lazy(() => import('./pages/About'));
const Articles = React.lazy(() => import('./pages/Articles'));
const Project = React.lazy(() => import('./pages/Project'));
const Error = React.lazy(() => import('./pages/Error'));

function App() {
  return (
    <Router>
        <Navbar/>
        <main>
          <Routes>
              <Route path='/' 
                    element={
                      <React.Suspense fallback={<>...</>}>
                        <Home/>
                      </React.Suspense>
                    } />
              <Route path='/about' 
                    element={
                      <React.Suspense fallback={<>...</>}>
                        <About/>
                      </React.Suspense>
                    }/>
              <Route path='/articles' 
                    element={
                      <React.Suspense fallback={<>...</>}>
                        <Articles/>
                      </React.Suspense>
                    }/>
              <Route path='/project/:id' 
                    element={
                      <React.Suspense fallback={<>...</>}>
                        <Project/>
                      </React.Suspense>
                    }/>
              <Route path='/*' 
                    element={
                      <React.Suspense fallback={<>...</>}>
                        <Error/>
                      </React.Suspense>
                    }/>
          </Routes>
        </main>
        <Footer/>
    </Router>
  )
}

export default App