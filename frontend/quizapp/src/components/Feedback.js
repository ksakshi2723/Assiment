import React, { Component } from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon } from 'mdbreact';
import "../App.css"

export default class Feedback extends Component {
   constructor(){
     super()
     this.state={
       Name:"",
       username:"",
       email:"",
       subject:"",
       message:"",
     }
   }
   handleChange=(e)=>{
    
    this.setState({
        [e.target.name]: e.target.value
       
    })}

    handleSubmit=(e)=>{
     
      e.preventDefault()
      console.log(this.state,"data")
       
      fetch('http://127.0.0.1:8000/feedback/',{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({items:this.state})
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
    ).then(this.props.history.push({pathname:"/thankyou",username:this.state.username }))
    .catch(error=> console.error(error ))
      
    }

    componentDidMount(){
      localStorage.clear();

      const {username} =this.props.location
      this.setState({username:username})
      
      // document.addEventListener('contextmenu', (e) => {
      //   e.preventDefault();
      // });
    }
  
  render() {
        return (
            <div className="center mt-5 content-center pr-5" style={{backgroundColor:"lightskyblue",height:"100vh",width:"100%",borderRadius:"10px",color:"white"}}>
                <MDBContainer>
  <MDBRow>
    <MDBCol md="6">
      <form onSubmit={this.handleSubmit}>
        <p className="h4 text-center mb-4 mt-5"><h1>Write to us</h1></p>
        <label htmlFor="defaultFormContactNameEx" className="grey-text">
          Your name
        </label>
        <input type="text" id="defaultFormContactNameEx" className="form-control" name="Name" value={this.state.Name} onChange={this.handleChange} />
        <br />
        <label htmlFor="defaultFormContactEmailEx" className="grey-text">
          Your email
        </label>
        <input type="email" id="defaultFormContactEmailEx" className="form-control" name="email" value={this.state.email} onChange={this.handleChange}/>
        <br />
        <label htmlFor="defaultFormContactSubjectEx" className="grey-text">
          Subject
        </label>
        <input type="text" id="defaultFormContactSubjectEx" className="form-control" name="subject" value={this.state.subject} onChange={this.handleChange} />
        <br />
        <label htmlFor="defaultFormContactMessageEx" className="grey-text">
          Your message
        </label>
        <textarea type="text" id="defaultFormContactMessageEx" className="form-control" rows="3" name="message" value={this.state.message} onChange={this.handleChange}/>
        <div className="text-center mt-4">
                  <MDBBtn className="btn btn-info" outline type="submit">
                    Submit
                    <MDBIcon far icon="paper-plane" className="ml-2" />
                  </MDBBtn>
                </div>
              </form>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
            </div>
        )
    }
}
