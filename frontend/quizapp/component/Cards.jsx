import React from 'react';
import {NavLink} from "react-router-dom";
import card1 from "../Images/digital.svg";
import card2 from "../Images/AppDevelopment.svg";
import card3 from "../Images/webdevelopment.svg";
import card4 from "../Images/responsive.svg";
import card5 from "../Images/web-hosting.svg";
import card6 from "../Images/It infrastructure.svg";
import card7 from "../Images/registration.svg";
import card8 from "../Images/e-learning.svg";
import card9 from "../Images/cms.svg";




const Cards=()=>{
    return(
        <>
        <h1 className='text-center text-danger text-capitalize my-5'>Core Services</h1>
      <div className="container">
  <div className="row">
    <div className="col-sm">
    <NavLink to="#">
     <div className="card"  >
  <img src={card1} className="card-img-top" height='75px' alt="..." />
  
  <div className="card-body">
    <h5 className="card-title text-center">Digital Marketing</h5>
    <p className="card-text">We work with large number of clients from different industries.</p>
    
  </div>
</div>
</NavLink>
    </div>
    <div className="col-sm">
    <NavLink to="#">
     <div className="card">
  <img src={card2} className="card-img-top" height='75px' alt="..." />
  <div className="card-body">
    <h5 className="card-title text-center">Mobile Application</h5>
    <p className="card-text">Start building mobile applications gives You lot of experience.</p>
    
  </div>
</div></NavLink>
    </div>
    <div className="col-sm">
    <NavLink to="#">
     <div className="card" >
       
  <img src={card3} className="card-img-top" height='75px'alt="..."/>
  <div className="card-body">
    <h5 className="card-title text-center">Web Applications</h5>
    <p className="card-text">Start designing and deploy websites with different brands.</p>
    
  </div>
</div>
</NavLink>
    </div>
  </div>
</div>
<br/> 
<div className="container" >
  <div className="row">
    <div className="col-sm">
    <NavLink to="#">
     <div className="card" >
  <img src={card4} className="card-img-top" height='50px' alt="..."/>
  <div className="card-body">
    <h5 className="card-title text-center">Responsive Website</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    
  </div>
</div>
</NavLink>
    </div>
    <div className="col-sm">
    <NavLink to="#">
     <div className="card">
  <img src={card5} className="card-img-top" height='50px' alt="..."/>
  <div className="card-body">
    <h5 className="card-title text-center">Web Hosting</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    
  </div>
</div></NavLink>
    </div>
    <div className="col-sm">
    <NavLink to="#">
     <div className="card" >
  <img src={card6} className="card-img-top" height='50px' alt="..."/>
  <div className="card-body">
    <h5 className="card-title text-center">IT Infrastructure</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    
  </div>
</div></NavLink>
    </div>
    </div>
</div><br/>
<div className="container mb-5">
  <div className="row">
    <div className="col-sm">
   <NavLink to="#">
   <div className="card"  >
  <img src={card7} className="card-img-top" height='75px' alt="..." />
  <div className="card-body">
    <h5 className="card-title text-center">Domain Registration</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    
  </div>
</div>
   </NavLink>
    </div>
    <div className="col-sm">
    <NavLink to="#">
     <div className="card">
  <img src={card8} className="card-img-top" height='75px' alt="..." />
  <div className="card-body">
    <h5 className="card-title text-center">E-Commerce Solution</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    
  </div>
</div></NavLink>
    </div>
    <div className="col-sm">
    <NavLink to="#">
     <div className="card">
  <img src={card9} className="card-img-top" height='75px' alt="..." />
  <div className="card-body">
    <h5 className="card-title text-center">CMS Web Development</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    
  </div>
</div>
</NavLink>
    </div></div></div>


        </>
    )
}
export default Cards;
