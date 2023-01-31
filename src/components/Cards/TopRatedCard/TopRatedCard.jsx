import { StyledCard } from '../Card.styles'
import React from 'react'
import TopRatedTable from '../../Tabels/TopRatedTable/TopRatedTable'
import { useState } from 'react'

const TopRatedCard = ({ data }) => {
	const [toggleState, setToggleState] = useState(3)

	const toggleTab = index => {
		setToggleState(index)
	}

	return (
		<StyledCard className='shadow'>
			<div className='shadow'>
				<div className={toggleState === 1 ? 'tab active-tab' : 'tab'} onClick={() => toggleTab(1)}>
					<h3>JUNIORZY STARSI</h3>
				</div>
				<div className={toggleState === 2 ? 'tab active-tab' : 'tab'} onClick={() => toggleTab(2)}>
					<h3>JUNIORZY MŁODSI</h3>
				</div>
				<div className={toggleState === 3 ? 'tab active-tab' : 'tab'} onClick={() => toggleTab(3)}>
					<h3>TRAMPKARZE</h3>
				</div>
				<div className={toggleState === 4 ? 'tab active-tab' : 'tab'} onClick={() => toggleTab(4)}>
					<h3>MŁODZIKI</h3>
				</div>
				<div className={toggleState === 5 ? 'tab active-tab' : 'tab'} onClick={() => toggleTab(5)}>
					<h3>ORLIKI</h3>
				</div>
			</div>
			<div className={toggleState === 1 ? 'content  active-content' : 'content'}>
				<p className='place-holder'>JUNIORZY STARSI</p>
			</div>
			<div className={toggleState === 2 ? 'content  active-content' : 'content'}>
				<p className='place-holder'>JUNIORZY MŁODSI</p>
			</div>
			<div className={toggleState === 3 ? 'content  active-content' : 'content'}>
				<TopRatedTable data={data} />
			</div>
			<div className={toggleState === 4 ? 'content  active-content' : 'content'}>
				<p className='place-holder'>MŁODZIKI</p>
			</div>
			<div className={toggleState === 5 ? 'content  active-content' : 'content'}>
				<p className='place-holder'>ORLIKI</p>
			</div>
		</StyledCard>
	)
}

export default TopRatedCard
