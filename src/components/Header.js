import React from 'react';

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
                <li><a href="./index.html" title="">Home</a></li>
                <li><a href="./project.html" title="">Meetups</a></li>
                <li>
                <p>
                    <a href="./components.html" className="btn btn-default navbar-btn" title="">Components</a>
                </p>
                </li>
                
            </ul>
            </div> 
        </div>
        </nav>
    </header>

  );
}

export default Header;
