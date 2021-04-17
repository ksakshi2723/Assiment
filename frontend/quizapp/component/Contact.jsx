import React from 'react';
import Navbar from './Navbar';
import Footer from "./Footer";
import img from '../Images/contact_banner.jpg';
import add from '../Images/maps-and-flags.svg';
import email from '../Images/email.svg';
import call from '../Images/call.svg';
const Contact=()=>{
    return(
        <>
       
        <img src={img} className="w-100" height='300px;'/>

        <div className='container-fluid mb-5'>
            <div className='row'>
                <div className='col'>
                
                <h1 className='text-center text-danger text-capitalize my-5'>Send US</h1>
            <form class="row g-3">
                <div class="col-md-6">
                    <label for="inputEmail4" class="form-label">Email</label>
                    <input type="email" class="form-control" id="inputEmail4"/>
                </div>
                <div class="col-md-6">
                    <label for="inputPassword4" class="form-label">Password</label>
                    <input type="password" class="form-control" id="inputPassword4"/>
                </div> 
                <div class="col-md-6">
                    <label for="inputEmail4" class="form-label">Email</label>
                    <input type="email" class="form-control" id="inputEmail4"/>
                </div>
                <div class="col-md-6">
                    <label for="inputPassword4" class="form-label">Password</label>
                    <input type="password" class="form-control" id="inputPassword4"/>
                </div> 
                <div class="col-md-12">
                    <label for="inputPassword4" class="form-label">Password</label>
                    <input type="password" class="form-control" id="inputPassword4"/>
                </div> 
                <div class="col-md-12">
                    <label for="inputPassword4" class="form-label">Password</label>
                    <input type="password" class="form-control" id="inputPassword4"/>
                </div>
                <div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
<div class="col-md-12  ">
    <button class="btn btn-primary w-100" type="submit">Submit form</button>
  </div>
            </form>
  


                </div>
                    <div className='col'>
                    <h1 className='text-center text-danger text-capitalize my-5'>We Are Here</h1>
                   
                 <div className='google-map my-4 '>
                            
                          <p><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.492782192029!2d77.61544631482099!3d12.876003490918643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDUyJzMzLjYiTiA3N8KwMzcnMDMuNSJF!5e0!3m2!1sen!2sin!4v1610180437163!5m2!1sen!2sin" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0" width="600" height="250" ></iframe></p>
                    </div>
                    <div className='row'>
                        <div className='col'>
                    <div class="address d-flex " >
                    <img src={add}  height='25px' /> <p><strong>Address:</strong>357/4,2nd Floor,<br/>Opp.DLF New Town,<br/>Akshyanagar,Bangluru</p>
                    
    </div></div>
    <div className='col'>
        <div class='email d-flex'>
    <img src={email}  height='25px' /> <p><strong>Email:</strong>Aishanitechnology@gmail.com</p>
    </div>
    </div></div>
    <div className='col'>
                    <div class="mobile d-flex " >
                      
                    <img src={call}  height='25px' />
                    <p><strong>Mobile:</strong>9304682015</p></div></div>
    
                </div>
            </div>
        </div>
        <Footer/>
        </>
    )
}
export default Contact;