// this will return react element which is nothing but Object
// const heading = React.createElement("h1",{id:"heading",set:"tuio"},"Hello world from React");/
import React from "react";
import ReactDOM from 'react-dom/client'

const parent = React.createElement("div",
{id:"paret"},
[React.createElement("div",{id:"child1"},[React.createElement("h1",{},"Im react tag"),React.createElement("h2",{},"Im h2 tag")]),
React.createElement("div",{id:"child2"},[React.createElement("h1",{},"Im child2 node teghfghfh fhfshgd g"),React.createElement("h2",{},"Im child2 h2 tag")])
])


// console.log(heading)

const element = <h2>React element</h2>

const HeadingOldComponent = function(){
    return(
        <h3>React Old</h3>
    )
}


const HeadingComponent = ()=>(
    <>
    <HeadingOldComponent/>
    
    {element}
    <h1>Test</h1>
    </>
)

//creating react root that will render h1 in the root element 
const root = ReactDOM.createRoot(document.getElementById("root1"));


//the react Object is converted into actual HTML using the render function
root.render(<HeadingComponent/>);