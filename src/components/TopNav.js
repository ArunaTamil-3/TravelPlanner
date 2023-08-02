import React from "react";
import { Link } from "react-router-dom";
import "../assets/style/TopNavBar.css"

const TopNav = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg shadow-sm">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Travel Planner</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end " id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
              <Link to="/" className="nav-link active no-under" aria-current="page">Home</Link>
            </li>
          
            <li className="nav-item">
            <Link to="/addnewplan" className="nav-link active no-under" aria-current="page">Add New Plan</Link>
            </li>
            <li className="nav-item">
              <Link to="/viewplan" className="nav-link active no-under" aria-current="page" href="#">View Plan</Link>
            </li>
          
          </ul>
          <form className="d-flex" role="search">
            {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/> */}
            <Link to="/login"><button className="btn btn-outline-success" type="submit">LogOut</button></Link>
          </form>
        </div>
      </div>
    </nav>
    </>);
};

export default TopNav;