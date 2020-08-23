import React from 'react';
 
import { NavLink } from 'react-router-dom';
 
const Navigation = () => {
    return (
       <div>
           <ul className="header">
          <li><NavLink to="/">Home</NavLink></li>
         <li> <NavLink to="/covid">Covid Tracker</NavLink></li>
         <li> <NavLink to="/Weather2">Weather-info</NavLink></li>
         <li> <NavLink to="/about">About</NavLink></li>
         <li> <NavLink to="/booking">Book Ticket</NavLink></li>
          </ul>
       </div>
    );
}
 
export default Navigation;