import React, { Component } from "react";

//This Component will house the LeadForm for byrdMR

class LeadForm extends Component {
	state = {
		fullName: "",
		email: "",
		message: ""
	};
	//Once submit button is pressed it handles the event sets state. setState function will clear
	onSubmit = e => {
		e.preventDefault();
		// this.props.onSubmit(this.state);
		this.setState({
			fullName: "",
			email: "",
			message: ""
		});
		//console log shows that information was recived
		console.log(this.state);
	};
	render() {
		return (
			// Form to include Full Name, Email, Message and Send Message button
			<div className='formContainer'>
				             
				<form className='leadForm'>
					        <label> Full Name</label>
					          
					<input
						className='input'
						placeholder='Enter your Full Name'
						value={this.state.fullName}
						onChange={e => this.setState({ fullName: e.target.value })}
					/>
					       
					<br />
					       <label>Email</label>
					       
					<input
						className='input'
						placeholder='Enter your Email'
						value={this.state.email}
						onChange={e => this.setState({ email: e.target.value })}
					/>
					      
					<br />
					      <label>Message</label>
					        
					<textarea
						className='messageInput'
						placeholder='What are your plans?'
						value={this.state.message}
						onChange={e => this.setState({ message: e.target.value })}
					/>
					        
					<br />
					         
					<button className='sendMessagebtn' onClick={e => this.onSubmit(e)}>
						 Send Message 
					</button>
					               
				</form>
			</div>
		);
	}
}

export default LeadForm;
