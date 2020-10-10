import React from 'react';

function Banner() {
  return (
    <div className="hero-full-container background-image-container white-text-container">
        <div className="container">
        <div className="row">
            <div className="col-xs-12">
              <h3>WELCOME TO</h3>
              <h1>{process.env.REACT_APP_WEBSITE_NAME}</h1>
              <p>A regional community of <a href="https://laracon.in" target="_blank" title="Laracon India"><b>Laracon India</b></a></p>
              <br />
              <a href="https://twitter.com/LaravelPB" target="_blank" className="btn btn-default btn-lg" title="">Join Us</a>
            </div>
        </div>
        </div>
    </div>
  );
}

export default Banner;
