import './css/SettingPage.css';
import { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import {RightArrow} from './icons.js';
import {DownArrow} from './icons.js';

function SetPassDropdown(props) {
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
				unmountOnExit
			>
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
			</CSSTransition>
		</div>
	);
}

function SetPassword() {
	const [open, setOpen] = useState(false);
	
	return (
		<div>
			<div>
				<h3 onClick={() => setOpen(!open)}>Change Password</h3>
			</div>
			<SetPassDropdown open={open}></SetPassDropdown>
		</div>
	);
}

function SetdoubleAuthen() {

}

function SetNick() {
	
}

function SetAvatar() {

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
			<SetPassword></SetPassword>
			<p>hello</p>
			
		</div>
	);
}


