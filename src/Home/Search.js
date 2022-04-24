import React, { useEffect,useState } from 'react';
import "./Search.scss";

const Items = () => {

  const [data ,setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(()=>{
    fetch("http://localhost:5000/Publishpapers")
    .then((response)=> response.json())
    .then((json)=>setData(json)); 
  },[]);
 

    return (
   <>
   <div className='container-md bg-success'>
    <input type="text"  className='input text-white' placeholder="Search by entering category names" value={searchTerm} onChange={(e)=> setSearchTerm(e.target.value)}/>
    <h3 className='h3'>Search by entering these category : Engineering,Technology,Science,arts,Management,Others</h3>
  </div>
  
        <div className="card3">
   <div className="row " >
   <div className="row gy-3 my-3">
   {
  data
    .filter((val) => {
      if (searchTerm === "") {
        return  val.selectCategory.toLowerCase().includes(searchTerm.toLowerCase());
      } else if (
        val.selectCategory.toLowerCase().includes(searchTerm.toLowerCase())
       
      ) {
        return val;
      }
    })
    .map((post, key) => {
    return(
        
     <div className="col-sm-6 col-md-4 col-lg-3">
   
     <div className="card border-dark" key ={key}>
    
  <img src={post.image} className="card-img-top" alt="book"/>
  <div className="card-body">
    <h5 className="card-title ">{post.title}</h5>
    <p className="card-textarea">{post.textarea}</p>
    <p className='card-category'>category:{post.selectCategory}</p>
    <div className='view-btn'>
            <div className='btn btn-success'>view more</div>
    </div>
  </div>
  </div>
  </div>
  );
})
   }
  </div>
  </div>
  </div>
  
  
  
   
   </>
    )
    }
    
export default Items;
