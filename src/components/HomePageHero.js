import React, { Component } from "react";

//This component will house Hero Image and some text with minimal simple css styling.

class HomePageHero extends Component {
	render() {
		return (
			<div className='heroContainer'>
				<div className='drone'>
					<img src='../images/Drone.png' alt='Drone' />
				</div>
				<div className='shadow'>
					<img src='../images/Shadow.png' alt='Drone Shadow' />
				</div>
				<div className='headingContainer'>
					<h1>F-210</h1>
				</div>
				<p className='heroText'> "The fastest drone on the planet" </p>
			</div>
		);
	}
}

export default HomePageHero;
