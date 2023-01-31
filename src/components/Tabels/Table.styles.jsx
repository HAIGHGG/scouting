import styled from 'styled-components'

export const Table = styled.table`
	width: 100%;
	color: #6f6f6e;

	tr:nth-of-type(even) {
		background-color: #bee6bd;
	}

    th{
        text-align: center;
    }

	td {
		padding: 5px;
		white-space: nowrap;
	}

	@media (max-width: 425px) {
		td {
			white-space: normal;
		}
	}
`
