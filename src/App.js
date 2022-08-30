import React, { Component } from "react";
import CardFav from "./components/CardFav";
import CardFilm from "./components/CardFilm";
import Navbars from "./components/Navbars";

class App extends Component {

  state = {
    film: [
      {
        text: "1"
      },
      {
        text: "2"
      },
      {
        text: "3"
      },
      {
        text: "4"
      }
    ]
  }

  render() {
    return (
      <>
        <Navbars />
        <CardFilm data="List Now Playing" />
        <CardFav  data="List Favorite Film" />
      </>
    )
  }
}

export default App