import styled from 'styled-components'

export const StyledCard = styled.div`
	padding: 10px;
	background-color: #2d5a2d;
	border-radius: 15px;

	div {
		display: flex;
		justify-content: space-around;
		align-items: center;

		h3 {
			font-size: 18px;
			text-align: center;
			width: 100%;
			margin: 5px;
			padding: 0 20px;
		}
	}

	img {
		margin: 25px 0;
	}

	.tab {
		background-color: #2d5a2d;
		color: white;
		width: 100%;
		cursor: pointer;
	}

	.active-tab {
		position: relative;
		color: #6f6f6e;
		height: 100%;
		border-top-left-radius: 15px;
		border-top-right-radius: 15px;
		background-color: white;

		::after {
			content: '';
			display: block;
			position: absolute;
			top: 82%;
			right: 0;
			height: 30px;
			width: 100%;
			background-color: white;
		}
	}
	.content {
		width: 100%;
		display: none;
	}
	.active-content {
		display: block;
		border-radius: 15px;
		padding: 10px 10px 1px 10px;
		background-color: white;
	}
	.place-holder {
		text-align: center;
		margin: 80px 0;
	}

	.filter {
		margin: 10px 0;

		select {
			width: 140px;
			margin-left: 10px;
			padding: 5px;
			border-radius: 10px;
			border: none;
			box-shadow: 1px 1px 10px #949494;
		}
	}

	.pitch {
		position: relative;
		color: white;
		font-size: 54px;
		.shirt-number {
			color: #2d5a2d;
			font-size: 16px;
			font-weight: bold;
			position: absolute;
		}
		.shirt {
			position: absolute;
			svg {
				filter: drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4));
			}
		}
		.shirt-1 {
			bottom: 60px;
		}
		.shirt-2 {
			bottom: 150px;
			left: 40px;
		}
		.shirt-3 {
			bottom: 130px;
			left: 110px;
		}
		.shirt-4 {
			bottom: 130px;
			right: 110px;
		}
		.shirt-5 {
			bottom: 150px;
			right: 40px;
		}
		.shirt-6 {
		}
		.shirt-7 {
			bottom: 260px;
			left: 70px;
		}
		.shirt-8 {
			bottom: 260px;
			right: 70px;
		}
		.shirt-9 {
			bottom: 340px;
			left: 100px;
		}
		.shirt-10 {
			bottom: 340px;
			right: 100px;
		}
		.shirt-11 {
			bottom: 380px;
		}
	}

	@media (max-width: 730px) {
		.content {
			height: auto;
		}
		div {
			h3 {
				padding: 0;
			}
		}
	}

	@media (max-width: 425px) {
		width: 370px;
		margin-bottom: 10px;
		img {
			width: 350px;
			height: 450px;
		}
		div {
			h3 {
				font-size: 12px;
			}
		}

		.active-content {
			padding: 20px 5px;
		}
		.active-tab {
			::after {
				height: 20px;
			}
		}
	}
`
