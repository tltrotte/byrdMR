import React, { Component } from 'react';

//This component will house NavBar with minimal simple css styling.

class HomePageNavBar extends Component {
        
    
       render() {
        return ( 
    <nav className="navBar">
        <ul>
          <li >
            <a href="">Store</a>
          </li>
          <li >
            <a href="">Tutorials</a>
          </li>
          <li className= 'logo'>
              <div className= 'logoContainer'>
                <img src="../images/Logo.png" alt="Logo" />
              </div>
          </li>
          <li >
            <a href="">Blog</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        
      </ul>

</nav>
        );
      }
    }
    


export default HomePageNavBar;
    
 
    