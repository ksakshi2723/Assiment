import React, { Component} from 'react'
import '../App.css';
import Section from './Section';

export default class Login extends Component {

constructor(){
    super()
    this.state={
        username:"",
        password:"",
        error: null,
     
        
    }
 
   
}
handleChange=(e)=>{
    this.setState({
        [e.target.name]: e.target.value
       
    })}

    handleSubmit=(e)=>{ 
     
        e.preventDefault()
       
      fetch('http://127.0.0.1:8000/quizer/',{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify(this.state)
    })
    .then(res=> res.json())
    .then((result)=>{
      console.log(result,"result")
     
    },
      (error) => {
          this.setState({
          error
          });
        }
    ).then(this.props.history.push({pathname:"/section",username:this.state.username }))
    .catch(error=> console.error(error ))
      
    }
    
 componentDidMount(){
  // localStorage.clear();
 }
    

     render() {
      
        return (
          <>
         
          <div className="login">
          <div className="login-header mt-4">
          <h1><b>Login</b></h1>
           </div>
           <form onSubmit={this.handleSubmit}>
          <div className="login-form">
          <h3>Username:</h3>
          <input type="text" name="username" value={this.state.username} placeholder="Username" onChange={this.handleChange}/><br/>
          <h3>Password:</h3>
          <input type="password" name="password" value={this.state.password} placeholder="Password" onChange={this.handleChange}/>
          <br/>
          <input className="btn btn-success mt-5 ml-3 mr-5" type="submit" ></input>
          <br/>
         
          
        </div>
        </form>
      </div>
      </>
        );
      }
    }