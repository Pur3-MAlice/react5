import React from "react";


class StatefulGreetingWithCallback extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            introduction: "Hello!",
            buttonText: "Enter", 
            count: 0
        };
    }

    handleClick() {
        this.setState((prevState, prevProps) => {
            console.log("prev state", prevState)
            console.log("prev props", prevProps)
            return {
                introduction: prevState.introduction === "Hello!" ? "Goodbye" : "Hello!",
                buttonText: prevState.buttonText === "Enter" ? "Exit" : "Enter"
            }
        })
    }


    IncClick() {
        this.setState((prevState, prevProps) => {
            console.log("prev state", prevState)
            console.log("prev props", prevProps)
            return {
                count: prevState.count + 1
            }
        })
    }


    render() {
        return (
            <div>
                <h1>{this.state.introduction} {this.props.name}. {this.props.thingy}.</h1>
                <button onClick={() => this.handleClick()}>{this.state.buttonText}</button>
                <button onClick={() => this.IncClick()}>{this.state.count}</button>
            </div>
        )
    }
}

export default StatefulGreetingWithCallback