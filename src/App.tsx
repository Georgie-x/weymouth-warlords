import { UserProvider } from "./contexts/User-context"
import { Access, Content, Footer, Header, Nav } from "./layout-components"

function App() {
	return (
		<UserProvider>
			<Access />

			<div className='layout-container'>
				<Header />
				<Nav />
				<Content />
				<Footer />
			</div>
		</UserProvider>
	)
}
export default App
