import React, { useState } from 'react';
import './Navigation.css'; // Make sure to import your CSS for styling

const Navigation = () => {
  const [isProgramsDropdownOpen, setProgramsDropdownOpen] = useState(false);
  const [isInfoDropdownOpen, setInfoDropdownOpen] = useState(false);

  const toggleProgramsDropdown = () => {
    setProgramsDropdownOpen(!isProgramsDropdownOpen);
  };

  const toggleInfoDropdown = () => {
    setInfoDropdownOpen(!isInfoDropdownOpen);
  };

  return (
    <nav className="navigation">
      <a href="/" className="logo">
        <img src="/images/logo1.png" alt="Logo" /> {/* Accessing logo from public folder */}
      </a>
      <ul className="nav-links">
        <li><a href="/">Home</a></li>

        {/* Programs Dropdown */}
        <li className="dropdown">
          <button className="dropdown-toggle" onClick={toggleProgramsDropdown}>
            Programs
          </button>
          {isProgramsDropdownOpen && (
            <ul className="dropdown-content">
              <li><a href="/CollegePrograms">College Programs</a></li>
              <li><a href="/campusPrograms">Campus Programs</a></li>
            </ul>
          )}
        </li>
        {/* Info Dropdown */}
        <li className="dropdown">
          <button className="dropdown-toggle" onClick={toggleInfoDropdown}>
            Information
          </button>
          {isInfoDropdownOpen && (
            <ul className="dropdown-content">
              <li><a href="/AboutUs">About Us</a></li>
              <li><a href="/Gform">Contact Us</a></li>
            </ul>
          )}
        </li>

        <li><a href="/features">Features</a></li>
        <li><a href="/Notes">Notes</a></li>
        <li><a href="/Achievers">Achievers</a></li>

        
      </ul>
    </nav>
  );
};

export default Navigation;
