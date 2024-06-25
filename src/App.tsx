import { useState } from "react"
import { Access, Content, Footer, Header } from "./layout-components"

function App() {
	const [showMenu, setShowMenu] = useState<boolean>(false)

	return (
		<>
			<Access />

			<div className='layout-container'>
				<Header showMenu={showMenu} setShowMenu={setShowMenu}/>
				<Content showMenu={showMenu} setShowMenu={setShowMenu}/>
				<Footer />
			</div>
		</>
	)
}
export default App
