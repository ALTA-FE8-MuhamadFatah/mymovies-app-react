import React, { Component } from "react";
import CardFilm from "../../components/CardFilm";
import Navbars from "../../components/Navbars";

class Home extends Component {
    render() {
        return (
            <>
                <Navbars />
                <CardFilm titleList="List Now Playing" />
            </>
        )
    }
}

export default Home