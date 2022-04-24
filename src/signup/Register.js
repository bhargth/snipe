import React from 'react';
import icon from "../../src/images/icon.png";
import "./Register.css";
import {Link} from "react-router-dom";


class Register extends React.Component {
  constructor(props) {
  super(props);
  this.state = {
    input: {},
    errors: {},
    roleValue:' ',
    isActive: false,
    isActive1: false,
    checkedTrue: false,
    checkedTrue2: false,
    checkedTrue3: false,
    checkboxRequired: false,
    allFieldsTrue:false,
    successTrue: false
   
  };
   
  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
}

 scrollToTop = () =>{
  window.scrollTo({
    top: 0, 
    behavior: 'smooth'
   
  });
};

handleShow = () => {
  this.setState({isActive: false});
};

handleHide = () => {
  this.setState({isActive: true});
};

handleShowPassword = () => {
  this.setState({isActive1: true});
};

handleHidePassword = () => {
  this.setState({isActive1: false});
};
   
handleChange(event) {
  let input = this.state.input;
  input[event.target.name] = event.target.value;

  this.setState({
    input
  });
}

handleRoleChange = (event) => {
  if(event.target.value){
    this.setState({roleValue: event.target.value});
  }
}

onchangeCheck = (value) => {
  if(value){
    if(value === "check1"){
      this.setState({checkedTrue: !this.state.checkedTrue});
    }
    if(value === "check2"){
      this.setState({checkedTrue2: !this.state.checkedTrue2});
    }
    if(value === "check3"){
      this.setState({checkedTrue3: !this.state.checkedTrue3});
      this.setState({checkboxRequired: !this.state.checkboxRequired})
    }
  }
}

   
handleSubmit(event) {
  event.preventDefault();
  
  if( this.state.checkedTrue3===false){
    this.setState({checkboxRequired: true})
  }else{
    this.setState({checkboxRequired: false})
  }


  if(this.validate() && this.state.roleValue !== " " && this.state.checkedTrue && this.state.checkedTrue2 && this.state.checkedTrue3){
    alert('Register Form is submited');
      console.log(this.state);
      let input = {};
      input["email"] = "";
      input["confirm_email"] = "";
      input["password"] = "";
      input["confirm_password"] = "";
      input["institution"] = "";
      input["checkbox"] = "";
     
      this.setState({input:input});
        
  }else{
    this.setState({allFieldsTrue: true});
  }
}

validate(){
    let input = this.state.input;
    let errors = {};
    let isValid = true;
    

   
    if (!input["email"]) {
      isValid = false;
      errors["email"] = "Please enter your email Address.";
    }

    if (input["email"] !== " " || input["confirm_email"] !== " " || input["password"] !== " " || input["confirm_password"] !== " ") {
      this.setState({successTrue: true})
    }
  

    if (typeof input["email"] !== "undefined") {
        
      var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
      if (!pattern.test(input["email"])) {
        isValid = false;
        errors["email"] = "Please enter valid email address.";
      }
    }

     if (!input["confirm_email"]) {
      isValid = false;
      errors["confirm_email"] = "Please enter confirm email Address.";
      
    }
    if (typeof input["confirm_email"] !== "undefined" && typeof input["email"] !== "undefined") {
        
      if (input["confirm_email"] !== input["email"]) {
        isValid = false;
        errors["confirm_email"] = "Passwords don't match.";
      }
    } 

    if (!input["password"]) {
      isValid = false;
      errors["password"] = "Please enter your password.";
    }

    if (!input["confirm_password"]) {
      isValid = false;
      errors["confirm_password"] = "Please enter your confirm password.";
    }

    if (typeof input["confirm_password"] !== "undefined" && typeof input["password"] !== "undefined") {
        
      if (input["confirm_password"] !== input["password"]) {
        isValid = false;
        errors["confirm_password"] = "Passwords don't match.";
    } 
  }

  
    if (!input["institution"]) {
      isValid = false;
      errors["institution"] = "";
    }
    
    if (typeof input["institution"] !== "undefined") {
      if (!input["institution"].match(/^[a-zA-Z]+$/)) {
        isValid = false;
        errors["institution"] = "Only letters";
      }
    }
    
    this.setState({
      errors: errors
    });

    return isValid;
}

  render()
 {
    return (
      
    <div className='input-box'>
      <form className='main-div' onSubmit={this.handleSubmit}>
      <h1>Register for a free account</h1>
      <h5>EXPANDED ACCESS DURING COVID-19</h5>
        <p className='paragraph'>To support researchers during this challenging time in which many are unable to get to physical libraries, we have expanded our free read-online access to 100 articles per month.</p>
        <a className="btn btn-outline-dark google-link" target="" variant="contained" href= "https://accounts.google.com/servicelogin/signinchooser?flowName=GlifWebSignIn&flowEntry=ServiceLogin"> <img src={icon} width="25px" height="25px" alt=''/>  Register with Google</a><br/>
        <span style={{color:'red'}}><p className='note'>Note: Items marked with * are required.</p></span>
        {this.state.allFieldsTrue ? <p className='all-fields'><i class=" fa fa-exclamation-circle alert"></i>There are errors in one or more fields below. Please correct them to continue.</p> : ''}
       
       
        <div className="col-md-4">
            <label class="name">EMAIL<span style={{color:"red"}}>*</span></label>
            <input 
              type="text" 
              name="email" 
              value={this.state.input.email}
              onChange={this.handleChange}
              class={this.state.errors.email ? "form-control error-style" : this.state.successTrue ? "form-control success-style" : "form-control"}
              placeholder="Enter Your email" 
              id="email"/>
              {this.state.errors.email ? <i class="fa fa-exclamation icon-error" aria-hidden="true"></i> : this.state.successTrue ? <i class="fa fa-check icon-success"></i> : " "}      
              <div className="text-danger">{this.state.errors.email}</div>
        </div>

          <div className="col-md-4">
            <label for="confirm_email">CONFIRM EMAIL<span style={{color:"red"}}>*</span></label>
            <input 
              type="confirm_email" 
              name="confirm_email" 
              value={this.state.input.confirm_email}
              onChange={this.handleChange}
              placeholder="Confirm Your Email"
              class={this.state.errors.confirm_email ? "form-control error-style" : this.state.successTrue ? "form-control success-style" : "form-control"}
              id="confirm_email" />
             {this.state.errors.confirm_email ? <i class="fa fa-exclamation icon-error" aria-hidden="true"></i> : this.state.successTrue ? <i class="fa fa-check icon-success"></i> : " "}      
            <div className="text-danger">{this.state.errors.confirm_email}</div>
          </div>
  
          <div className="col-md-4">
            <label for="password">PASSWORD<span style={{color:"red"}}>*</span></label>
            <input 
              type={!this.state.isActive ? "password" : "text"} 
              name="password" 
              value={this.state.input.password}
              onChange={this.handleChange}
              class={this.state.errors.password ? "form-control error-style" : this.state.successTrue ? "form-control success-style" : "form-control"}
              placeholder="Enter password" 
              id="password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" />
              {this.state.errors.password ? <i class="fa fa-exclamation icon-error" aria-hidden="true"></i> : this.state.successTrue ? <i class="fa fa-check icon-success"></i> : " "}      
        
        <div className="show">
           {this.state.isActive ?(
              <button  className="show show-hide" onClick={this.handleShow}>Hide</button>
           ) : (
             <button className="show show-hide" onClick={this.handleHide}>Show</button>
           )}
        </div>
  
              <div className="text-danger">{this.state.errors.password}</div>
            <ul>
              <li>One upper or lowercase character</li>
              <li>One number or special character</li>
              <li>6 characters minimum</li>
              <li>72 characters maximum</li>
              <li>No whitespace</li>
            </ul>
        </div>
        
        <div className="col-md-4">
            <label for="confirm_password">CONFIRM PASSWORD<span style={{color:"red"}}>*</span></label>
            <input 
              type={!this.state.isActive1 ? "password" : "text"} 
              name="confirm_password" 
              value={this.state.input.confirm_password}
              onChange={this.handleChange}
              class={this.state.errors.confirm_password ? "form-control error-style" : this.state.successTrue ? "form-control success-style" : "form-control"}
              placeholder="Enter confirm password" 
              id="confirm_password"/>
             {this.state.errors.confirm_password ? <i class="fa fa-exclamation icon-error" aria-hidden="true"></i> : this.state.successTrue ? <i class="fa fa-check icon-success"></i> : " "}      
         
        <div className="show">
        
            {this.state.isActive1 ?(
           <button  className="show show-hide" onClick={this.handleHidePassword}>Hide</button>
            ) : (
          <button className="show show-hide" onClick={this.handleShowPassword}>Show</button>
            )}
          </div>
              <div className="text-danger">{this.state.errors.confirm_password}</div>

          </div>

          <div className="col-md-4">
            <label for="institution">INSTITUTION OR UNIVERSITY</label>
            <input 
              name="institution"
              type="text"
              value={this.state.input.institution} 
              onChange={this.handleChange}
              class="form-control"
              id='institution'/>
          </div>

      <div className="col-md-4">
        <label for="role">ROLE</label><br/>       
        <select className='selectpicker select-options' id='select' value={this.state.roleValue} onChange={this.handleRoleChange} >

        <option value="">Please select an option</option>
     
        <option value="Undergraduate Student">Undergraduate Student</option>
        
        <option value="Graduate Student">Graduate Student</option>
    
        <option value="PhD Candidate">PhD Candidate</option>
    
        <option value="Instructor/Faculty">Instructor/Faculty</option>
    
        <option value="K-12 Student">K-12 Student</option>
    
        <option value="K-12 Teacher">K-12 Teacher</option>
    
        <option value="Librarian">Librarian</option>
    
        <option value="Independent Researcher">Independent Researcher</option>
    
        <option value="Publisher">Publisher</option>
    
        <option value="Other">Other</option>
        </select>
      </div>
        <div className="text-danger">{this.state.errors.role_value}</div>
        
        <div class="col-md-4">
          <label for="institution">PRIMARY AREA OF STUDY</label><br/>        
           
       <select className='selectpicker select-options'>
            <option value="">Please select an option</option>
     
            <option value="Accounting">Accounting</option>
        
            <option value="African American Studies">African American Studies</option>
        
            <option value="African Studies">African Studies</option>
        
            <option value="Agriculture">Agriculture</option>
        
            <option value="American Indian Studies">American Indian Studies</option>
        
            <option value="American Studies">American Studies</option>
        
            <option value="Anthropology">Anthropology</option>
        
            <option value="Aquatic Sciences">Aquatic Sciences</option>
        
            <option value="Archaeology">Archaeology</option>
        
            <option value="Architecture &amp; Architectural History">Architecture &amp; Architectural History</option>
        
            <option value="Art &amp; Art History">Art &amp; Art History</option>
        
            <option value="Asian Studies">Asian Studies</option>
        
            <option value="Astronomy">Astronomy</option>
        
            <option value="Bibliography">Bibliography</option>
        
            <option value="Biological Sciences">Biological Sciences</option>
        
            <option value="Botany &amp; Plant Sciences">Botany &amp; Plant Sciences</option>
        
            <option value="British Studies">British Studies</option>
        
            <option value="Business">Business</option>
        
            <option value="Chemistry">Chemistry</option>
        
            <option value="Classical Studies">Classical Studies</option>
        
            <option value="Communications &amp; Media Studies">Communications &amp; Media Studies</option>
        
            <option value="Computer Science">Computer Science</option>
        
            <option value="Conservation">Conservation</option>
        
            <option value="Criminology &amp; Criminal Justice">Criminology &amp; Criminal Justice</option>
        
            <option value="Cultural Studies">Cultural Studies</option>
        
            <option value="Design">Design</option>
        
            <option value="Developmental &amp; Cell Biology">Developmental &amp; Cell Biology</option>
        
            <option value="Development Studies">Development Studies</option>
        
            <option value="Earth Science">Earth Science</option>
        
            <option value="Ecology &amp; Evolutionary Biology">Ecology &amp; Evolutionary Biology</option>
        
            <option value="Economics">Economics</option>
        
            <option value="Education">Education</option>
        
            <option value="Engineering">Engineering</option>
        
            <option value="Environmental Sciences">Environmental Sciences</option>
        
            <option value="Environmental Studies">Environmental Studies</option>
        
            <option value="European Studies">European Studies</option>
        
            <option value="Feminist &amp; Women&#39;s Studies">Feminist &amp; Women&#39;s Studies</option>
        
            <option value="Film Studies">Film Studies</option>
        
            <option value="Finance">Finance</option>
        
            <option value="Folklore">Folklore</option>
        
            <option value="Food Science">Food Science</option>
        
            <option value="Gender &amp; Sexuality Studies">Gender &amp; Sexuality Studies</option>
        
            <option value="General Science">General Science</option>
        
            <option value="Genetics">Genetics</option>
        
            <option value="Geography">Geography</option>
        
            <option value="Geology &amp; Geophysics">Geology &amp; Geophysics</option>
        
            <option value="Health Policy">Health Policy</option>
        
            <option value="Health Sciences">Health Sciences</option>
        
            <option value="History">History</option>
        
            <option value="History of Science &amp; Technology">History of Science &amp; Technology</option>
        
            <option value="International Relations">International Relations</option>
        
            <option value="Irish Studies">Irish Studies</option>
        
            <option value="Jewish Studies">Jewish Studies</option>
        
            <option value="Journalism">Journalism</option>
        
            <option value="Labor &amp; Industrial Relations">Labor &amp; Industrial Relations</option>
        
            <option value="Language &amp; Literature">Language &amp; Literature</option>
        
            <option value="Latin American Studies">Latin American Studies</option>
        
            <option value="Latino Studies">Latino Studies</option>
        
            <option value="Law">Law</option>
        
            <option value="Leisure Studies">Leisure Studies</option>
        
            <option value="Library &amp; Information Sciences">Library &amp; Information Sciences</option>
        
            <option value="Life Sciences">Life Sciences</option>
        
            <option value="Linguistics">Linguistics</option>
        
            <option value="Management &amp; Organizational Behavior">Management &amp; Organizational Behavior</option>
        
            <option value="Marketing &amp; Advertising">Marketing &amp; Advertising</option>
        
            <option value="Mathematics">Mathematics</option>
        
            <option value="Media Studies">Media Studies</option>
        
            <option value="Medicine">Medicine</option>
        
            <option value="Middle East Studies">Middle East Studies</option>
        
            <option value="Military Studies">Military Studies</option>
        
            <option value="Museum Studies">Museum Studies</option>
        
            <option value="Music">Music</option>
        
            <option value="Nursing">Nursing</option>
        
            <option value="Oceanography">Oceanography</option>
        
            <option value="Paleontology">Paleontology</option>
        
            <option value="Peace &amp; Conflict Studies">Peace &amp; Conflict Studies</option>
        
            <option value="Performing Arts">Performing Arts</option>
        
            <option value="Philosophy">Philosophy</option>
        
            <option value="Physical Education">Physical Education</option>
        
            <option value="Physical Sciences">Physical Sciences</option>
        
            <option value="Physics">Physics</option>
        
            <option value="Political Science">Political Science</option>
        
            <option value="Popular Culture">Popular Culture</option>
        
            <option value="Population Studies">Population Studies</option>
        
            <option value="Psychology">Psychology</option>
        
            <option value="Public Health">Public Health</option>
        
            <option value="Public Policy &amp; Administration">Public Policy &amp; Administration</option>
        
            <option value="Religion">Religion</option>
        
            <option value="Rhetoric &amp; Composition">Rhetoric &amp; Composition</option>
        
            <option value="Science &amp; Technology Studies">Science &amp; Technology Studies</option>
        
            <option value="Slavic Studies">Slavic Studies</option>
        
            <option value="Social Work">Social Work</option>
        
            <option value="Sociology">Sociology</option>
        
            <option value="Speech Pathology">Speech Pathology</option>
        
            <option value="Statistics">Statistics</option>
        
            <option value="Transportation Studies">Transportation Studies</option>
        
            <option value="Urban Studies">Urban Studies</option>
        
            <option value="Veterinary Science">Veterinary Science</option>
        
            <option value="Visual Arts">Visual Arts</option>
        
            <option value="Zoology">Zoology</option>
            
            </select>   
      </div>


  <br/><div class="form-check ">
  <input class= "form-check-input  check-boxes" type="checkbox" id="checkbox" checked={this.state.checkedTrue} onChange={() => this.onchangeCheck("check1")}/> 
  <label class="form-check-label checkbox-label" for="checkbox1">SNIPE RESEARCH Updates<br/>New journal and books announcement,information about <br/>platform features, <br/>and SNIPE RESEARCH events.</label>
 </div>
 
 <br/><div class="form-check">
  <input class=  "form-check-input  check-boxes" type="checkbox" id="checkbox" checked={this.state.checkedTrue2} onChange={() => this.onchangeCheck("check2")} />
  <label class="form-check-label checkbox-label" for="checkbox2">Keep me Logged In <br/>This is not recommended for shared computers.</label>
 </div>
 
 <br/><div class="form-check">
  <input class=  "form-check-input  check-boxes" type="checkbox" id="checkbox" checked={this.state.checkedTrue3} onChange={() => this.onchangeCheck("check3")} />
  <label class="form-check-label checkbox-label" for="checkbox3">Your use of SNIPE RESEARCH indicates your acceptance of <a href='/' class='terms-condition'> Terms & Conditions of Use.</a><span style={{color:'red'}}>*</span></label>
  {this.state.checkboxRequired ? <div className="text-danger">This field is Required</div> : " "}
 </div>
 

 
 <input type="submit" value="Register" class="btn btn-danger enter-button" onClick={this.scrollToTop} />

 <h4 style={{color:'white'}}>Have an account?</h4> 
<Link to="/Login">      
  <button className="btn btn-danger enter-button" variant="contained" href="#">Log In</button><br/>
</Link>     

<div class="btn-group btn_group" role="group" aria-label="Basic">

<button type="button" class="btn btn-link btn_link">Privacy Policy </button>
<button type="button" class="btn btn-link btn_link">Contact Us</button>
 </div>
    <p className='last-para'>You may unsubscribe at any time by clicking on the provided link on any marketing message.</p>
</form>
</div>
   
    );
  }
}

export default Register;