import React, { Component } from 'react';

//This component will house NavBar with minimal simple css styling.

class HomePageNavBar extends Component {
        
    
       render() {
        return ( 
        <ul>
        <li >
          <a href="">Store</a>
        </li>
        <li >
          <a href="#">Tutorials</a>
        </li>
        <li>
          {/* //insert Logo */}
        </li>
        <li >
          <a href="">Blog</a>
        </li>
        <li>
          <a href="">Contact</a>
        </li>
        
      </ul>
        );
      }
    }
    


export default HomePageNavBar;
    
 
    