import './css/Navbar.css'
import useWindowDimensions from './useWindowDim.js';

export function Navbar(props) {
	const { height, width } = useWindowDimensions();
	
	return (
		<nav 
			className="navbar"
			style={{ height: height}}
			>
			<ul className="navbar-ul">
				{props.children}
			</ul>
		</nav>
	)
}

export function NavItem(props) {
	return (
		<li 
			className="nav-item" 
			onClick={props.onClick}
			>
			<a className="icon-button">
				{props.icon}
			</a>
			{props.children}
		</li>
	);
}
