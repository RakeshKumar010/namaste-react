import React from "react";
import ReactDOM from 'react-dom'
import './index.css'
// const heading =React.createElement('h1',{id:"maindiv"},'hello world')
                         //Both are same
const heading=<h1 id="maindiv">Hello world</h1>
console.log(heading)
const root=ReactDOM.createRoot(document.getElementById('root'))
root.render(heading)