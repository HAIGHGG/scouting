import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'


const Login = ({ setToken }) => {
	const [login, setLogin] = useState()
	const [pass, setPass] = useState()

	const handleSubmit = async e => {
		e.preventDefault()
		if (login === 'admin@admin.com' && pass === 'admin') {
			setToken({token: "test123"})
		}
	}

	return (
		<div className='vw-100 vh-100 d-flex flex-column justify-content-center align-items-center'>
			<Container className='shadow p-0 rounded overflow-hidden login-container' >
				<h1 className='text-center text-uppercase bg-success text-light'>Logowanie</h1>
				<Form onSubmit={handleSubmit} className='p-5'>
					<Form.Group className='mb-3' controlId='formBasicEmail'>
						<Form.Label>Login : </Form.Label>
						<Form.Control
							value={login}
							onChange={e => setLogin(e.target.value)}
							type='email'
							placeholder='adres@email.com'
						/>
					</Form.Group>

					<Form.Group className='mb-3' controlId='formBasicPassword'>
						<Form.Label>Hasło : </Form.Label>
						<Form.Control value={pass} onChange={e => setPass(e.target.value)} type='password' placeholder='********' />
					</Form.Group>
					<div className='text-center'>
						<Button className='mb-3 bg-success' variant='primary' type='submit'>
							Zaloguj
						</Button>
					</div>
					<Form.Group className='mb-3' controlId='formBasicCheckbox'>
						<Form.Check type='checkbox' label='Zapamiętaj mnie' />
					</Form.Group>
				</Form>
			</Container>
			<img
				className='mt-5'
				width={150}
				height={150}
				src='https://www.escouting.pl/wp-content/uploads/2022/06/LOGO_GREEN-300x300.png'
				alt='logo'
			/>
		</div>
	)
}



export default Login
