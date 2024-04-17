import React, { Component } from 'react'
import {Link} from "react-router-dom"
export class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
     <div className="container-fluid">
    <Link className="navbar-brand" to="/" >TrashtoCash</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link " aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/About">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/redeem">Reedem</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/working">Working</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/sell">Sell</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/shop">Shop</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/technology">Technology</Link>
        </li>
      </ul>

    </div>
  </div>
</nav>
      </div>
    )
  }
}

export default Navbar
