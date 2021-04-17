import React from 'react';
import slider1 from '../Images/Biometric Access Control System-02.jpg';
import slider2 from '../Images/CCTV Survelliance System.jpg';
import slider3 from '../Images/Server Room2.jpg';
const Crowsal=()=>{
    return(
        <>
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
  <ol className="carousel-indicators">
    <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"></li>
    <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></li>
    <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></li>
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={slider1} className="d-block w-100" height='330px' alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={slider2} className="d-block w-100" height='330px' alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={slider3} className="d-block w-100" height='330px' alt="..."/>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </a>
</div>
        </>
    )
}
export default Crowsal;