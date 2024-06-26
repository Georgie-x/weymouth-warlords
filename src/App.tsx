
import { Access, Content, Footer, Header, Nav } from "./layout-components"

function App() {
	

	return (
		<>
			<Access />

			<div className='layout-container'>
				<Header />
				<Nav />
				<Content />
				<Footer />
			</div>
		</>
	)
}
export default App
