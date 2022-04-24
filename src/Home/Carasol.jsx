import React from 'react'
import "./Carasol.scss";
import image6 from "../../src/images/image6.jpg";
import image7 from "../../src/images/image7.jpg";

const Carasol = () => {
    return (
        <div>
            <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">

    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>

    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    
  </div>
  <div className="carousel-inner ">

    <div className="carousel-item  active">

      <img src={image6} className="d-block w-100" alt="img"/>

      <div className="carousel-caption d-none d-md-block">

        <h5>Snipe Research</h5>
        <p>Some representative placeholder content for the first slide.</p>
        <div className='slider-btn'>
            <div className='btn btn-success'>Read Papers</div>
            <div className='btn btn-success'>Publish papers</div>
        </div>
      </div>
    </div>
    <div className="carousel-item">

      <img src={image7} className="d-block w-100" alt="img2"/>

      <div className="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
   
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
        </div>
    )
}

export default Carasol;