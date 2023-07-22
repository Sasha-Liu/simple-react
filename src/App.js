import {Navbar} from './Navbar.js';
import {NavItem} from './Navbar.js';
import {Home} from './icons.js';
import {Profile} from './icons.js';
import {Chat} from './icons.js';
import {Game} from './icons.js';
import {Setting} from './icons.js';
import {SettingPage} from './Setting.js';
import { useState } from 'react';

function App() {
	const [page, setPage] = useState('Home');
	
	return (
	<div className="wrapper">
		<Navbar className="navbar">
			<NavItem 
				icon={<Home />} 
				onClick={() => setPage('Home')}>
			</NavItem>
			<NavItem 
				onClick={() => setPage('Profile')}
				icon={<Profile></Profile>} >
			</NavItem>
			<NavItem 
				icon={<Chat></Chat>} 
				onClick={() => setPage('Social')}>
			</NavItem>
			<NavItem 
				icon={<Game></Game>} 
				onClick={() => setPage('Game')}>
			</NavItem>
			<NavItem 
				icon={<Setting></Setting>} 
				onClick={() => setPage('Setting')}>
			</NavItem>
		</Navbar>
		<div className="main">
			<h2>{page}</h2>
			{/** show page component according to state */}
			{page === 'Setting' && <SettingPage />}
		</div>
	</div>
  );
}

export default App;
