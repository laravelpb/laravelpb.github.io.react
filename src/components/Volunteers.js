import React from 'react';

function Volunteers() {
  return (
    <div className="section-container">
      <div className="container text-center">
        <div className="row section-container-spacer">
          <div className="col-xs-12 col-md-12">
            <h2>Community Members</h2>
            <p>Praesent at feugiat est, at faucibus ipsum. Aenean condimentum mauris vel malesuada pulvinar. <br />Vestibulum sit amet hendrerit leo, quis vehicula mi.</p>
          </div>  
        </div>
        <div className="row">
          <div className="col-xs-12 col-md-4">
            <img src="img/profil-01.jpg" alt="" className="reveal img-responsive reveal-content image-center" />
            <h3>John Snow</h3>
            <h4>UX designer</h4>
            <p>Sed elementum vehicula nisl, a egestas velit rhoncus nec.Cras vel sapien tincidunt, lacinia risus vel, imperdiet neque.</p>
            <p>
              <a href="https://facebook.com/" className="social-round-icon fa-icon" title="">
                <i className="fa fa-facebook" aria-hidden="true"></i>
              </a>
              <a href="https://twitter.com/" className="social-round-icon fa-icon" title="">
                <i className="fa fa-twitter" aria-hidden="true"></i>
              </a>
              <a href="https://www.linkedin.com/" className="social-round-icon fa-icon" title="">
                <i className="fa fa-linkedin" aria-hidden="true"></i>
              </a>
            </p>
          </div>
          
          <div className="col-xs-12 col-md-4">
            <img src="img/profil-02.jpg" alt="" className="reveal img-responsive reveal-content image-center" />
            <h3>Sansa Stark</h3>
            <h4>UI designer</h4>
            <p>Praesent at feugiat est, at faucibus ipsum. Aenean condimentum mauris vel malesuadav pulvinar. Vestibulum sit amet hendrerit leo, quis vehicula mi.</p>
            <p>
              <a href="https://facebook.com/" className="social-round-icon fa-icon" title="">
                <i className="fa fa-facebook" aria-hidden="true"></i>
              </a>
              <a href="https://twitter.com/" className="social-round-icon fa-icon" title="">
                <i className="fa fa-twitter" aria-hidden="true"></i>
              </a>
              <a href="https://www.linkedin.com/" className="social-round-icon fa-icon" title="">
                <i className="fa fa-linkedin" aria-hidden="true"></i>
              </a>
            </p>
          </div>
          <div className="col-xs-12 col-md-4">
            <img src="img/profil-03.jpg" alt="" className="reveal img-responsive reveal-content image-center" />
            <h3>Gregor Clegane</h3>
            <h4>Developer</h4>
            <p>Busce rutrum nisi non dui placerat sodales. Vivamus feugiat rutrum malesuada. Nulla volutpat sapien ac gravida varius</p>
            <p>
              <a href="https://facebook.com/" className="social-round-icon fa-icon" title="">
                <i className="fa fa-facebook" aria-hidden="true"></i>
              </a>
              <a href="https://twitter.com/" className="social-round-icon fa-icon" title="">
                <i className="fa fa-twitter" aria-hidden="true"></i>
              </a>
              <a href="https://www.linkedin.com/" className="social-round-icon fa-icon" title="">
                <i className="fa fa-linkedin" aria-hidden="true"></i>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Volunteers;
