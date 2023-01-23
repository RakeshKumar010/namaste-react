import React from "react";
import ReactDOM from "react-dom/client";
const heading1 = React.createElement('h1', {}, 'namaste heading 1')
const heading2 = React.createElement('h2', {}, 'namaste heading 2')
const Heading3 = React.createElement('h3', {}, 'namaste headiing 3')
const MainDiv = React.createElement('div', { id: 'maindiv' }, [heading1, heading2, Heading3])
console.log(MainDiv)
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(MainDiv);