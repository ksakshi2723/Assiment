// import SearchIcon from '@material-ui/icons/Search';
import {NavLink} from "react-router-dom";
import logo from "../Images/Aishani Logo.png";
const Navbar=()=>{
    return(
        <>
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-3">
  <div className="container-fluid">
  <img src={logo} alt="Aishani" height="35px"/>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink 
          className="nav-link active"
           aria-current="page" 
           to="/">
             Home
             </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
           className="nav-link active" 
           aria-current="page"
            to="/about">About Us</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/">Products</NavLink>
        </li>
        <li className="nav-item">
          <NavLink 
          className="nav-link active"
           aria-current="page"
            to="/career">
              Careers</NavLink>
        </li>
        
        <li className="nav-item dropdown">
          <NavLink className="nav-link active dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Services
          </NavLink>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><NavLink className="dropdown-item" to="#">Digital Marketing</NavLink></li>
            <li><NavLink className="dropdown-item" to="#">Mobile Application</NavLink></li>
            <li><NavLink className="dropdown-item" to="#"></NavLink>Web Application</li>
            <li><NavLink className="dropdown-item" to="#">Responsive Website</NavLink></li>
            <li><NavLink className="dropdown-item" to="#">Web Hosting</NavLink></li>
          <li><NavLink className="dropdown-item" to="#">IT Infrastructure</NavLink></li>
              <li><NavLink className="dropdown-item" to="#">Domain Registration</NavLink></li>
              
            <li><NavLink className="dropdown-item" to="#"></NavLink>E-Commerce Solution</li>
            <li><NavLink className="dropdown-item" to="#"></NavLink>CMS Web Development</li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <NavLink className="nav-link active dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Our Partners
          </NavLink>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><NavLink className="dropdown-item" to="#">Client</NavLink></li>
            <li><NavLink className="dropdown-item" to="#">Distributor</NavLink></li>
            <li><hr className="dropdown-divider"/></li>
            <li><NavLink className="dropdown-item" to="#">Something else here</NavLink></li>
          </ul>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/contact">Contact Us</NavLink>
        </li>
      </ul>
      
{/*<NavLink className="text-white" to="#"><SearchIcon/></NavLink>*/}
      
    </div>
  </div>
</nav>


        </>
    )
}
export default Navbar;