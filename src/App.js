import {Navbar} from './Navbar.js'
import {NavItem} from './Navbar.js'
import {Home} from './icons.js'
import {Profile} from './icons.js'
import {Social} from './icons.js'
import {Game} from './icons.js'

function App() {
  return (
	<div>
    	<Navbar>
			<NavItem icon={<Home />}></NavItem>
			<NavItem icon={<Profile></Profile>}></NavItem>
			<NavItem icon={<Social></Social>}></NavItem>
			<NavItem icon={<Game></Game>}></NavItem>
		</Navbar>
	</div>
  );
}

export default App;
