import { Routes, Route, Navigate } from "react-router-dom"
import { ErrorPage, Events, Forum, Home, Gallery, Links } from "../content-components"
import { Login } from "./index"
import Profile from "../content-components/Profile" // Adjust the path as needed
import { useUser } from "../contexts/User-context"

function Content() {
	const { user } = useUser()

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
					<Route path='/login' element={user ? <Navigate to='/profile' /> : <Login />} />
					<Route path='/profile' element={user ? <Profile /> : <Navigate to='/login' />} />
					<Route path='/*' element={<ErrorPage />} />
				</Routes>
			</main>
		</div>
	)
}

export default Content
