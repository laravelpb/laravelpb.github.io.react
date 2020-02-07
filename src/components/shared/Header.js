import React from 'react';
import {Link} from 'react-router-dom'

function Header() {
  return (
    <header>
        <nav className="navbar navbar-default active">
        <div className="container">
            <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="./index.html" title="">
                <img src="img/mashup-icon.svg" className="navbar-logo-img" alt="" />
                Laravel Live Punjab
            </a>
            </div>
            
            <div className="collapse navbar-collapse" id="navbar-collapse">
            <ul className="nav navbar-nav navbar-right">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/meetups">Meetups</Link>
                </li>

                <li>
                    <Link to="/latest">Latest News</Link>
                </li>
            </ul>
            </div> 
        </div>
        </nav>
    </header>
  );
}

export default Header;
