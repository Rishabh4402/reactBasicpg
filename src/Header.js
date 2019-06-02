import React,{ Component} from 'react';

import Background from './img/hero.jpg';
import './Header.css'; 

const mystyles = { backgroundImage: `url( ${Background} )`,
						height:'50vh',
						backgroundSize:'cover'
						};
class Header extends Component
{
	
	render(){
		return(

		<header style={mystyles}>
		<h1>
			{this.props.title}
		</h1>
		<p>
			<a href="tt">{this.props.button}</a>
		</p>
		</header>

		);
	}
};
export default Header;