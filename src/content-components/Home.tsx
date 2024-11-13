import Contact from "./Contact"
import Map from "./Map"
import club from "../assets/wwclub1.jpeg"


function Home() {
	return (
		<>
			<section className='about-us'>
				<h2>About Us</h2>
				<p>
					Weymouth Warlords is an active gaming community seeking new members in Weymouth, Dorset. We play many
					war games, tabletop games and role playing games. We have a large selection of mats and
					terrain available for members to use, wild west to sci-fi, 15mm to 28mm. Games
					currently played are: Frostgrave, Stargrave, Necromunda, Saga, Barons War, Chain of
					Command, Battlegroup, Bloodbowl, Gaslands and more.
				</p>
				
				<div className='flex-across'>
					<figure><img src={club}></img></figure>
					
				</div>
				<p>
					We play each Wednesday from 6pm - 10pm at Wyke Regis Community Centre, the club maintains an
					open and inclusive atmosphere and are willing to try any game a visitor may bring. First
					visit is free then £5 a week thereafter. Everyone welcome! Please come along or <a href="mailto:Horobin815@sky.com">get in touch</a> if you have any questions.
				</p>
			</section>

			<section className='club-details'>
				<h2>Club Details</h2>
				<div className='flex-across'>
					<Contact />
					<Map />
				</div>
			</section>
		</>
	)
}

export default Home
