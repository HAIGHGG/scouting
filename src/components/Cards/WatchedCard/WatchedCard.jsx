import { StyledCard } from '../Card.styles'
import React from 'react'
import WatchedTable from '../../Tabels/WatchedTable/WatchedTable'
import { useState } from 'react'

const WatchedCard = ({ data }) => {
	const [toggleState, setToggleState] = useState(1)

	const toggleTab = index => {
		setToggleState(index)
	}

	return (
		<StyledCard className='shadow'>
			<div className='shadow'>
				<div className={toggleState === 1 ? 'tab active-tab' : 'tab'} onClick={() => toggleTab(1)}>
					<h3>ZAWODNICY</h3>
				</div>
				<div className={toggleState === 2 ? 'tab active-tab' : 'tab'} onClick={() => toggleTab(2)}>
					<h3>WYDARZENIA</h3>
				</div>
			</div>
			<div className={toggleState === 1 ? 'content  active-content' : 'content'}>
				<WatchedTable data={data} />
			</div>
			<div className={toggleState === 2 ? 'content  active-content' : 'content'}>
				<p className='place-holder'>WYDARZENIA</p>
			</div>
		</StyledCard>
	)
}

export default WatchedCard