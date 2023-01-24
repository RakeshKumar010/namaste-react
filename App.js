import React from "react";
import ReactDOM from 'react-dom'
const Headig =()=> <h1>Hello</h1>
const FunctionalComponents =()=>{
    return(<>
    <Headig/>
        <h1>Home </h1>
        <h2>Heading 2</h2>
        <h3>Headig 3</h3>
    </>)
}
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<FunctionalComponents/>)
 