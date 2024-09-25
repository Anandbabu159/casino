import React, { useState } from "react";
import "./Sidebar.css"; // Assuming CSS is kept separate

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-menu">
          <button className="menu-button" onClick={toggleSidebar}>
            &#9776;
          </button>
        </div>
      </nav>

      {/* Sidebar */}
      <div
        id="sidebar"
        className="sidebar"
        style={{ left: isSidebarOpen ? "0" : "-300px" }}
      >
        <button className="close-btn" onClick={toggleSidebar}>
          <i className="fa-solid fa-xmark"></i>
        </button>

        <div className="sidebar-header">
          <span className="user-icon">
            <i className="fa-solid fa-user-tie"></i>
          </span>
          <span className="user-role">Game Controller</span>
        </div>

        <hr />

        {/* Sidebar Menu */}
        <ul className="sidebar-menu">
          <li>
            <a href="#">
              <i className="fas fa-dice-five"></i> 5D
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fas fa-cube"></i> K3
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fas fa-users"></i> Members
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa-solid fa-user-group"></i> Collaborator
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fas fa-user-plus"></i> Create Collaborator
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fas fa-list"></i> Recharge List
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fas fa-check-circle"></i> Approved Recharge
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fas fa-list-alt"></i> Withdrawal List
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fas fa-check-double"></i> Approved Withdrawal
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fas fa-money-bill-wave"></i> Salary Management
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa-solid fa-gears"></i> Salary Distribution
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fas fa-tasks"></i> Task Management
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fas fa-project-diagram"></i> Task Distribution
            </a>
          </li>
          <li>
            <a href="#" className="active">
              <i className="fa-solid fa-gift"></i> Gift Codes
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
