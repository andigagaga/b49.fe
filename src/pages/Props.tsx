import React from "react";

import { Link } from "react-router-dom"

export default class Props extends React.Component {
  render() {
    return (
      <div>
        <div>Partai</div>
        <Partai partai={"partai komunis bhahaha indonesia"} />
      </div>
    );
  }
}

class Partai extends React.Component<{partai:string}, { value: string }> {
  render() {
    const { partai } = this.props;

    return (
      <div>
        <center>
        <h1>{partai}</h1>
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
    );
  }
}