import React from 'react'
import Card from 'react-bootstrap/Card';
import {Link} from "react-router-dom";
import { Button } from 'semantic-ui-react';
import './contact.css';
import newstudentform from './newstudentform';



const contact = () => {
    return (
        <div>
      <h1>Contact US</h1>
      <div className='contactfirstcontainer'>
      <Card className='contactfirstcontainer_firstcard'style={{ width: '20rem' }} bg = "light">
      <Card.Title class="fs-3 bg-success text-black text-center p-4">Students</Card.Title>
          <Card.Body class= "text-center fs-6 p-4">
                          Searching<br></br>
                          <br></br>
                          Research Tools<br></br>
                          <br></br>
                          Citation Management<br></br>
                          <br></br>
                          Downloading<br></br>
                          <br></br>
                          Getting Access
                          <div className='contactfirstcontainer_card--btn'>
                          <Link to="/contact/newstudentform">
                          <Button className ='contactfirstcontainer_card--btn'variant="primary">Student Support Form</Button></Link></div>
                      </Card.Body>
                    </Card>
                    <Card className='contactfirstcontainer_secondcard'style={{ width: '20rem' }} bg = "light">
      <Card.Title class="fs-3 bg-success text-black text-center p-4">Administrators</Card.Title>
          <Card.Body class= "text-center fs-6 p-4">
          Usage Reports<br></br>
                          <br></br>
                          Library Holdings<br></br>
                          <br></br>
                          IP Updates<br></br>
                          <br></br>
                          Discovery and Linking<br></br>
                        <div className='contactfirstcontainer_secondcard--btn'>
                        <Link to="/contact/newadminsupportform">
                          <Button variant="primary">Admin Support Form</Button></Link></div>
                      </Card.Body>
                    </Card>
                  <Card className='contactfirstcontainer_blackcard'style={{ width: '20rem' }} bg = "light">
                  <Card.Title class="fs-5 bg-dark text-white text-center p-4">Independent Researchers</Card.Title>
          <Card.Body class= "text-center fs-6 p-4">
                         Creating an Account<br></br>
                          <br></br>
                          Saving Items<br></br>
                          <br></br>
                          JPASS, Read Online for Free and Article Purchases<br></br>
                        <div className='contactfirstcontainer_blackcard--btn'>
                          <Button variant="primary">Web Support Form</Button></div>
                      </Card.Body>
                  </Card>
      </div>
      <div className='contactsecondcontainer'>
      <Card className='contactfirstcontainer_firstcard'style={{ width: '20rem' }} bg = "light">
      <Card.Title class="fs-3 bg-success text-black text-center p-4">Faculty</Card.Title>
          <Card.Body class= "text-center fs-6 p-4">
                         Course Materials<br></br>
                          <br></br>
                          Accessibility<br></br>
                          <br></br>
                          Copyright & Permissions<br></br>
                          <br></br>
                          Text and Data Mining<br></br>
                       <div className='contactsecondcontainer_card--btn'>
                          <Button variant="primary">Faculty Support Form</Button></div>
                      </Card.Body>
                    </Card>
                    <Card className='contactfirstcontainer_secondcard'style={{ width: '20rem' }} bg = "light">
      <Card.Title class="fs-4 bg-success text-black text-center p-4">Library Participation</Card.Title>
          <Card.Body class= "text-center fs-6 p-4">
          Request a Trial<br></br>
                          <br></br>
                          Collections & Packages<br></br>
                          <br></br>
                          Fees & Quotes<br></br>
                          <br></br>
                          Agreements<br></br>
                        <div className='contactfirstcontainer_secondcard--btn'>
                          <Button variant="primary">Participation Form</Button></div>
                      </Card.Body>
                    </Card>
                  <Card className='contactfirstcontainer_blackcard'style={{ width: '20rem' }} bg = "light">
                  <Card.Title class="fs-4 bg-dark text-white text-center p-4">Publishers</Card.Title>
          <Card.Body class= "text-center fs-6 p-4">
                            Usage Statistics<br></br>
                          <br></br>
                          Contributing Content<br></br>
                          <br></br>
                          Services for Publishers<br></br>
                        <div className='contactsecondcontainer_blackcard--btn'>
                          <Button variant="primary">Publisher info</Button></div>
                      </Card.Body>
                  </Card>
      </div>
        </div>
    )
}

export default contact
