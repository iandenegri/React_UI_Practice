import React, { Component } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

class Header extends Component {



  render() {
    return (
      <div className="navbar has-shadow">
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item">
              MyCompany
            </Link>
            <span className="navbar-burger">
              <span></span>
              <span></span>
              <span></span>
            </span>
          </div>

          <div className="navbar-end navbar-menu">

            <Link to="/" className="navbar-item r-item">Home</Link>
            <Link to="/FAQ" className="navbar-item r-item">Features</Link>
            <Link to="/FAQ" className="navbar-item r-item">About</Link>
            <Link to="/FAQ" className="navbar-item r-item">FAQ</Link>

            <div className="navbar-item">
              <p className="control">
                <a className="button is-primary is-outlined">
                  <span className="icon">
                    <i className="fa fa-download"></i>
                  </span>
                  <span>
                    Join Now
                  </span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
