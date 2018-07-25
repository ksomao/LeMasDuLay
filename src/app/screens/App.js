import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Booking from './Booking'

const App = props => {
	return (
		<Router>
			<Switch>
				<Route
					path='*'
					component={Booking} /> 
			</Switch>
		</Router>
	)
}

export default App
