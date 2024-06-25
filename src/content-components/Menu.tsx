import { HeaderProps } from "../utils/types"

function Menu({ setShowMenu }: HeaderProps) {
	function handleLinkClick() {
		setShowMenu(false)
	}

	return (
	
			<ul className='menu'>
				<li>
					<a href='/home' onClick={() => handleLinkClick()}>
						home &raquo;
					</a>
				</li>
                <li>
					<a href='/events' onClick={() => handleLinkClick()}>
						events &raquo;
					</a>
				</li>
                <li>
					<a href='/gallery' onClick={() => handleLinkClick()}>
						gallery &raquo;
					</a>
				</li>
                <li>
					<a href='/forum' onClick={() => handleLinkClick()}>
						forum &raquo;
					</a>
				</li>
                <li>
					<a href='/links' onClick={() => handleLinkClick()}>
						links &raquo;
					</a>
				</li>
			</ul>

	)
}

export default Menu
