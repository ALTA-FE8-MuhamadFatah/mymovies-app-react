import React, { Component } from "react";
import routes from "../../routes";

const DETAIL_API = "https://api.themoviedb.org/3/movie/"

class Detail extends Component {
    render() {
        const STATE = this.props.location.state
        return (
            <>
                <p>{STATE.id}</p>
                <p>{STATE.judul}</p>
            </>
        )
    }
}

export default routes(Detail)