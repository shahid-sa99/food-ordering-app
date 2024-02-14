// this will return react element which is nothing but Object
// const heading = React.createElement("h1",{id:"heading",set:"tuio"},"Hello world from React");/
import React from "react";
import ReactDOM from 'react-dom/client'

const HeadingComponent=()=>{
    return(<h1>test component</h1>)
}

const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(<HeadingComponent/>);