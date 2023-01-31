import styled from 'styled-components'

export const Panel = styled.div`
	position: absolute;
    top: 10px;
    right: 100px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 300px;
	padding: 5px 10px;
	border-radius: 15px;
	box-shadow: 4px 4px 5px #929292;
	background-color: white;

	svg {
		font-size: 35px;
		color: #2d5a2d;
        cursor: pointer;
	}

	@media (max-width: 1250px) {
		right: 0;
	}

	@media (max-width: 425px) {
		width: 250px;
		font-size: 12px;
	}
`
