import React, { Component } from 'react'

import {Link} from 'react-router-dom'

export default class Section extends Component {
   
  constructor(){
    super()
    this.state = {
       sectionOne:"",
       sectionTwo:"",
       sectionThree:"",
       but1:false,
       but2:true,
       but3:true,
       username:"",


    };
   
  }

 componentDidMount(){
  // console.log(localStorage.getItem("username"),"priyanka")
   //JSON.parse
//var r=JSON.stringify(localStorage.getItem("username"))

  // this.setState({username:r[0].username})
  const { username } = this.props.location
  this.setState({username:username})
  
   
    // document.addEventListener('contextmenu', (e) => {
    //   e.preventDefault();
    // });
  
   

  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  fetch("http://127.0.0.1:8000/exam/", requestOptions)
    .then(response => response.text())
    .then(result => {
      var dta=JSON.parse(result)
      dta.map(item=>{
      //  console.log(item.section1.title,"section1")
        this.setState({sectionOne:item.section1,sectionTwo:item.section2,sectionThree:item.section3})


      })
    

    })
    .catch(error => console.log('error', error));
    const {id}=this.props.location
  
   if(id==1)
   {
    localStorage.clear();
     this.setState({but1:true,but2:false})
  
    }
   if(id==2)
  
     this.setState({but2:true,but3:false,but1:true})
    localStorage.clear()
  
 }
  
   
 handleOnClick=(e,items)=>{
      
   e.preventDefault();
   fetch('http://127.0.0.1:8000/easy_question/',{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({items, username:this.state.username})
     
     })
     .then(res=> res.json())
     .then((result)=>{
      // var x=atob(result);
      // const result1=JSON.parse(x);
      // console.log("http://127.0.0.1:8000"+result1.question_image);
     // console.log(typeof(JSON.parse(x)),"json");
      this.props.history.push({pathname:"/ques",ques:result.questions,optionOne:result.option1,optionTwo:result.option2,optionThree:result.option3,optionFour:result.option4,correctAns:result.correct_option,section:items,level:result.difficulty,sec_id:items.id,username:this.state.username})
      
     },
       (error) => {
           this.setState({
           error
           });
         }
     )
     .catch(error=> console.error(error ))
       
    
 
    
}
  render() {
    
    
    
        return (
            <div>
              
             <div className="login-header mt-4">
                <h1><b>SECTIONS</b></h1>
                 Hello {this.state.username}
             </div>
             <div className="row mt-5 text-center ">
                 <div className="col-sm-1"></div>
                 
                      <div className="col-sm-3 ml-4 mb-3" style={{width:"85%",height:"50vh" ,borderWidth:0.1,borderColor:"gray",borderRadius:10,boxShadow:" 0 2px 8px 0 rgba(0, 0, 0, 0.25)",backgroundColor:"#35f03e"}}>
                   <h1 className="mt-3 text-white"><b>{this.state.sectionOne.title}</b></h1>
                   <p className="mt-3 text-white">Each question carry one marks.</p>
                   <p className="mt-1 text-white">All questions are compulsory.</p>
                   
                   <button   onClick={(e) => this.handleOnClick(e,this.state.sectionOne)} className="btn btn-warning mt-5" disabled={this.state.but1}>Start</button>
                 </div>

                 <div className="col-sm-3 ml-4 mb-3" style={{width:"85%",height:"50vh" ,borderWidth:0.1,borderColor:"gray",borderRadius:10,boxShadow:" 0 2px 8px 0 rgba(0, 0, 0, 0.25)",backgroundColor:"#40a3f5"}}>
                 <h1 className="mt-3 text-white"><b>{this.state.sectionTwo.title}</b></h1>
                 <p className="mt-3 text-white">Each question carry one marks.</p>
                 <p className="mt-1 text-white">All questions are compulsory.</p>
                 <Link to="/ques"><button onClick={(e) => this.handleOnClick(e,this.state.sectionTwo)}   className="btn btn-warning mt-5" disabled={this.state.but2} >Start</button></Link>
               </div>

               <div className="col-sm-3 ml-4 mb-3" style={{width:"85%",height:"50vh" ,borderWidth:0.1,borderColor:"gray",borderRadius:10,boxShadow:" 0 2px 8px 0 rgba(0, 0, 0, 0.25)",backgroundColor:"#ec3df5"}}>
                   <h1 className="mt-3 text-white"><b>{this.state.sectionThree.title}</b></h1>
                   <p className="mt-3 text-white">Each question carry one marks.</p>
                   <p className="mt-1 text-white">All questions are compulsory.</p>
                   <Link to="/ques"><button  onClick={(e) => this.handleOnClick(e,this.state.sectionThree)}  className="btn btn-warning mt-5" disabled={this.state.but3}>Start</button></Link>
                 </div>




                 
                
                
            </div>
             </div>
        )
    }
}
