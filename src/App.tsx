import { Access, Content, Footer, Header } from "./layout-components"


function App() {
	return (
		<>
			<Access />

			<div className='layout-container'>
				<Header />
				<Content />
				<Footer />
			</div>
		</>
	)
}
export default App
