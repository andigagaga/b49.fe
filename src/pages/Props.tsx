import React from "react";

export default class App extends React.Component {
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
        <h1>{partai}</h1>
      </div>
    );
  }
}