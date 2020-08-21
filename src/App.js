import React from 'react';
import {Route} from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import './App.css';
import Home from './components/Home';
import Resume from './components/Resume'

function App() {
	return (
		<div className="App">
      <CssBaseline />
			<Route exact path='/' component={Home} />
			<Route exact path='/resume' component={Resume} />
		</div>
	);
}

export default App;
