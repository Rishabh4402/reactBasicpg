import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import Navigation from './Navigation'
import * as serviceWorker from './serviceWorker';
import Header from './Header'

class App extends React.Component
{
	render(){
	return(
			<div>
				<Navigation logoTitle="React"/>
				<Header title = "Hello, This is Rishabh" button="Find More" />
			</div> 
		);
	}
}


ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
