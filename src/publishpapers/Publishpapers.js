import React,{useState} from 'react'
import "../../src/publishpapers/Publishpapers.scss";
import { Button, Form , Checkbox} from 'semantic-ui-react';






const Publishpapers = () => {
   

    const [Authorname, setAuthorName] = useState("");
    const [title, setTitle] = useState("");
    const [selectCategory , setSelectCategory] = useState("");
    const [email, setEmail] = useState("");
    const [country, setCountry] = useState("");
    const [image, setImage] = useState("");
    const [textarea, setTextarea] = useState("");
    const [files, setFiles] = useState([]);
    const [checkbox, setCheckbox] = useState(false);
    


    const postData = (e) => {
        e.preventDefault();
        console.log({Authorname,title,selectCategory,email,country,textarea,files,checkbox})

        let  data={Authorname,title,selectCategory,email,country,image,textarea,files,checkbox}
         fetch("http://localhost:5000/publishpapers",{
          method:"POST",
          headers:{
            'Accept':'application/json',
            'content-type':'application/json'
          },
          body:JSON.stringify(data)

        }).then((result)=>{
          //console.log("result", result);
          result.json().then((resp)=>{
            console.log("resp", resp)

          })
        })
        
      }

    return (
     
        <div>
       
         <div className="main" >
        
         <h2> Submit Your Paper here</h2>
  
           <Form  onSubmit={postData} className="create-form" >
    <Form.Field>
      <label>Author Name</label>
      <input  name= 'Authorname' value={Authorname} required onChange={(e)=> setAuthorName(e.target.value)} 
      placeholder=' Enter Name' />
    </Form.Field>
    <Form.Field>
      <label>Title of the paper</label>
      <input  name= 'title' value={title} onChange={(e)=> setTitle(e.target.value)} 
      placeholder=' enter Title' />
    </Form.Field>
    
    <Form.Field>
    <label>select Category</label>
    <select className="ui dropdown"  value={selectCategory} onChange={(e)=>{
        const  selectedCategory = e.target.value;
        setSelectCategory(selectedCategory);

    }} >
  <option value="select Category"> select Category </option>
  <option value="Engineering">Engineering</option>
  <option value="Technology">Technology</option>
  <option value="Science">Science</option>
  <option value="arts">arts</option>
  <option value="Management">Management</option>
  <option value="Others">Others</option>
</select>
{selectCategory}
</Form.Field>
    <Form.Field>
      <label>Email</label>
      <input  name= 'email'  value={email} onChange={(e)=> setEmail(e.target.value)} 
      placeholder='Enter Email' />
    </Form.Field>
    <Form.Field>
      <label>Country</label>
      <input  name= 'country'  value={country} onChange={(e)=> setCountry(e.target.value)} 
      placeholder='Enter Country'/>
       </Form.Field>
       <Form.Field>
    <label>select image to display</label>
    <input type = "file" name='image'  onChange={(e)=> setImage(e.target.files)}/>
    </Form.Field>
       <Form.Field>
      <label>description</label>
      <textarea value={textarea}  onChange={(e)=> setTextarea(e.target.value)} 
      placeholder=' add description about the paper' />
    </Form.Field>
    <Form.Field>
    <label>upload pdf file</label>
    <input type = "file" name='pdf'  onChange={(e)=> setFiles(e.target.files[0])}/>
    </Form.Field>
    <Form.Field>
    <Checkbox label='I agree to the Terms and Conditions'onChange={(e) => setCheckbox(!checkbox)}/>
    </Form.Field>
       
    <Button className ="ui green button" type='submit' >Submit</Button>
    </Form>
    </div>
        </div>
        
    )
}

export default Publishpapers
