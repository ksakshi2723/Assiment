import React from 'react';
import Navbar from './Navbar';
import img from '../Images/app.jpg';
import img2 from '../Images/bgimag2.jpeg';
import img3 from '../Images/right.jpg';
import Footer from "./Footer";
const Appdev=()=>{
    return(
        <>
        <Navbar/>
        
        <img src={img} className="w-100 " height='300px;'/>
        <div className='row  my-5'>
           < div className='col w-100'>
        <img src={img2} className='earth'/>
              </div>
<div className='col'>
   <h1>Mobile Applications</h1>
   <p className='paraa my-4'>Aishani Technology is a leading-edge mobile application development company with over 50 successful projects under its belt. We have created mobile apps of any complexity: from award-winning B2C applications to heavy enterprise-grade mobile solutions that automate mission-critical business processes.<br/>Aishani Technology talent pool of mobile app developers includes highly-skilled analysts, UX experts and certified software engineers who are well-versed in building apps for all the major platforms — whether it’s iOS, Android, or both. Apps can be developed natively, or by using cross-platform frameworks like React Native and platforms such as PhoneGap or Xamarin</p>
</div>
</div>

<div className='row mx-4 my-4'>
<div className='col'>
   <h1>How a Successful Mobile App Development Project Works</h1>
   <p className='paraa'><ul><li>Rapid results
</li><li>100% transparency</li><li>
Better Quality</li><li>More business value</li><li>solid Guarantee
    
    </li></ul></p>
</div>
           < div className='col '>
        <img src={img3} className='rights'/>
</div>

</div>
   <Footer/>     
       
      
        
        </>
    )
}
export default Appdev;