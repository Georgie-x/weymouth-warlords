import { Routes, Route } from "react-router-dom"
import { ErrorPage, Events, Forum, Home, Gallery, Links } from "../content-components"
import { Aside, Login } from "./index"

function Content() {
	return (
		<div className='content-container'>
			<main>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/home' element={<Home />} />
					<Route path='/events' element={<Events />} />
					<Route path='/gallery' element={<Gallery />} />
					<Route path='/forum' element={<Forum />} />
					<Route path='/links' element={<Links />} />
					<Route path='/login' element={<Login />} />
					<Route path='/*' element={<ErrorPage />} />
				</Routes>
			</main>
			<Aside />
		</div>
	)
}

export default Content
