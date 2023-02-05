import { StyledCard } from '../Card.styles'
import React from 'react'
import { useState } from 'react'
import { FaTshirt } from 'react-icons/fa'

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
					<div className='filter' style={{ marginTop: '78px' }}>
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
					<div className='pitch'>
						<div className='shirt shirt-1'>
							<FaTshirt />
							<span className='shirt-number'>1</span>
						</div>
						<div className='shirt shirt-2'>
							<FaTshirt />
							<span className='shirt-number'>2</span>
						</div>
						<div className='shirt shirt-3'>
							<FaTshirt />
							<span className='shirt-number'>3</span>
						</div>
						<div className='shirt shirt-4'>
							<FaTshirt />
							<span className='shirt-number'>4</span>
						</div>
						<div className='shirt shirt-5'>
							<FaTshirt />
							<span className='shirt-number'>5</span>
						</div>
						<div className='shirt shirt-6'>
							<FaTshirt />
							<span className='shirt-number'>6</span>
						</div>
						<div className='shirt shirt-7'>
							<FaTshirt />
							<span className='shirt-number'>7</span>
						</div>
						<div className='shirt shirt-8'>
							<FaTshirt />
							<span className='shirt-number'>8</span>
						</div>
						<div className='shirt shirt-9'>
							<FaTshirt />
							<span className='shirt-number'>9</span>
						</div>
						<div className='shirt shirt-10'>
							<FaTshirt />
							<span className='shirt-number'>10</span>
						</div>
						<div className='shirt shirt-11'>
							<FaTshirt />
							<span className='shirt-number'>11</span>
						</div>

						<img height={450} src='https://i.imgur.com/4JfvfrB.png' alt='pitch' />
					</div>
				</div>
			</div>
			<div className={toggleState === 2 ? 'content  active-content' : 'content'}>
				<div className='d-flex flex-column'>
					<div className='filter' style={{ marginTop: '25px' }}>
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
					<div className='pitch'>
						<div className='shirt shirt-1'>
							<FaTshirt />
							<span className='shirt-number'>1</span>
						</div>
						<div className='shirt shirt-2'>
							<FaTshirt />
							<span className='shirt-number'>2</span>
						</div>
						<div className='shirt shirt-3'>
							<FaTshirt />
							<span className='shirt-number'>3</span>
						</div>
						<div className='shirt shirt-4'>
							<FaTshirt />
							<span className='shirt-number'>4</span>
						</div>
						<div className='shirt shirt-5'>
							<FaTshirt />
							<span className='shirt-number'>5</span>
						</div>
						<div className='shirt shirt-6'>
							<FaTshirt />
							<span className='shirt-number'>6</span>
						</div>
						<div className='shirt shirt-7'>
							<FaTshirt />
							<span className='shirt-number'>7</span>
						</div>
						<div className='shirt shirt-8'>
							<FaTshirt />
							<span className='shirt-number'>8</span>
						</div>
						<div className='shirt shirt-9'>
							<FaTshirt />
							<span className='shirt-number'>9</span>
						</div>
						<div className='shirt shirt-10'>
							<FaTshirt />
							<span className='shirt-number'>10</span>
						</div>
						<div className='shirt shirt-11'>
							<FaTshirt />
							<span className='shirt-number'>11</span>
						</div>

						<img height={450} src='https://i.imgur.com/4JfvfrB.png' alt='pitch' />
					</div>
				</div>
			</div>
		</StyledCard>
	)
}

export default BestElevenCard
