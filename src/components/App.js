import React, { Component } from "react";
import "../App.css";
import LeadForm from "./LeadForm.js";
import HomePageHero from "./HomePageHero.js";
import HomePageNavBar from "./HomePageNavBar.js";

class App extends Component {
	onSubmit = fields => {
		console.log("App has recieved", fields);
	};

	render() {
		return (
			<div className='App'>
				<HomePageNavBar />
				 <HomePageHero />
				 <LeadForm onSubmit={fields => this.onSubmit(fields)} />
				          
			</div>
		);
	}
}

export default App;
