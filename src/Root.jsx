
import { Outlet } from 'react-router-dom'
import Login from './pages/Login'
import useToken from './components/useToken'
import Nav from './components/Nav/Nav'
import UserPanel from './components/UserPanel/UserPanel'

const Root = () => {
	const { token, setToken } = useToken()

	if (!token) {
		return <Login setToken={setToken} />
	}
	return (
		<>
			<div className='wrapper'>
				<Nav />
				<UserPanel />
				<div>
					<Outlet />
				</div>
			</div>
		</>
	)
}

export default Root
