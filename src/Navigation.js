import React from 'react';
//import logo from './logo.svg';
//import './App.css';
import './Navigation.css'
class Navigation extends React.Component {
	render(){
	const sections = ['Home','Photos','Files','Contacts','About Us'];
	const navLinks = sections.map(section =>{
		return(
			<li><a href={'#'+section}>{section}</a></li>
		)
	});
  return (
	<nav>
		<h2 className ="logo">{this.props.logoTitle}</h2>
		<ul>
			{navLinks}
		</ul>
    </nav>
  );
  }
}

export default Navigation;
