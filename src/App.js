// Import Library
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Detail from './pages/Detail/Detail'
import Favorit from './pages/Favorit/Favorit'
import Home from './pages/Home/Home'


const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/favorit" element={<Favorit />} />
        </Routes>
      </Router>
    </>
  )
}

export default App;
