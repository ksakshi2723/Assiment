import React from 'react';
import img from '../Images/aboutus.jpg';
import img3 from '../Images/bgimage.jpg';
import Footer from "./Footer";
const About=()=>{
    return(
        <>
    
      
        <img src={img} className="w-100" height='330px;'/>
        
        <div class="about-background ">
        <img src={img3} className="w-100" height='1600px;'/>
       
       <div class="top-left w-50 mx-5">
           <h1 className='heading my-4'>About US</h1>
           <p className='para'>AISHANI TECHNOLOGY is an IT company with company with its headquarters in Bangalore, India, the heart of the Silicon City. Established in 2011 and incorporated in 2012, Aishani Technology has been the technology solution provider for our clients who rely on us when they need business technology assessments, system integration, network infrastructure, e-commerce solutions, business intelligence and 24/7 technical support.
	
	We are committed to providing complete client satisfaction and also provide a reliable performance and services. We have a broad expertise across the major technologies and platforms.

</p>
<p class="text-italic">" We place top importance on <strong>customer focus </strong>seeking to maximize customer satisfaction by
approaching things from our customers' perspective and anticipating their needs."</p>
       </div>
       <div className="center-img w-100">
            <h1 className='head my-4 text-center'>Vision & Mission</h1>
            <div className='row mx-5 '>
                <div className='col'>
                    <p className='para2'><ul>
                        <li> We strive to become a global software and IT Infrastructure company.</li>
<li> We are passionate in helping businesses through innovative technologies to reach and
maximize their business dreams.</li>
<li>To be the premier organization operating locally & internationality that provides the
complete range of IT services to all segments under one roof
</li>
</ul></p>
                </div>
                <div className='col text-white'>
                <p className='para2'><ul><li>It is through our passion and commitment to our clients that we develop software to face
real-world challenges.</li>
 <li>.It is our love for and dedication to what we do that enables us to
become a better company for ourselves, for our clients, our community and the world.
</li><li>To develop & deliver the most innovative products, manage customer experience, deliver
quality services that contribute to brand strength, establishes a competitive advantage and
enhances profitability.</li></ul></p>
</div>
</div>
</div>

      <div className="bottoms ">
          <div className="m-4">
          <h1 className='heading5 text-center text-white'>What We Are</h1>
           <p className='para3'>A regular computer maintenance service is probably the simplest and most effective way to keep your PC running in top condition. Everyone worries and rightfully so about viruses. Trojan horses, spyware and other resets yet the majority of users experience no significant problems with these issues. But every computer, everywhere, is at risk from the number one their PC’s delicate electronics dust. Most users never think about cleaning their PCs, and neither do our clients, because we make sure all their machines are cleaned and property configured according to a regular maintenance and cleaning schedule. Our computer maintenance service takes care of the big stuff as well as the small stuff, so your system stays in peak condition with productivity. Computer AMC  We are known as the best service providing AMC (Annual Maintenance Contract). Our company is providing AMC services for computers to our valued clients at very reasonable price. We undertake Annual Maintenance Contract for computer as well as for laptops. Using latest and advanced software, we offer computer solution of computers on the basis of annual contract. Our experts assure to maintain the functionality of computer to ensure smooth performance. Backed by a team of highly qualified professionates, we provide Annual Maintenance Contracts for all computer related trouble from hardware to software.  </p>
      
          </div>
          </div>
      
      
        
        </div>
        <Footer/>
        </>
    )
}
export default About;