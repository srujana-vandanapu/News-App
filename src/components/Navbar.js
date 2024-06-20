import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";

export class Navbar extends Component {
  static propTypes = {};

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            UP to DATE
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">

              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/">
                  Health
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/about">
                  Technology
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/about">
                  Bussiness
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/about">
                  Sports
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/about">
                  Entertainment
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/about">
                  About
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
