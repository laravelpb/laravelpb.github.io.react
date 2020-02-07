import React from 'react'

function Feedback() {
    return(
        <div className="section-container">
            <div className="container text-center">
                <div className="row section-container-spacer">
                <div className="col-xs-12 col-md-12">
                    <h2 className="text-center">Feedbacks</h2>
                    <p>Praesent at feugiat est, at faucibus ipsum. Aenean condimentum mauris vel malesuada pulvinar. <br />Vestibulum sit amet hendrerit leo, quis vehicula mi.</p>
                </div>  
                </div>
                <div className="row">
                <div className="col-xs-12 col-md-4">
                    <img src="img/logo-01.png" alt="" className="img-responsive reveal-content image-center" />
                    
                </div>
                
                <div className="col-xs-12 col-md-4">
                    <img src="img/logo-02.png" alt="" className="img-responsive reveal-content image-center" />
                </div>
                <div className="col-xs-12 col-md-4">
                    <img src="img/logo-03.png" alt="" className="img-responsive reveal-content image-center" />
                </div>
                </div>
            </div>
        </div>
    );
}

export default Feedback;

