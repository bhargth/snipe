import React from 'react';
import Home from "./Home/Home";
import About from './About/About';
import Publishpapers from './publishpapers/Publishpapers';
import Search from "./Home/Search";
import Contact from './contact/contact';
import {Routes,Route} from "react-router-dom";
import Topics from './forauthors/Topics';
import CheckStatus from './forauthors/CheckStatus';
import Login from './signup/Login';
import Navbar from './Home/Navbar';
import Footer from "./Home/Footer";
import Register from './signup/Register';
import Science from './forauthors/Science';
import Technology from './forauthors/Technology';
import Engineering from './forauthors/Engineering';
import LifeSciences from './forauthors/LifeSciences';
import Medicine from './forauthors/Medicine';
import Pharmacy from './forauthors/Pharmacy';
import Veterinary from './forauthors/Veterinary';
import Journalism from './forauthors/Journalism';
import MediaStudies from './forauthors/MediaStudies';
import Education from './forauthors/Education';
import Mathematics from './forauthors/Mathematics';
import Marketing from './forauthors/Marketing';
import HumanResource from './forauthors/HumanResource';
import Finance from './forauthors/Finance';
import Commerce from './forauthors/Commerce';
import Management from './forauthors/Management';
import historyOFMedicine from './forauthors/historyOFMedicine';
import NewstudentForm from './contact/newstudentform';
import NewadminsupportForm from './contact/newadminsupportform';


const App = () => {
  return (
    <div>
      
    <Navbar/>
    <Routes>
    <Route path ="/*" element = {<Home/>}/>
    <Route path ="/About" element = {<About/>}/>
    <Route path ="/Publishpapers" element = {<Publishpapers/>}/>
    <Route path ="/Search" element = {<Search/>}/>
    <Route path ="/Contact" exact element = {<Contact/>}/>
    <Route path = "/contact/newstudentform" exact element={<NewstudentForm/>}/>
    <Route path = "/contact/newadminsupportform" exact element={<NewadminsupportForm/>}/>

    <Route path ="/Topics" element = {<Topics/>}/>
    <Route path ="/CheckStatus" element = {<CheckStatus/>}/>
    <Route path = "/Login" element = {<Login/>}/>
    <Route path = "/Register" element = {<Register/>}/>
    
    <Route path = "/Science" element={<Science/>}/>
    <Route path = "/Technology" element={<Technology/>}/>
    
    <Route path = "/Engineering" element={<Engineering/>}/>
    <Route path = "/LifeSciences" element={<LifeSciences/>}/>
    <Route path = "/Medicine" element={<Medicine/>}/>
    <Route path = "/Pharmacy" element={<Pharmacy/>}/>
    <Route path = "/Veterinary" element={<Veterinary/>}/>
    <Route path = "/Journalism" element={<Journalism/>}/>
    <Route path = "/MediaStudies" element={<MediaStudies/>}/>
    <Route path = "/Education" element={<Education/>}/>
    <Route path = "/Mathematics" element={<Mathematics/>}/>
    <Route path = "/Marketing" element={<Marketing/>}/>
    <Route path = "/HumanResource" element={<HumanResource/>}/>
    <Route path = "/Finance" element={<Finance/>}/>
    <Route path = "/Commerce" element={<Commerce/>}/>
    <Route path = "/Management" element={<Management/>}/>
    <Route path = "/FilePages/bookForAnotomy" element={<bookForAnotomy/>}/>
    <Route path = "/historyOFMedicine" element={<historyOFMedicine/>}/>
    
   

    </Routes>
     <Footer/>
    
    </div>
  );
}

export default App;