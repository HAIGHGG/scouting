import { StyledCard } from '../Card.styles'
import React from 'react'
import { useState } from 'react'

const BestElevenCard = () => {
	const [toggleState, setToggleState] = useState(1)

	const toggleTab = index => {
		setToggleState(index)
	}

	return (
		<StyledCard className='shadow'>
			<div className='shadow'>
				<div className={toggleState === 1 ? 'tab active-tab' : 'tab'} onClick={() => toggleTab(1)}>
					<h3>KRAJOWE</h3>
				</div>
				<div className={toggleState === 2 ? 'tab active-tab' : 'tab'} onClick={() => toggleTab(2)}>
					<h3>REGIONALNE</h3>
				</div>
			</div>
			<div className={toggleState === 1 ? 'content  active-content' : 'content'}>
				<div className='d-flex flex-column'>
					<div className='filter'>
						<span>KATEGORIA WIEKOWA: </span>
						<select>
							<option value='juniorzyStarsi'>Juniorzy starsi</option>
							<option value='juniorzyMlodsi'>Juniorzy młodsi</option>
							<option defaultValue value='trampkarze'>
								Trampkarze
							</option>
							<option value='mlodziki'>Młodziki</option>
							<option value='orliki'>Orliki</option>
						</select>
					</div>
					<img height={450} src='https://i.imgur.com/RKULSMz.png' alt='pitch' />
				</div>
			</div>
			<div className={toggleState === 2 ? 'content  active-content' : 'content'}>
				<div className='d-flex flex-column'>
					<div className='filter'>
						<span>WOJEWÓDZTWO: </span>
						<select>
							<option defaultValue value='pomorskie'>
								pomorskie
							</option>
							<option value='dolnoslaskie'>dolnośląskie</option>
							<option value='kujawskoPomorskie'>kujawsko-pomorskie</option>
							<option value='lubelskie'>lubelskie</option>
							<option value='lubuskie'>lubuskie</option>
							<option value='lodzkie'>łódzkie</option>
							<option value='malopolskie'>małopolskie</option>
							<option value='mazowieckie'>mazowieckie</option>
						</select>
					</div>
					<div className='filter'>
						<span>KATEGORIA WIEKOWA: </span>
						<select>
							<option value='juniorzyStarsi'>Juniorzy starsi</option>
							<option value='juniorzyMlodsi'>Juniorzy młodsi</option>
							<option defaultValue value='trampkarze'>
								Trampkarze
							</option>
							<option value='mlodziki'>Młodziki</option>
							<option value='orliki'>Orliki</option>
						</select>
					</div>
					<img height={450} src='https://i.imgur.com/RKULSMz.png' alt='pitch' />
				</div>
			</div>
		</StyledCard>
	)
}

export default BestElevenCard
