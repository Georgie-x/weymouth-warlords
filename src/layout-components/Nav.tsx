import { Link } from "react-router-dom"
function Nav() {
	return (
		<nav>
			<ul className='menu'>
				<li>
					<Link to='/home'>Home</Link>
				</li>
				<li>
					<Link to='/events'>Events</Link>
				</li>
				<li>
					<Link to='/gallery'>Gallery</Link>
				</li>
				<li>
					<Link to='/forum'>Forum</Link>
				</li>
				<li>
					<Link to='/links'>Links</Link>
				</li>
			</ul>
		</nav>
	)
}

export default Nav
