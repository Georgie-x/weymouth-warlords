import { Link } from "react-router-dom"
import { GiCrenulatedShield, GiSpartanHelmet } from "react-icons/gi"

function Header() {
	return (
		<>
			<header>
				<div className='header-container'>
					<Link to='/Home' className="header-link">
						<GiCrenulatedShield className='icon' />
						<span>Home</span>
					</Link>

					<h1>WEYMOUTH WARLORDS</h1>

					<Link to='/Login' className="header-link">
						<GiSpartanHelmet style={{ transform: "scaleX(-1)" }} className='icon' /><span>Login</span>
					</Link>
				</div>
			</header>
		</>
	)
}

export default Header
