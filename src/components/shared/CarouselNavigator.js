import React from 'react';

function CarouselNavigator() {
    return(
        <div>
            <a className="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
                <i className="fa fa-chevron-left" aria-hidden="true"></i>
                <span className="sr-only">Previous</span>
            </a>
            <a className="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
            <i className="fa fa-chevron-right" aria-hidden="true"></i>
            <span className="sr-only">Next</span>
            </a>
        </div>
    );
}
    
export default CarouselNavigator;