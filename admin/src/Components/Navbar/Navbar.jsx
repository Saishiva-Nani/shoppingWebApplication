import React from "react";
import './Navbar.css'
import navlogo from '../../assets/bag-check-fill.svg';
import navprofile from '../../assets/people.svg';

const Navbar = () =>{
    return(
        <nav>
        <div className="navbar">
            <img src={navlogo} alt="" className="nav-logo" />
            <img src={navprofile} alt="" className="nav-profile" />
        </div>
        </nav>
    )
}

export default Navbar;