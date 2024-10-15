import Contact from "./Contact"
import Map from "./Map"
import club from "../assets/wwclub1.jpeg"

function Home() {
	return (
		<>
			<section className='about-us'>
				<h2>About Us</h2>
				<div className='flex-across'>
					<img src={club}></img>
					<p>
						Greetings! We are a table-top gaming club based in Weymouth, Dorset. We play Necromunda,
						Saga, Oathmark, Stargrave, Frostgrave, Bolt Action, Chain of Command and more! We meet
						Wednesdays from 6pm at Wyke Regis Community Centre, Everyone welcome!
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
