import React, { useEffect,useState } from 'react';
import "../Home/Items.scss"
import image2 from "../../src/images/image2.jpg"
import {Link} from "react-router-dom";


const Items = () => {

  const [data,setData] = useState([]);

  useEffect(()=>{
    fetch("http://localhost:5000/Publishpapers").then((result)=>{
    result.json().then((resp)=>{
    //console.log("result",result)
    setData(resp)
})
})
},[]);
  console.log(data);

    return (
      <>
      <div className="card1 bg-success text-black mb-4" >
<div className="row g-0">
  <div className="col-md-4">
    <img src={image2} className="img-fluid rounded-start" alt="..."/>
  </div>
  <div className="col-md-6">
    <div className="card-body">
      <h1 className="card-text text-white">Explore high-quality research pdfs and documents from around the world!.</h1>
      <h3 className="card-text">"Serach by Title and Category"</h3>
      <div className='search'>
      <Link to ="/Search">
      <div className='btn btn-dark text-success'><h5>search by category </h5></div>
      </Link>
      </div>
    </div>
  </div>
</div>
</div> 
  <div className='card2'>
   <div className='h1'><h1>Explore Research papers</h1></div>
   <div className='row'>
   <div className="row gy-3 my-3">
   {data.map((item)=>
     <div className="col-sm-6 col-md-4 col-lg-3">
   
     <div className="card border-dark" >
    
  <img src={item.image} className="card-img-top" alt="book"/>
  <div className="card-body">
    <h5 className="card-title ">{item.title}</h5>
    <p className="card-textarea">{item.textarea}</p>
    <p className='card-category'>category:{item.selectCategory}</p>
    <div className='view-btn'>
            <div className='btn btn-success'>view more</div>
    </div>
  </div>
</div>
     </div>
     )}
     </div>
     </div>
     </div>
   </>
    
    )
}

export default Items
