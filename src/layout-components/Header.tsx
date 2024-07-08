import { Link } from "react-router-dom"
import { GiCrenulatedShield, GiSpartanHelmet } from "react-icons/gi"
import { useUser } from "../contexts/User-context"

function Header() {
	const { user, username, avatar, loading } = useUser()

	return (
		<>
			<header>
				<div className='header-container'>
					<Link to='/Home' className='header-link'>
						<GiCrenulatedShield className='icon' />
						<span>Home</span>
					</Link>

					<h1>WEYMOUTH WARLORDS</h1>
					{loading ? (
						<p>loading ...</p>
					) : !user ? (
						<Link to='/Login' className='header-link'>
							<GiSpartanHelmet style={{ transform: "scaleX(-1)" }} className='icon' />
							<span>Login</span>
						</Link>
					) : (
						<Link to='/Profile' className='header-link'>
							{avatar && <img src={avatar} alt='User Avatar' />}
							<span>{username}</span>
						</Link>
					)}
				</div>
			</header>
		</>
	)
}

export default Header
