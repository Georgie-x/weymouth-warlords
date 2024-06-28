import Contact from "./Contact"
import Map from "./Map"

function Home() {
	return (
		<>
			<section className='about-us'>
				<h2>About Us</h2>
				<div className='flex-across'>
					<img className='large-image' src='/public/assets/wwclub1.jpeg'></img>
					<p>
						Greetings! We are a table-top gaming club based in Weymouth, Dorset. We play Necromunda,
						Saga, Oathmark, Stargrave, Frostgrave, Bolt action, Chain of Command and more! We meet
						Sundays midday at Wyke Regis Community Centre, session costs £5.00, Everyone welcome!
					</p>
				</div>
			</section>

			<section className='club-details'>
				<h2>Club Details</h2>
				<div className='flex-across'>
					<Contact />
					<Map />
				</div>
			</section>

			<section className='club-history'>
				<h2>Club History</h2>
				<p>The club has been running since ... la la la lots to say</p>
			</section>
		</>
	)
}

export default Home
