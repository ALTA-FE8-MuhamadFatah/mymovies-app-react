// import library
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

// import components
import CardFav from "./components/CardFav";

// import pages
import Home from "./pages/Home/Home"
import Detail from "./pages/Detail/Detail";

class App extends Component {

  render() {
    return (
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/favorit" element={<CardFav titleList="List Favorite Film" />} />
        </Routes>
      </Router>
    )
  }
}

export default App