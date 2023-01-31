import styled from 'styled-components'

export const LayoutHome = styled.div`
	height: 100vh;
	padding: 75px 100px 75px 150px;
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: 1fr 1fr 1fr;
	gap: 20px 20px;
	grid-template-areas:
		'first third'
		'first third'
		'second third';

	.first {
		grid-area: first;
	}
	.second {
		grid-area: second;
	}
	.third {
		margin-top: auto;
		grid-area: third;
	}

	@media (max-height: 820px) {
		padding: 50px 100px 45px 150px;
	}

	@media (max-width: 1250px) {
		grid-template-columns: 1fr;
		grid-template-rows: 1fr 1fr 1fr;
		gap: 20px 20px;
		grid-template-areas:
			'first'
			'second'
			'third';
	}

	@media (max-width: 730px) {
		padding-top: 100px;
		padding-left: 25px;
		padding-right: 25px;

		section {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
		}
	}
	@media (max-width: 425px) {
		padding-top: 100px;
		padding-left: 5px;
		padding-right: 5px;
	}
`
