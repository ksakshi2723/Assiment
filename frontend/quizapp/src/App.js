import './App.css';
import Question_Display from './components/Question_Display';
import Login from './components/Login';
import Section from './components/Section';
import {Route,BrowserRouter as Router,Switch, Redirect} from "react-router-dom";
import Feedback from './components/Feedback';
import Thankyou from './components/Thankyou';


function App() {
  return (
    <div>
     <Router>
       <Switch>
         <Route exact path="/" component={Login}></Route>
         <Route path="/section" component={Section}></Route>
         <Route path="/ques" component={Question_Display}></Route>
         <Route path="/feedback" component={Feedback}></Route>
         <Route path="/thankyou" component={Thankyou}></Route>
        
       </Switch>
     </Router>
    </div>
      );
}

export default App;
