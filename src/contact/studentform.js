import { useRef } from 'react';
import './studentform.css';



const StudentForm = (props) => {
  const fnameInputRef = useRef();
  const lnameInputRef = useRef();
  const emailInputRef = useRef();
  const institutionInputRef = useRef();
  const findingcontentInputRef = useRef();
  const PAInputRef = useRef();
  const RPInputRef = useRef();
  const otherInputRef = useRef();
  const textInputRef = useRef();

  function submitFormHandler(event) {
    event.preventDefault();

    const enteredfname = fnameInputRef.current.value;
    const enteredlname = lnameInputRef.current.value;
    const enteredemail = emailInputRef.current.value;
    const enteredinstitution = institutionInputRef.current.value;
    const enteredfindingcontent = findingcontentInputRef.current.value;
    const enteredPA = PAInputRef.current.value;
    const enteredRP = RPInputRef.current.value;
    const enteredother = otherInputRef.current.value;
    const enteredText = textInputRef.current.value;

    // optional: Could validate here

    props.onAddQuote({ fname: enteredfname, lname: enteredlname, email: enteredemail, institution: enteredinstitution, findingcontent: enteredfindingcontent, PA: enteredPA, RP: enteredRP, other: enteredother, text: enteredText });
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
          <input type='text' id='email' ref={lnameInputRef} />
        </div>
        <div className='formclass__name'>
          <label htmlFor='institution'>INSTITUTION</label><br></br>
          <input type='text' id='institution' ref={lnameInputRef} />
        </div>
        <div className='formclass__topics'>
            <h3 className='formclass__topics'>TOPICS</h3>
            <div className='formclass__radiobtn'>
            <input type='radio' id='findingcontent' ref={findingcontentInputRef} />
            <label htmlFor='findingcontent'>FindingContent</label><br></br>
            <input type='radio' id='PA' ref={PAInputRef} />
            <label htmlFor='PA'>Personal Account</label><br></br>
            <input type='radio' id='RP' ref={RPInputRef} />
            <label htmlFor='findingcontent'>Report Problem</label><br></br>
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

export default StudentForm;