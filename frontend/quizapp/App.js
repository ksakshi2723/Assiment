import React from 'react';
import Home from './component/Home';
import Responsive from './component/Responsive';
import Contact from './component/Contact';
import About from './component/About';
import Careers from './component/Careers';
import Appdev from './component/Appdev';
import Webdev from './component/Webdev';
import Digital from './component/Digital';
import Cms from './component/Cms';
import Ecommerce from './component/Ecommerce';
import Navbar from './component/Navbar';
import { Route,Switch ,Redirect} from 'react-router-dom';
function App(){
    return(
        <>
        <Navbar/>
        <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/about" component={About}></Route>
            <Route exact path="/career" component={Careers}></Route>
            <Route exact path="/contact" component={Contact}></Route>
            <Redirect to="/"/>
            </Switch>
     {/*<Home/>*/}
        {/*<Contact/>*/}
       {/*<About/>*/}
       {/*<Careers/>*/}
      {/* <Appdev/>*/}
      { /*<Webdev/>*/}
      {/*<Digital/>*/}
      {/*<Cms/>*/}
     {/*<Responsive/>*/}
     {/*<Ecommerce/>*/}
        </>
    )
}
export default App;