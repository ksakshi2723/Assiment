import React from 'react';
import Navbar from './Navbar';
import img from '../Images/career2.jpg';
const Careers=()=>{
    return(
        <>
     
        
        <img src={img} className="w-100" height='340px;'/>
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
                <div class="col-md-6">
                    <label for="inputEmail4" class="form-label">Email</label>
                    <input type="email" class="form-control" id="inputEmail4"/>
                </div>
                <div class="col-md-6">
                <label for="inputEmail4" class="form-label">Resume Upload</label>
                <input type="file" />

                  
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
                    <h1 className='text-center text-danger text-capitalize my-5'>Available Jobs:</h1>
                   
                
                    <div className='row'>
                        <div className='col'>
                  </div>
    </div>
    
    
                </div>
            </div>
        </div>
        </>
    )
}
export default Careers;