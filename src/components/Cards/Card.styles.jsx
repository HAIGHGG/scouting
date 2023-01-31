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
		}
	}

	img {
		margin-top: 25px;
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
		height: 100%;
		display: none;
	}
	.active-content {
		display: block;
		border-radius: 15px;
		padding: 20px 10px;
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

	@media (max-width: 730px) {
		.content {
			height: auto;
		}
	}

	@media (max-width: 425px) {
		width: 370px;
		margin-bottom: 10px;
		img {
			width: 300px;
			height: 300px;
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
