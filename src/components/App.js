import React, { Component } from "react";
import "../index.css";
import { HashRouter, Link, Route } from "react-router-dom";
import LeadForm from "./LeadForm.js";
import HomePageHero from "./HomePageHero.js";
import HomePageNavBar from "./HomePageNavBar.js";

class App extends Component {
	render() {
		return (
			<HashRouter>
				<div className='App'>
					<HomePageNavBar />
				</div>
			</HashRouter>
		);
	}
}

export default App;
