import React, { Component } from "react";
import { HashRouter, Link, Route } from "react-router-dom";
import LeadForm from "./LeadForm";
import HomePageHero from "./HomePageHero.js";

//This component will house NavBar with minimal simple css styling.

class HomePageNavBar extends Component {
	render() {
		return (
			<HashRouter>
				<nav className='navBar'>
					<ul>
						<li className='desktop'>
							<Link to='/store'>Store</Link>
						</li>
						<li className='desktop'>
							<Link to='/tutorials'>Tutorials</Link>
						</li>
						<div className='logoContainer'>
							<li className='logo'>
								<Link to='/'>
									<img src='../images/Logo.png' alt='Logo' />
								</Link>
							</li>
						</div>

						<li className='desktop'>
							<Link to='/blog'> Blog</Link>
						</li>
						<li className='desktop'>
							<Link to='/contact'> Contact</Link>
						</li>
					</ul>
					<Route exact path='/' component={HomePageHero} />
					<Route exact path='/contact' component={LeadForm} />
					{/* The below are ghost links and routes for future development
            <Route path="/blog" component={Blog}/>
            <Route path="/store" component={Store}/> */}
				</nav>
			</HashRouter>
		);
	}
}

export default HomePageNavBar;
