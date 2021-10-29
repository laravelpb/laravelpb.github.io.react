import React from 'react';
import volunteers from '../../configs/data/volunteers.json';

function Volunteers() {
  return (
    <div className="section-container">
      <div className="container text-center">
        <div className="row section-container-spacer">
          <div className="col-xs-12 col-md-12">
            <h2>Volunteers</h2>
            {/* <p>Praesent at feugiat est, at faucibus ipsum. Aenean condimentum mauris vel malesuada pulvinar. <br />Vestibulum sit amet hendrerit leo, quis vehicula mi.</p>
           */}
           </div>  
        </div>
        <div className="row">
          {/*volunteers.data.map((volunteer, ii) => 
            <>
              {ii % 3 == 0 && (<div className="clear-both">&nbsp;</div>)}
              <div className="col-xs-12 col-md-4">
                <img src={volunteer.photo} alt="" className="profile-pic reveal img-responsive reveal-content image-center" />
                <h3>{volunteer.name}</h3>
                <p>
                  {volunteer.social.map((social) => 
                  
                    <a href={social.url} className="social-round-icon fa-icon" title="">
                      <i className={`fa ${social.icon}`} aria-hidden="true"></i>
                    </a>
                  )}
                </p>
              </div>
            </>
          )*/}
        </div>

      </div>
    </div>

  );
}

export default Volunteers;
