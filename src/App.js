import React from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Home from './components/Home';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Contacts from './components/Contacts';

function App() {
	return (
		<div className="App">
      <CssBaseline />
			<Route exact path='/' component={Home} />
			<Route exact path='/resume' component={Resume} />
			<Route exact path='/portfolio' component={Portfolio} />
			<Route exact path='/contacts' component={Contacts} />
		</div>
	);
}

export default App;