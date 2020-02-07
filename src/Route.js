import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import About from './components/dashboard/About';
import Meetups from './components/dashboard/Meetups';
import Volunteers from './components/dashboard/Volunteers'; 


const Router = () =>{
    return(
        <Switch>
        {/* Homepage Routes */}
        <Route exact path="/">
            <About />
            <Meetups />
            <Volunteers />
        </Route>


        {/* Meetups page */}
        
        <Route exact path="/meetups">
            <Meetups />
        </Route>

        {/*  Latest Page */}
        <Route exact path="/latest">
            <Volunteers />
        </Route>

        </Switch>
    );
}

export default Router