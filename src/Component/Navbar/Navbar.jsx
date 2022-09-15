import React from 'react'
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="nav-wrapper">
        <div className="nav-left">
            <div className="nav-name">Aldiyan</div>
            <span>toggle</span>
        </div>
        <div className="nav-right">
            <div className="nav-list">
                <ul style={{listStyleType : 'none'}}>
                    <li>Home</li>
                    <li>Experience</li>
                    <li>Portofolio</li>
                </ul>
            </div>
            <button className="button">
                Reach Me!
            </button>
        </div>
    </div>
  )
}

export default Navbar