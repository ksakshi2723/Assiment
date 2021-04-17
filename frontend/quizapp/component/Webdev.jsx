import React from 'react';
import img from '../Images/webhead.png';
import img2 from '../Images/bgwebi.jpg';
import Footer from './Footer';
const Webdev=()=>{
    return(
        <>
        <img src={img} className="w-100 " height='350px;'/>
        <div class="web-background ">
        <img src={img2} className="w-100 " height='700px;'/></div>
        
      <div className="middle">
          <div className="m-4">
          <h1 className='heading5 text-center text-white'>Professional Web Application Development </h1>
           <p className='para3'>Aishani Technology is a web development company with over a decade of experience in building web applications. Our dedicated web app developers have successfully completed over 400 projects for a variety of industries and business domains, including e-Commerce, e-Learning, Analytics, Finance, Entertainment and more.<br/><br/>Through the years, we have perfected our delivery processes and workflows to cope with constantly changing requirements and tight deadlines that are the hallmark of complex web development projects. Our Scrum expertise was instrumental in successfully building new products for global brands, including Google, Discovery, and Vodafone.  
           <ul>
               <li>Custom Web Application Development</li> <li>Mobile-Friendly Website Development</li> <li>Cloud Development</li><li>Startup Software Development</li></ul></p>
          </div>
          </div>
          <Footer/>
        </>
    )
}
export default Webdev;