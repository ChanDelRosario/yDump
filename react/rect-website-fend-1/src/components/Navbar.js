import React, { useEffect, useState } from 'react'
import Logo from "../assets/STMD Logo 1.png";
import { Link } from 'react-router-dom';
import "../styles/Navbar.css";

function Navbar() {
    const [timedate, setTimedate] =useState(new Date())

    useEffect(() => {
        setInterval(() => setTimedate(new Date()), 1000);
    }, []);

  return (
    <div className="navbar">
        <div className="leftSide">
            <Link to="/Home" className="logo-link">
                <img src={Logo} alt="Logo" />
                <span>ST. IGNATIUS<br />MEDICAL CENTER</span>
            </Link>
            
        </div>
        <div className="rightSide">
            <p> Day: {timedate.toLocaleDateString()}</p>
            <p> Time: {timedate.toLocaleTimeString()}</p>
        </div>
    </div>
  )
}

export default Navbar