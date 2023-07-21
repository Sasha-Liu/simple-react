import './css/SettingPage.css';


/* 
	set password 
	click on it should create a drop down
	which will ask for 
	current password
	new password
	enter again the new password
*/
function SetPassword() {

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
		<form className="setting">
			<div className="set-avatar">
				<img 
					src={avatarSrc}
					alt="avatar">
				</img>
				<div>
					<ul>
						<li>Nice image of your face</li>
						<li>Not too big</li>
						<li>Not too small</li>
						<li>JPG, nothing else</li>
					</ul>
					{/*how to upload photo ?*/}
					<button 
						onClick={() => alert('upload')}
						>
						Upload new photo
					</button>
				</div>
			</div>

			<label for="nick">Nickname</label><br/>
			<input 
				type="text" 
				id="nick" 
				name="nick"
				value={nickname}
				placeholder="nickname" 
				/>
			<br/>
			

			{/*prevent default for submit ??*/}
			<input type="submit"></input> <br></br>
		</form>
	);
}


