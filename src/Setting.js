import './css/SettingPage.css';
import { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import {RightArrow} from './icons.js';
import {DownArrow} from './icons.js';

function Dropdown(props) {
	let h = props.open ? "27rem" : "0rem";
	
	return (
		<div style={{
			overflow: "hidden",
			height: h,
			width: "22rem",
			transition: "height 500ms ease",
			}}
			>
			<CSSTransition
				in={props.open}
				timeout={500}
				classNames="dropdown"
				unmountOnExit>
					{props.children}
			</CSSTransition>
		</div>
	);
}

function SetPassword() {
	const [open, setOpen] = useState(false);

	function Content() {
		return (
			<form className="set-pass-form">
				<label htmlFor="current-pass">Current password</label><br></br>
				<input name="current-pass" id="current-pass"></input><br></br>
				<label htmlFor="new-pass">New password</label><br></br>
				<input name="new-pass" id="new-pass"></input><br></br>
				<label htmlFor="confirm-pass">Confirm password</label><br></br>
				<input name="confirm-again" id="confirm-again"></input><br></br>
				<br></br>
				<input type="submit"></input>
			</form>
		);
	}
	
	return (
		<div>
			<div>
				<h3 
					className="option" 
					onClick={() => setOpen(!open)}>
					Change Password
				</h3>
			</div>
			<Dropdown open={open}>
				<Content></Content>
			</Dropdown>
		</div>
	);
}

function SetdoubleAuthen() {

}

function SetNick() {
	/*get user nickname from backend*/
	let nick = 'myAwesomeNick';
	
	/*upon change need to verify if nickname is valid */

	return (
		<div>
			<form style={{fontFamily: "Lucida Console, Courier New, monospace"}}>
				<label 
					style={{color: "darkgrey"}}
					htmlFor="nick">
					<h3>Nickname {nick}</h3>
				</label>
				<input 
					name="nick" 
					id="nick" 
					placeholder='new nickname'>
				</input>
				<input type="submit" style={{margin: "1rem"}}></input>
			</form>
		</div>
	);
}

function SetAvatar() {
	let avatarSrc = './avatarUrl';

	return (
		<div style={{ 
			display: "flex", 
			height: "10rem", 
			gap: "4rem",
			fontFamily: "Lucida Console, Courier New, monospace" }}>
			<img src={avatarSrc} alt="avatar"></img>
			<ul style={{listStyleType: "none", fontSize: "12px"}}>
				<li style={{margin: "10px"}}>This image will be your avatar</li>
				<li style={{ margin: "10px" }}>File can't be too big</li>
				<li style={{ margin: "10px" }}>JPG ok, nothing else</li>
				<li style={{ margin: "10px" }}><input type="file"></input></li>
			</ul>
		</div>
	);
}


export function SettingPage() {
	/*get these values from backend */
	let avatarSrc = './image/defaultAvatar'; 
	let nickname = 'nickname';
	let password = 'password';
	let doubleAu = false;

	/**here define a function to send info to backend */

	return (
		<div className="user-setting">
			<SetAvatar></SetAvatar>
			<SetNick></SetNick>
			<SetPassword></SetPassword>
			<h3 style={{
				color: "darkgrey",
				fontFamily: "Lucida Console, Courier New, monospace"}}>
				Double Authent not done yet
			</h3>
		</div>
	);
}


