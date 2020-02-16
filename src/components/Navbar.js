import React, { Component } from 'react'
import logo from "../images/BVPIEEE.png";
import './Navbar.css'
import {FaAlignRight} from 'react-icons/fa'
import {Link} from 'react-router-dom'


export default class Navbar extends Component {
    state = {
        isOpen: false
    }

    handleToggle=() => {
        this.setState({isOpen: !this.state.isOpen})
    }

    render() {
        return (
            <nav className = "navbar">
                <div className = "nav-center">
                    <div className = "nav-header">
                        <Link to = "/">
                            <img src = {logo} className = "navbar-img" alt = "WIE"></img>
                        </Link>
                        <button type = "button" className = "nav-btn" 
                         onClick = {this.handleToggle}>
                            <FaAlignRight className = "nav-icon"/>
                        </button>
                    </div>
                    
                    <ul className = {this.state.isOpen? "nav-links show-nav":
                        "nav-links"}>
                      <li className="nav-item">
                        <Link
                          activeClass="active"
                          to="section1"
                          spy={true}
                          smooth={true}
                          offset={-70}
                          duration={500}
                        >
                          Home
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link 
                          activeClass="active"
                          to="section2"
                          spy={true}
                          smooth={true}
                          offset={-70}
                          duration={500}
                        >
                          Details
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          activeClass="active"
                          to="section3"
                          spy={true}
                          smooth={true}
                          offset={-70}
                          duration={500}
                        >
                          Judges
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          activeClass="active"
                          to="section4"
                          spy={true}
                          smooth={true}
                          offset={-70}
                          duration={500}
                        >
                          <button className = "btn-primary">Register</button>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          activeClass="active"
                          to="section4"
                          spy={true}
                          smooth={true}
                          offset={-70}
                          duration={500}
                        >
                          <button className = "btn-primary">Contact Us</button>
                        </Link>
                      </li>
                    </ul>
                </div>
            </nav>
        )
    }
}
