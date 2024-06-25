import { HeaderProps } from "../utils/types"

function Header({ showMenu, setShowMenu }: HeaderProps) {
	function handleMenuClick() {
		setShowMenu(() => !showMenu)
	}

	return (
		<>
			<header>
				<div className='header-container'>
					{showMenu === false ? (
						<button className='menu-button' onClick={() => handleMenuClick()}>&#9776;</button>
					) : (
						<button className='menu-button' onClick={() => handleMenuClick()}>&#10005;</button>
					)}

					<h1>WEYMOUTH WARLORDS</h1>
					<button>login</button>
				</div>
			</header>
		</>
	)
}

export default Header
