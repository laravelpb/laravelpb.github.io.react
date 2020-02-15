import React from 'react';
import CarouselNavigator from '../shared/CarouselNavigator';
import meetups from '../../configs/data/meetups.json';

function Meetups() {
  
  return (
  <div className="section-container section-gray">
    <div className="container">
      <div className="row">      
        <div className="col-xs-12"> 
          <h2 className="text-center">Meetups</h2>
          <br/>       
          <div id="carousel-example-generic" className="carousel carousel-fade slide" data-ride="carousel">
            
            <div className="carousel-inner" role="listbox">
              
              {
                meetups.data.map((meetup, idx) => 
                <div key={idx} className={`item ${idx == 0 ? 'active': ''}`}>
                  <img className="img-responsive" src={meetup.photo} alt={meetup.name} />
                  <div className="carousel-caption card-shadow reveal">
                    
                    <h3>{meetup.name}</h3>
                    <p>{meetup.date} <br/></p>
                    <p>{meetup.summary} <br/></p>
                    
                    <CarouselNavigator />
                    
                    {meetup.topics.map((topic) => 
                      
                      <div>
                        <br/>
                        <h5><a href={topic.url} target="_blank">{topic.title}</a></h5>
                        <div>{topic.summary} <br/></div>
                        
                        <h4 className="text-right">~ <a href={topic.profile_url} target="_blank">{topic.speaker}</a></h4>
                      </div>
                      )}  
                      
                      <a href={meetup.url} className="btn btn-primary" title={meetup.url}>
                        Details
                      </a>
                    </div>
                  </div>
                  )
                }
                
              </div>
              
            </div>
          </div>
          
        </div>  
        
      </div>
    </div>
    
    );
  }
  
  export default Meetups;
  