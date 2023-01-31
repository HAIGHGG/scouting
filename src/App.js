import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Root from './Root'
import Home from './pages/Home'
import Login from './pages/Login'
import Calendar from './pages/Calendar'
import Search from './pages/Search'
import Club from './pages/Club'
import Profile from './pages/Profile'
import Transfers from './pages/Transfers'

function App() {
	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route path='/' element={<Root />}>
				<Route index element={<Home />} />
				<Route path='/login' element={<Login />} />
				<Route path='/calendar' element={<Calendar />} />
				<Route path='/search' element={<Search />} />
				<Route path='/club' element={<Club />} />
				<Route path='/profile' element={<Profile />} />
				<Route path='/transfers' element={<Transfers />} />
			</Route>
		)
	)

	return (
		<div className='App'>
			<RouterProvider router={router} />
		</div>
	)
}

export default App
