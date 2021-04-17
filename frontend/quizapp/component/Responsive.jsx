import React from 'react';
import Navbar from './Navbar';
import img from '../Images/responsive2.jpg';
import img2 from '../Images/responsive3.jpg';
import img3 from '../Images/responsive4.jpg';
import Footer from "./Footer";
const Responsive=()=>{
    return(
        <>
      
          <img src={img} className="w-100 " height='330px;'/>
          <div className='row  my-5'>
           < div className='col w-100'>
        <img src={img2} className='earth'/>
              </div>
<div className='col'>
   <h1>Responsive Websites</h1>
   <p className='paraa my-4'>The web world today is not just limited to desktop. People like to multi task and do their web browsing on mobile devices that they can carry around with them. In such a scenario it is important that your site functions just as effortlessly on mobile devices as on PCs. And the way to ensure a smooth compatibility from device to device is Responsive Web Design.<br/>The team ensures that the website responds to the fluctuating demand with high scalability and adapts to changes due to its responsive nature. Whether you want to create a new website from scratch or upgrade a legacy application, we guarantee creation of an online presence that helps you succeed in the modern age and win more customers.</p>
</div>
</div>

<div className='row mx-4 my-4'>
<div className='col'>
   <h1>Why Responsive Website Development?</h1>
   <p className='paraa'>The company has a team of experienced professionals who engineer phenomenal responsive website designs leveraging CSS media queries and following the best-in-class design practices to guarantee that the website delivers an outstanding UI and UX on every screen size. </p>
</div>
           < div className='col '>
        <img src={img3} className='rights'/>
</div>

</div>
   <Footer/>     
       
      
        </>
    )
}
export default Responsive;