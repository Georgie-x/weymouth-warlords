import { Routes, Route } from "react-router-dom"
import { ErrorPage, Events, Forum, Home, Gallery, Links} from "../content-components"

function Content() {
	return (
		<main>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/home' element={<Home />} />
				<Route path='/events' element={<Events />} />
				<Route path='/gallery' element={<Gallery />} />
				<Route path='/forum' element={<Forum />} />
                <Route path='/links' element={<Links />} />
				<Route path='/*' element={<ErrorPage />} />
			</Routes>
		</main>
	)
}

export default Content