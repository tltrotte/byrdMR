import React, { Component } from 'react';


//This component will house Hero Image and some text with minimal simple css styling.

class HomePageHero extends Component {
       
    
       render() {
        return ( 
            <div className="heroContainer" >    
                 <img src="../images/Drone.png" alt="Drone" />
                 <h1>F-210</h1>
                 <p className="heroText"> "The fastest drone on the planet" </p>
            </div> 
        
          
        );
      }
    } 
    
    
    
    
    export default HomePageHero;
    