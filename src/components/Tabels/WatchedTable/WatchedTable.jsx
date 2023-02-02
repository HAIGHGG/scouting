import React from 'react'
import { DatatableWrapper, TableBody, TableHeader } from 'react-bs-datatable'
import { Table } from 'react-bootstrap'

const headers = [
	{ title: 'IMIĘ I NAZWISKO', prop: 'name' },
	{ title: 'POZYCJA', prop: 'position' },
	{ title: 'OCENA', prop: 'rating' },
	{ title: 'KATEGORIA', prop: 'category' },
	{ title: 'KLUB', prop: 'club' },
]

const WatchedTable = ({ data }) => {
	return (
		<DatatableWrapper body={data} headers={headers}>
			<Table>
				<TableHeader />
				<TableBody />
			</Table>
		</DatatableWrapper>
	)
}

export default WatchedTable
