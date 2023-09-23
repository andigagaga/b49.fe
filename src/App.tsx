import React from "react";

type State = {
    doksly: string
}

export default class App extends React.Component{

    state: State = {
        doksly: "andi itus"
    }

    updateDoksly = () => {
        this.setState({
            doksly: "ganteng"
        })
    }
    render(){
        return(
           <React.Fragment>
            <div>{this.state.doksly}</div>

            <button onClick={this.updateDoksly}>sebenernya</button>
           
           </React.Fragment>
        )
    }
} 