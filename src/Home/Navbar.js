 import React from 'react'
 import "../Home/Navbar.scss"; 
 import {Link} from "react-router-dom";
 import logo from "../../src/images/Snipe Research.png";

 
 const Navbar = () => {
  
     return (
   
         <div className='container-fluid nav-bg'>
         <div className='row'>
             <div className='col-10 mx-auto'>
   <nav className="navbar navbar-expand-lg  ">
  <div className="container-fluid">
    <img src={logo} className="navbar-brand" alt="logo" />
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/Home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/About">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Publishpapers">Publishpapers</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Search">Search</Link>
        </li>
       
        <li className="nav-item">
          <Link className="nav-link" to="/Contact">Contact</Link>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="/ForAuthors" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            For Authors
          </Link>
          <ul className="dropdown-menu" aria-labelledby="For Authors">
            <li><Link className="dropdown-item" to="/Publishpapers">Publishpapers</Link></li>
            <li><Link className="dropdown-item" to="/Topics">Topics</Link></li>
            <li><Link className="dropdown-item" to="/CheckStatus">Check Status </Link></li>
          </ul>
        </li>
      </ul>
      <div class="btn-group" role="group" aria-label="Basic mixed styles example">
      <div className="nav-item">
          <Link to="/Login">
          <button className='nav-link btn-success text-dark'>Login</button>
          </Link>
          <Link to="/Register">
          <button className='nav-link btn-success text-dark'>Register</button>
          </Link>
          
        </div>
</div>
    </div>
  </div>
</nav>
          </div>
         </div>  
          </div>
     )
 }
 export default Navbar