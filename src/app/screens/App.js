import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Booking from './Booking'
import Home from "./Home";
import Galerie from "./Galerie";

const App = props => {
    return (
        <Router>
            <Switch>
                <Route path='/Booking' component={Booking}/>
                <Route path='/Galerie' component={Galerie}/>
                <Route path='/' component={Home}/>
            </Switch>
        </Router>
    )
}

export default App
