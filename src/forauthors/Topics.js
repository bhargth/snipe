import React from 'react'
import { Link } from 'react-router-dom';
import  './Science';
import  './Technology';
/* import  './MedicalScience';

import  './Engineering';
import './LifeSciences';
import  './Medicine';
import  './Pharmacy';
import  './Veterinary';
import  './Journalism';
import  './MediaStudies';
import './Education';
import  './Mathematics';
import  './Marketing';
import  './HumanResource';
import  './Finance';
import  './Commerce';
import  './Management'; */



import './Topics.css';


const Topics = () => {

    return (
        <div>
            <h1>Browse By Subject</h1>
            <ul className='List'>
               <li className='listItem'>
                  <Link to = '/Science'>Science</Link> 
              </li> 
              <li className='listItem'>
              <Link to = '/Technology'>Technology</Link>
              </li>
               <li className='listItem'>
              <Link to = '/MedicalScience'>Medical Sciences</Link>
              </li>
              
              <li className='listItem'>
              <Link to = '/Engineering'>Engineering</Link>
              </li>
              <li className='listItem'>
              <Link to = '/Management'>Management</Link>
              </li>
              <li className='listItem'>
              <Link to = '/LifeSciences'>Life Sciences</Link>
              </li>
              <li className='listItem'>
              <Link to = '/Medicine'>Medicine</Link>
              </li>
              <li className='listItem'>
              <Link to = '/Pharmacy'>Pharmacy</Link>
              </li>
              <li className='listItem'>
              <Link to = '/Veterinary'>Veterinary</Link>
              </li>
              <li className='listItem'>
              <Link to = '/Journalism'>Journalism</Link>
              </li>
              <li className='listItem'>
              <Link to = '/MediaStudies'>Media Studies</Link>
              </li>
              <li className='listItem'>
              <Link to = '/Education'>Education</Link>
              </li>
              <li className='listItem'>
              <Link to = '/Mathematics'>Mathematics</Link>
              </li>
              <li className='listItem'>
              <Link to = '/Marketing'>Marketing</Link>
              </li>
              <li className='listItem'>
              <Link to = '/HumanResource'>Human Resource</Link>
              </li>
              <li className='listItem'>
              <Link to = '/Finance'>Finance</Link>
              </li>
              <li className='listItem'>
              <Link to = '/Commerce'>Commerce</Link>
              </li>
 


            </ul>
        </div>
    );
        
}





export default Topics
