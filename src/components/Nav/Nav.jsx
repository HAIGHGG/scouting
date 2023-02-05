import React, { useState } from 'react'
import { Navbar } from './Nav.styles'
import { NavLink } from 'react-router-dom'
import { AiOutlineHome, AiOutlineCalendar, AiOutlineSearch } from 'react-icons/ai'
import { BsShield, BsPerson } from 'react-icons/bs'
import { TbArrowsLeftRight } from 'react-icons/tb'
import { BiLogOutCircle } from 'react-icons/bi'
import { GiHamburgerMenu } from 'react-icons/gi'

const Nav = () => {
	const [burgerMenuOpen, setBurgerMenuOpen] = useState(false)

	const handleLogout = () => {
		sessionStorage.removeItem('token')
		window.location.reload(true)
	}

	return (
		<Navbar className={burgerMenuOpen && 'burger-menu-active'}>
			<div className='burger-menu'>
				<GiHamburgerMenu onClick={() => setBurgerMenuOpen(!burgerMenuOpen)} />
			</div>
			<section>
				<NavLink
					to='/'
					className={({ isActive }) => isActive && 'active-link'}
					onClick={() => setBurgerMenuOpen(false)}>
					<AiOutlineHome />
				</NavLink>
				<NavLink
					to='/calendar'
					className={({ isActive }) => isActive && 'active-link'}
					onClick={() => setBurgerMenuOpen(false)}>
					<AiOutlineCalendar />
				</NavLink>
				<NavLink
					to='/search'
					className={({ isActive }) => isActive && 'active-link'}
					onClick={() => setBurgerMenuOpen(false)}>
					<AiOutlineSearch />
				</NavLink>
				<NavLink
					to='/club'
					className={({ isActive }) => isActive && 'active-link'}
					onClick={() => setBurgerMenuOpen(false)}>
					<BsShield />
				</NavLink>
				<NavLink
					to='/profile'
					className={({ isActive }) => isActive && 'active-link'}
					onClick={() => setBurgerMenuOpen(false)}>
					<BsPerson />
				</NavLink>
				<NavLink
					to='/transfers'
					className={({ isActive }) => isActive && 'active-link'}
					onClick={() => setBurgerMenuOpen(false)}>
					<TbArrowsLeftRight />
				</NavLink>
			</section>
			<NavLink>
				<BiLogOutCircle onClick={handleLogout} />
			</NavLink>
		</Navbar>
	)
}

export default Nav
