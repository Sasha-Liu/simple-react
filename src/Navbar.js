import './css/Navbar.css'
import {useState} from 'react';

export function Navbar(props) {
	
	
	return (
		<nav className="navbar">
			<ul className="navbar-ul">
				{props.children}
			</ul>
		</nav>
	)
}

export function NavItem(props) {
	return (
		<li className="nav-item">
		<a className="icon-button">
			{props.icon}
		</a>
		{/*child page goes here*/}
		
	
		</li>
	);
}
