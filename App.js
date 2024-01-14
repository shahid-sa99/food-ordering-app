// this will return react element which is nothing but Object
// const heading = React.createElement("h1",{id:"heading",set:"tuio"},"Hello world from React");/

const parent = React.createElement("div",
{id:"parent1"},
[React.createElement("div",{id:"child1"},[React.createElement("h1",{},"Im h1 tag"),React.createElement("h2",{},"Im h2 tag")]),
React.createElement("div",{id:"child2"},[React.createElement("h1",{},"Im child2 h1 tag"),React.createElement("h2",{},"Im child2 h2 tag")])
])


// console.log(heading)


//creating react root that will render h1 in the root element 
const root = ReactDOM.createRoot(document.getElementById("root1"));


//the react Object is converted into actual HTML using the render function
root.render(parent);