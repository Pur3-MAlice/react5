import React from "react";

// function FunctionalGreetingWithProps() {
//     return <h1>Hello from React!</h1>
// }

const FunctionalGreetingWithProps = (props) => {
    console.log(props);
    return <h1>Hello {props.name}! {props.greeting}. I know you are {props.age} years old.</h1>;
}

export default FunctionalGreetingWithProps;