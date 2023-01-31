import styled from 'styled-components'

export const Navbar = styled.div`
	position: absolute;
	top: 50%;
	left: 10px;
	transform: translateY(-50%);
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: 90vh;
	padding: 50px 25px;
	border-radius: 15px;
	background-color: #2d5a2d;
	font-size: 50px;
	color: white;
	z-index: 10;
	overflow: hidden;
	section {
		display: flex;
		flex-direction: column;
	}

	a {
		color: white;
	}
	.burger-menu {
		display: none;
	}

	.active-link {
		color: #2d5a2d;
		position: relative;

		::before {
			content: '';
			display: block;
			position: absolute;
			top: 6px;
			left: -10px;
			z-index: -1;
			width: 100px;
			height: 80px;
			border-top-left-radius: 25%;
			border-bottom-left-radius: 50%;
			background-color: white;
		}
	}

	@media (max-width: 1250px) {
		position: fixed;
		left: 30px;
	}
	@media (max-width: 730px) {
		height: 75px;
		padding: 10px 25px;
		font-size: 36px;
		top: 45px;
		left: 11px;
		.burger-menu {
			display: block;
			margin-bottom: 5px;
		}
		.active-link {
			::before {
				content: '';
				top: 6px;
				left: -10px;
				z-index: -1;
				width: 75px;
				height: 55px;
			}
		}
	}
`
