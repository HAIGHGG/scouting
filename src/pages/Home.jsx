import React from 'react'
import { LayoutHome } from '../components/Layouts/LayoutHome'
import watched from '../watched.json'
import toprated from '../toprated.json'
import WatchedCard from '../components/Cards/WatchedCard/WatchedCard'
import TopRatedCard from '../components/Cards/TopRatedCard/TopRatedCard'
import BestElevenCard from '../components/Cards/BestElevenCard/BestElevenCard'

const Home = () => {
	return (
		<LayoutHome>
			<section className='first'>
				<h2>OBSERWOWANIE</h2>
				<WatchedCard data={watched} />
			</section>
			<section className='second'>
				<h2>NAJWYŻEJ OCENIANI</h2>
				<TopRatedCard data={toprated} />
			</section>
			<section className='third'>
				<h2>NAJLEPSZE JEDENASTKI</h2>
				<BestElevenCard />
			</section>
		</LayoutHome>
	)
}

export default Home
