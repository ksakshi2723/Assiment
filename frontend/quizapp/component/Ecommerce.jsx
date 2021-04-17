import React from 'react';
import Navbar from './Navbar';
import img from '../Images/eCommerce-header.jpg';
import img2 from '../Images/ecommercee.png';
const Ecommerce=()=>{
    return(
        <>
        <Navbar/>
         <img src={img} className="w-100 " height='310px;'/>
         <div class="about-background ">
        <img src={img2} className="w-100" height='1600px;'/>
       
       <div class="top-left w-50 mx-5">
           <h1 className='heading my-4'>E-commerce with Aishani Technology</h1>
           <p className='para'>
           Aishani Technology partners with clients and help create a successful and robust online business. Our dedicated team of professional developers provides solution to every ecommerce problems and help sell products online. We at Aishani Technology value the importance of eCommerce based websites and online selling of products for growth of business across geographies, delivering customized web and mobile commerce solutions.	
<br/>Our services range from online retail consulting to intuitive UI designing, custom app development, integration with eCommerce payment gateway, interactive marketing, and ePayment services, etc.

</p>

       </div>
       <div className="center-img w-100">
            <h1 className='head my-4 text-center'>Why eCommerce with Aishani Technology?</h1>
            <div className='row mx-5 '>
                
                    <p className='para2'><ul>
                        <li> Personalized and meaningful Omni-channel shopping experience across web and mobile channels</li>
<li> Delivering brands by maintaining full creative control over websites</li>
<li>Progressive experience with mobile and web optimized responsive designs
</li><li>Expanding online boundaries by letting businesses sell multiple brands, currency, languages, etc.
</li><li>Adaptable and scalable services to unique buying and selling requirements as clients demand
</li><li>Services for small, large, individual (B2C) or business (B2B)</li>
</ul></p>
                
<div className="botom ">
          <div className="m-4">
          <h1 className='heading5 text-center text-white'>What We Are</h1>
           <p className='para3'>A regular computer maintenance service is probably the simplest and most effective way to keep your PC running in top condition. Everyone worries and rightfully so about viruses. Trojan horses, spyware and other resets yet the majority of users experience no significant problems with these issues. But every computer, everywhere, is at risk from the number one their PC’s delicate electronics dust. Most users never think about cleaning their PCs, and neither do our clients, because we make sure all their machines are cleaned and property configured according to a regular maintenance and cleaning schedule. Our computer maintenance service takes care of the big stuff as well as the small stuff, so your system stays in peak condition with productivity. Computer AMC  We are known as the best service providing AMC (Annual Maintenance Contract). Our company is providing AMC services for computers to our valued clients at very reasonable price. We undertake Annual Maintenance Contract for computer as well as for laptops. Using latest and advanced software, we offer computer solution of computers on the basis of annual contract. Our experts assure to maintain the functionality of computer to ensure smooth performance. Backed by a team of highly qualified professionates, we provide Annual Maintenance Contracts for all computer related trouble from hardware to software.  </p>
      
          </div>
          </div>      
</div>
</div>

      
      
      
        
        </div>
        </>
    )
}
export default Ecommerce;