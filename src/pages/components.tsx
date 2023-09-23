import React from "react";

import { Link } from "react-router-dom"

export default class Components extends React.Component{
    render() {
        return(
            <React.Fragment>
                <div>
                    <center>
                    <h1>ini halaman component</h1>
                    <Link to={"/"} >
                        <button>Home</button>
                    </Link>
                    <Link to={"/components"} >
                        <button>Components</button>
                    </Link>
                    <Link to={"/props"} >
                        <button>Props</button>
                    </Link>
                    </center>
                </div>
            </React.Fragment>
        )
    }
}