import React, { Component } from 'react'
import '../App.css';
import Timer from "react-compound-timer"
import { Link } from 'react-router-dom';


export default class Question_Display extends Component {
    

    constructor(){
        super()
        this.state={
            quescount:1,
            answer:false,
            ques:"",
            optionOne:"",
            optionTwo:"",
            optionThree:"",
            optionFour:"",
            correctAns:"",
            level:"",
            sec_id:"",
            marks:1,
            next:"NEXT",
         
            
        }
    }

    
    handleQues=(e,sec,username)=>{
        localStorage.setItem('ques',this.state.ques)
        localStorage.setItem('section',sec.id)
        localStorage.setItem('ques_count',this.state.quescount)
        localStorage.setItem('option_one',this.state.optionOne)
        localStorage.setItem('option_two',this.state.optionTwo)
        localStorage.setItem('option_three',this.state.optionThree)
        localStorage.setItem('option_four',this.state.optionFour)


        //Marks Api
        e.preventDefault()
       
        fetch('http://127.0.0.1:8000/save_answer/',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({marks:this.state.marks,items:sec,username:username})
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
      )
      .catch(error=> console.error(error ))
        
        
        
        
        
        if(this.state.quescount<10)
         this.setState({
           quescount:this.state.quescount+1
        })
       
        else{
            if(this.state.sec_id==1||this.state.sec_id==2)
               this.props.history.push({pathname:"/section",id:this.state.sec_id,username:username})
            else 
            this.props.history.push({pathname:"/feedback",username:username})
        }
        if(this.state.quescount>8)
        this.setState({next:"SUBMIT"})

        if(this.state.answer==true)
        {
            
            this.setState({marks:this.state.marks+1})
            //console.log(this.state.marks)
            if(this.state.level==1)
            {
             
             e.preventDefault();
             fetch('http://127.0.0.1:8000/medium_question/',{
              method:'POST',
              headers:{'Content-Type':'application/json'},
              body:JSON.stringify({items:sec,username:username})
             
             })
             .then(res=> res.json())
             .then((result)=>{
              this.setState({ques:result.questions,optionOne:result.option1,optionTwo:result.option2,optionThree:result.option3,optionFour:result.option4,correctAns:result.correct_option,level:result.difficulty})
             
             
             },
               (error) => {
                   this.setState({
                   error
                   });
                 }
             )
             .catch(error=> console.error(error ))
               
         this.setState({answer:false})
      }
         if(this.state.level==2 ||this.state.level==3)
         {
            e.preventDefault();
            fetch('http://127.0.0.1:8000/hard_question/',{
             method:'POST',
             headers:{'Content-Type':'application/json'},
             body:JSON.stringify({items:sec,username:username})
            
            })
            .then(res=> res.json())
            .then((result)=>{
             //console.log(result,"result")
             this.setState({ques:result.questions,optionOne:result.option1,optionTwo:result.option2,optionThree:result.option3,optionFour:result.option4,correctAns:result.correct_option,level:result.difficulty})
            
            
            },
              (error) => {
                  this.setState({
                  error
                  });
                }
            )
            .catch(error=> console.error(error ))

            this.setState({answer:false})
              
         }  
        }
        else{
           if(this.state.level==1 ||this.state.level==2)
           {
            e.preventDefault();
            fetch('http://127.0.0.1:8000/easy_question/',{
             method:'POST',
             headers:{'Content-Type':'application/json'},
             body:JSON.stringify({items:sec,username:username})
            })
            .then(res=> res.json())
            .then((result)=>{
            
             this.setState({ques:result.questions,optionOne:result.option1,optionTwo:result.option2,optionThree:result.option3,optionFour:result.option4,correctAns:result.correct_option,level:result.difficulty})
            
            
            },
              (error) => {
                  this.setState({
                  error
                  });
                }
            )
            .catch(error=> console.error(error ))

           }
           if(this.state.level==3)
           {
            e.preventDefault();
            fetch('http://127.0.0.1:8000/medium_question/',{
             method:'POST',
             headers:{'Content-Type':'application/json'},
             body:JSON.stringify({items:sec,username:username})
            
            })
            .then(res=> res.json())
            .then((result)=>{
            // console.log(result,"result")
             this.setState({ques:result.questions,optionOne:result.option1,optionTwo:result.option2,optionThree:result.option3,optionFour:result.option4,correctAns:result.correct_option,level:result.difficulty})
            
            
            },
              (error) => {
                  this.setState({
                  error
                  });
                }
            )
            .catch(error=> console.error(error ))

           }
          
        }
      }

handleAns=(e,correctAns,ans)=>{
    if(correctAns==ans)
     this.setState({answer:true})
    
}
componentDidMount(){

    // document.addEventListener('contextmenu', (e) => {
    //     e.preventDefault();
    //   });
     
  
    const {ques,optionOne, optionTwo,optionThree,optionFour,correctAns,level,sec_id,username} = this.props.location

  
    this.setState({
           ques:ques,
           optionOne:optionOne,
           optionTwo:optionTwo,
           optionThree:optionThree,
           optionFour:optionFour,
           correctAns:correctAns,
           level:level,
           sec_id:sec_id,
           
          
    })

     if(localStorage.getItem('ques_count'))
     {  
       this.setState({
           quescount:parseInt(localStorage.getItem('ques_count')),
           ques:localStorage.getItem('ques'),
           optionOne:localStorage.getItem('option_one'),
           optionTwo:localStorage.getItem('option_two'),
           optionThree:localStorage.getItem('option_three'),
           optionFour:localStorage.getItem('option_four'),
        })
    }
    else
    {
      this.setState({quescount:1})  
    }
      

    

    if(sec_id==1||sec_id==2)
    {
        setTimeout(() => {
            this.props.history.push({pathname:"/section",username:username})
          }, 600000);
    }
    else{
        setTimeout(() => {
            this.props.history.push({pathname:"/feedback", username:username})
          }, 600000);
    }
   

}


    render() {
       const {section,username}=this.props.location
        return (
             
              <div className="divs"> 
           
              <div style={{height:"10vh",background:":ghostwhite"}}></div>
              <div className="hero is-primary is-fullheight">
               <div className="hero-body">
               <div className="container ">
               <div className="columns is-mobile is-centered">
               <div className="column is-half">
                <div className=" has-text-centered">
                    <div className="float-right">
                    <Timer
                       initialTime={600000}
                       direction="backward"
>
                      {() => (
                        <React.Fragment>
           
                        <Timer.Minutes /> minutes.
                        <Timer.Seconds /> seconds
            
                           </React.Fragment>
                       )}
                    </Timer> 
                 
                    

                    </div>
                   
                    <h7 className="subtitle has-text-centered is-uppercase is-7 navigation mt-3">QUESTION {this.state.quescount} OF 10</h7>
                   <h5 className="subtitle has-text-centered is-5 mt-4"></h5>
                   <div> {this.state.ques}</div>
                   <button className="form-control option has-text-grey-dark mt-3"  onClick={(e) => this.handleAns(e,this.state.correctAns,1)}>
                      <span className="has-text-weight-bold is-size-5" >A</span> {this.state.optionOne}
                     </button>
                     <button className="form-control option has-text-grey-dark" onClick={(e) => this.handleAns(e,this.state.correctAns,2)}>
                     <span className="has-text-weight-bold is-size-5" >B</span> {this.state.optionTwo}
                      </button>
                      <button className="form-control option has-text-grey-dark"onClick={(e) => this.handleAns(e,this.state.correctAns,3)}>
                      <span className="has-text-weight-bold is-size-5" >C</span> {this.state.optionThree}
                      </button>
                       <button className="form-control option has-text-grey-dark"onClick={(e) => this.handleAns(e,this.state.correctAns,4)}>
                        <span className="has-text-weight-bold is-size-5" >D</span> {this.state.optionFour}
                     </button>
                        <button className="btn btn-success mt-4"  onClick={(e) => this.handleQues(e,section,username)}>{this.state.next}</button>
                 </div>
                </div>
            </div>
           </div>
         </div>

         </div>

            </div>
        )
    }
}
