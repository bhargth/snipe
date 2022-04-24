import { useRef } from 'react';
import './studentform.css';



const AdminsupportForm = (props) => {
  const fnameInputRef = useRef();
  const lnameInputRef = useRef();
  const emailInputRef = useRef();
  const institutionInputRef = useRef();
  const titleoptionalInputRef = useRef();
  const ipupdateInputRef = useRef();
  const USInputRef = useRef();
  const RAAInputRef = useRef();
  const RAInputRef = useRef();
  const brandingInputRef = useRef();
  const otherInputRef = useRef();
  const textInputRef = useRef();

  function submitFormHandler(event) {
    event.preventDefault();

    const enteredfname = fnameInputRef.current.value;
    const enteredlname = lnameInputRef.current.value;
    const enteredemail = emailInputRef.current.value;
    const enteredinstitution = institutionInputRef.current.value;
    const enteredtitleoptional = titleoptionalInputRef.current.value;
    const enteredipupdate = ipupdateInputRef.current.value;
    const enteredUS = USInputRef.current.value;
    const enteredRAA = RAAInputRef.current.value;
    const enteredRA = RAInputRef.current.value;
    const enteredbranding = brandingInputRef.current.value;
    const enteredother = otherInputRef.current.value;
    const enteredText = textInputRef.current.value;

    // optional: Could validate here

    props.onAddQuote({ fname: enteredfname, lname: enteredlname, email: enteredemail, institution: enteredinstitution, titleoptional: enteredtitleoptional, ipupdate: enteredipupdate, US: enteredUS, RAA: enteredRAA, other: enteredother, RA: enteredRA, branding: enteredbranding, text: enteredText });
  }

  return (
        <form className='formclass'  onSubmit={submitFormHandler}>
          <div>
              <h1 className='formclasstitle'> Contact US</h1>
          </div>
      <div className='formclass__name' >
          <label htmlFor='fname'>FIRST NAME</label><br></br>
          <input type='text' id='fname' ref={fnameInputRef} />
        </div>
        <div className='formclass__name'>
          <label htmlFor='lname'>LAST NAME</label><br></br>
          <input type='text' id='lname' ref={lnameInputRef} />
        </div>
        <div className='formclass__name'>
          <label htmlFor='email'>EMAIL</label><br></br>
          <input type='text' id='email' ref={emailInputRef} />
        </div>
        <div className='formclass__name'>
          <label htmlFor='institution'>INSTITUTION</label><br></br>
          <input type='text' id='institution' ref={institutionInputRef} />
        </div>
        <div className='formclass__name'>
          <label htmlFor='institution'>TITLE (OPTIONAL)</label><br></br>
          <input type='text' id='titleoptional' ref={titleoptionalInputRef} />
        </div>
        <div className='formclass__topics'>
            <h3 className='formclass__topics-title'>TOPICS</h3>
            <div className='formclass__radiobtn'>
            <input type='radio' id='ipupdate' ref={ipupdateInputRef} />
            <label htmlFor='ipupdate'>IP Update</label><br></br>
            <input type='radio' id='US' ref={USInputRef} />
            <label htmlFor='US'>Usage Statistics</label><br></br>
            <input type='radio' id='RAA' ref={RAAInputRef} />
            <label htmlFor='RAA'>Request Admin Account</label><br></br>
            <input type='radio' id='RA' ref={RAInputRef} />
            <label htmlFor='RA'>Remote Access</label><br></br>
            <input type='radio' id='branding' ref={brandingInputRef} />
            <label htmlFor='branding'>Branding</label><br></br>
            <input type='radio' id='other' ref={otherInputRef} />
            <label htmlFor='findingcontent'>Other</label><br></br>
            </div>
          </div>
        <div className='formclass__name'>
          <label className='formclass__text' htmlFor='text'>DESCRIBE YOUR ISSUE</label><br></br>
          <textarea id='text' rows='8' ref={textInputRef}></textarea>
        </div>
        <div >
          <button className='formclass__btn'>SUBMIT</button>
        </div>
      </form>
  );
};

export default AdminsupportForm;