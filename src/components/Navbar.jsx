import React from 'react'
import { NavLink ,Link } from "react-router-dom"

const Navbar = () => {

  return (
    <>

    <nav className="navbar navbar-expand-lg bg-dark border-bottom border-body" data-bs-theme="dark">
    {/* <nav className="navbar navbar-expand-lg navbar-dark bg-light"> */}
  <Link className="navbar-brand" to="/" style={{marginRight: "45%"}}>Quick Health Analyser </Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse  " id="navbarNavDropdown">
    <ul className="navbar-nav">
      <li className="nav-item ">
        <NavLink className="nav-link" to="/">Home </NavLink>
      </li>
      <li className="nav-item ">
        <NavLink className="nav-link" to="/about">About </NavLink>
      </li>
      {/* <li className="nav-item ">
        <NavLink className="nav-link" to="/feature">Feature </NavLink>
      </li> */}
      
      <li className="nav-item  d-flex">
        <NavLink className="nav-link" to='/heart'>Heart Diseases</NavLink>
        <NavLink  className="nav-link"to='/diabetes'>Diabetes</NavLink>
        <NavLink className="nav-link" to='/neurological'>Neurological Diseases</NavLink>
        {/* </div> */}
      </li>
    </ul>
  </div>
</nav>
    </>
  )
}

export default Navbar