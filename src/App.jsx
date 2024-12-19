import React from 'react'
import {Link} from 'react-router-dom'

const App = () => {
  return (<>
    <div>
      <h1></h1>
      <span><Link to="/">Home</Link></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span><Link to="/Post">Post</Link></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span><Link to="/Delete">Delete</Link></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span><Link to="/Update">Update</Link></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span><Link to="/Getall">Getall</Link></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    </div>
    </>)
}

export default App
