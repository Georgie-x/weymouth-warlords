import { SetShowMenu } from "../utils/types"

function Menu({ setShowMenu }: { setShowMenu: SetShowMenu }) {
	function handleLinkClick() {
		setShowMenu(false)
	}

	return (
		<>
			<ul className='menu'>
				<li>
					<a href='/home' onClick={() => handleLinkClick()}>
						Home
					</a>
				</li>
				<li>
					<a href='/events' onClick={() => handleLinkClick()}>
						Events
					</a>
				</li>
				<li>
					<a href='/gallery' onClick={() => handleLinkClick()}>
						Gallery
					</a>
				</li>
				<li>
					<a href='/forum' onClick={() => handleLinkClick()}>
						Forum
					</a>
				</li>
				<li>
					<a href='/links' onClick={() => handleLinkClick()}>
						Links
					</a>
				</li>
			</ul>
		</>
	)
}

export default Menu
