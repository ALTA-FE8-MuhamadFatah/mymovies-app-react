import React, { Component } from "react";
import CardFav from "./components/CardFav";
import CardFilm from "./components/CardFilm";
import Navbars from "./components/Navbars";

class App extends Component {

  render() {
    return (
      <>
        <Navbars />
        <CardFilm titleList="List Now Playing" />
        <CardFav titleList="List Favorite Film" />
      </>
    )
  }
}

export default App