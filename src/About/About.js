import React from 'react'
import { Card, Nav, Navbar, NavLink } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import './About.css';
import knowledgeculutre from './knowledgeculture.jpg';
import threecards from './threecards.jpg'



const About = () => {
    return (
        <div className='aboutPage'>
        <Navbar bg="success" variant="dark" font-weight = "bold" font-size = "35px">
    <div className='aboutNavbar'>
    <Nav className="me-auto">
      <Nav.Link className='aboutNavbaritems' href="#home">About Snipe</Nav.Link>
      <Nav.Link className='aboutNavbaritems' href="#features">What's in SRch</Nav.Link>
      <Nav.Link className='aboutNavbaritems' href="#pricing">News</Nav.Link>
      <Nav.Link className='aboutNavbaritems' href="#pricing">Webniars</Nav.Link>
   </Nav>
    </div>
   </Navbar>
     <div className='abPdisplay'>
         <div className='abPdisplay__image'>
         <p className='abttitle'>About Snipe <br></br>Research</p>
         </div>
         <div className='abPdisplay__description'>
           <p>Snipe Research is a digital library for the <br></br>intellectually curious.We help <br></br>everyone discover, share, and<br></br> connect valuable ideas.</p>
         </div>
           </div>
           <div className='abPdefinition'>
               <div className='abPdefinition__text'>
                <h2>SR provides access to many <a href='#'>journal articles</a> , <a href='#'>Books</a>, <br></br> <a href='#'>images</a> and <a href='#'>primary sources</a> in different disciplines.</h2>
                  <p className='abPdefinition__subtext'>We help you explore a wide range of scholarly content through a powerful research and teaching <br></br>platform. We collaborate with the academic community to help libraries connect students and faculty <br></br> to vital content while lowering costs and increasing shelf space, provide independent researchers <br></br> with free and low-cost access to scholarship, and help publishers reach new audiences and preserve<br></br> their content for future generations</p>
          </div>
               <div className='abPdefinition__covidcard'>
                  <h2>Important news about <br></br>expanded access due <br></br> to the COVID-19 <br></br>disruptions</h2>
                  <Button className='abPLearnmoreBtn' color='green'>Learn more</Button>
               </div>
                </div>
                <div className='abPNEws'>
                    <div className='abPNEws__articles'>
                        <h3>NEWS</h3>
                        <p className='abPNEws__date'>April 6, 2022</p>
                        <a href='#'>Serving our community in difficult times <br></br> A letter <br></br>from Kevin Guthrie</a>
                        <hr className='abPline'></hr>
                        <p className='abPNEws__date'>April 6, 2022</p>
                        <a href='#'>Serving our community in difficult times <br></br> A letter <br></br>from Kevin Guthrie</a>
                        <hr></hr>
                        <p className='abPNEws__date'>April 6, 2022</p>
                        <a href='#'>Serving our community in difficult times <br></br> A letter <br></br>from Kevin Guthrie</a>

                    </div>
                    <div className='abPNEws__twitter'>
                        <span className='abPNEws__twittericon'>
                    <Button circular color='twitter' icon='twitter'></Button>
                    <h3>SnipeResearch</h3>
                    </span>
                    <p className='abPNEws__twittertext'>The sport of Newcomb ball <br></br>was created by Clara <br></br>Gregory Baer two years<br></br> before volleyball. Now<br></br>forgotten, it is a good bet it <br></br>lives on in the gyms and<br></br> beach courts of today.</p>
                    <a className='abPNEws__twitterlink' href='#'>14 hours ago</a>

                    </div>
                    <div >
                     <Card className='abPNEws__displaycard' border="success" style={{ width: '20rem' }}>
                    <Card.Img className='abPNEws__displayimg' variant="top" src={knowledgeculutre} />
                    <Card.Body>
                      <Card.Text className='abPNEws__displaycardtext'>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                  <Button variant="primary" color='green'>Watch</Button>
                   </Card.Body>
                  </Card>
                     </div>
                  </div>
                  <div className='abPThreecards'>
                      <div>
                      <Card className='abPThreecards__first'bg="success" style={{ width: '20rem' }}>
                    
                    <Card.Body>
                    <Card.Title className='abPThreecards__firsttitle' >Start your research</Card.Title>
                      <Card.Text className = 'abPThreecards__firsttext' >
                      Discover why scholars, researchers, and students access SRch more.
                    </Card.Text>
                    <div className='abPThreecards__firstbtns'>
                    <input type="text" placeholder="Search"></input>
                  <Button className ='abPThreecards__firstbtn'variant="primary" >Search SRch</Button>
                  </div>
                   </Card.Body>
                  </Card>
                      </div>
                      <div>
                      <Card className="abPThreecards__second" style={{ width: '20rem' }}>
                       <Card.Img className='abPThreecards__secondimg' src= {threecards} alt="Card image" />
                        <Card.ImgOverlay>
                       <Card.Title className='abPThreecards__title'>Primary Sources</Card.Title>
                       </Card.ImgOverlay>
                       <Card.Body>
                        <Card.Text>
                        Millions of artworks, photographs, and other primary sources many of them free are available on SnipeResearch.
                        </Card.Text>
                        <Button variant="primary" >Learn more</Button>
                  </Card.Body>
                        </Card>
                      </div>
                      <div>
                      <Card className="abPThreecards__third" style={{ width: '20rem' }}>
                       <Card.Img src={threecards} alt="Card image" />
                        <Card.ImgOverlay>
                       <Card.Title className='abPThreecards__title'>Snipe Daily</Card.Title>
                       </Card.ImgOverlay>
                       <Card.Body>
                        <Card.Text>
                        Our favorite stories examining effective study habits, why you shouldn’t fear the library, and how American public schooling began.
                        </Card.Text>
                        <Button variant="primary" >Read now</Button>
                  </Card.Body>
                        </Card>
                      </div>

                  </div>

        </div>
    )
}

export default About
