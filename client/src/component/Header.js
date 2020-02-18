import React from 'react';
import "../../node_modules/bootstrap/js/src/dropdown.js";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import "./MyCss.css";
const Header = () => {
        return (
            <div>
        <nav className="navbar navbar-expand-sm bg-primary navbar-dark">
           <div className="container">
               <a className="navbar-brand" href="/"><h1>JobSeeker</h1></a>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item"><a className="nav-link" href="/">Post a Resume</a></li>
                    <li className="nav-item"><a className="nav-link" href="/login">Login</a></li>
                    <li className="dropdown"><a className="nav-link" href="/" data-toggle="dropdown">Signup</a>
                        <ul className="dropdown-menu">
                            <li><a href="/registerJ">JobSeeker</a></li>
                            <li><a href="/registerR">Recruiter</a></li>
                        </ul>
                    </li>    
                 </ul>
               </div>
            </div>
        </nav>
       </div>
     );    
};

export default Header;