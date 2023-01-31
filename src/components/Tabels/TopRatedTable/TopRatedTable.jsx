import React from 'react'
import { Table } from '../Table.styles'

const TopRatedTable = ({data}) => {
	return (
		<Table>
			<tbody>
				<tr>
					<th></th>
					<th>IMIĘ I NAZWISKO</th>
					<th>POZYCJA</th>
					<th>OCENA</th>
					<th>KATEGORIA</th>
					<th>KLUB</th>
				</tr>
				{data.map(player => {
					return (
						<tr key={player.name}>
							<td>
								<input type='checkbox' />
							</td>
							<td>{player.name}</td>
							<td>{player.position}</td>
							<td>{player.rating}</td>
							<td>{player.category}</td>
							<td>{player.club}</td>
						</tr>
					)
				})}
			</tbody>
		</Table>
	)
}

export default TopRatedTable