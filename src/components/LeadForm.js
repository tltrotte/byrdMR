import React, { Component } from 'react';

//This Component will house the LeadForm for byrdMR

class LeadForm extends Component {
        state = {
         fullName:'',
         email:'',
         message:'',
        };
    
       render() {
        return ( 
     // Form to include Full Name, Email, Message and Send Message button      
            <form className="leadForm">
            <label > Full Name</label>
              <input className="input" placeholder= 'Enter your Full Name' 
                value = {this.state.fullName} 
                onChange = {e => this.setState({fullName: e.target.value })}
              />
           <br />
           <label>Email</label>
           <input className="input" placeholder= 'Enter your Email' 
               value = {this.state.email} 
               onChange = {e => this.setState({email: e.target.value })}
             />
          <br />
          <label>Message</label>
            <input className="messageInput" placeholder= 'What are your plans' 
              value = {this.state.message} 
              onChange = {e => this.setState({message: e.target.value })}
              />
            <br />
             <button className="sendMessagebtn" onClick={e => this.onSubmit(e)}> Send Message </button>
           
           </form>
        );
      }
    }
    
    
    
    
    export default LeadForm;
    