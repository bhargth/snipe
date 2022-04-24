import React from 'react';
import { Link } from 'react-router-dom';
import "../Home/Footer.scss";
import logo from "../../src/images/Snipe Research.png";


const Footer = () => {
  return (
      <footer className= ' sticky-top bg-success text-white pt-5 pb-3'>
      <div className=' text-center text-md-left'>
      <div className='row text-center text-md-left'>
      <div className='col-md-3 col-lg-3 col-xl-3 mx-auto mt-3'> 
      <h5 className='text-uppercase mb-4 font-weight-bold text-dark'>snipe Research</h5>
     
    <img src={logo} className="navbar-brand" alt="logo" />

      </div>
     <div className='col-md-2 col-lg-2 col-xl-2 mx-auto mt-3'>
     <h5 className='text-uppercase mb-4 font-weight-bold text-dark'>Quick Links</h5>
     <p ><Link  className='text-white' to="/Home">Home</Link></p>
     <p ><Link  className='text-white' to="/About">About</Link></p>
     <p ><Link  className='text-white' to="/Search">Search</Link></p>
     <p ><Link  className='text-white' to="/Publishpapers">Publishpapers</Link></p>
     <p ><Link  className='text-white' to="/Contact">contact</Link></p>

</div>
 <div className='col-md-4 col-lg-3 col-xl-3 mx-auto mt-3'>
 <h5 className='text-uppercase mb-4 font-weight-bold text-dark'>Contact</h5>
     <p ><i  className='fas fa-home mr-3' ></i>Snipe tech pvt ltd </p>
     <p ><i  className='fas fa-home mr-3' ></i>no 623 13th main road 6th block rajajinagar bangalore 560010</p>
     <p ><i  className='fas fa-Phone mr-3' ></i> +91 6349036578</p>
     <p ><i  className='fas fa-envelope mr-3' ></i>snipetechpvtltd@gmail.com</p>
</div>
<div>
<div className=' row align-item-center text-dark'>
    <div className='col-md-7 col-lg-8'>
        <p>copyright @2022 All rights resevered by:</p>
    </div>
</div>
</div>

      </div>

      </div>

      </footer>
  )
};

export default Footer;

