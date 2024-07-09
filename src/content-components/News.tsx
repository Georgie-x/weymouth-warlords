import Feedback from "./Feedback"

function News() {
	return (
		<>
			<section className='BWB-aug-24'>
				<h2>Event</h2>
				<div className='flex-across'>
					<h3>Next Event - Baron's War Bash - Sunday 18th August</h3>
					<img src='https://scontent-lhr8-2.xx.fbcdn.net/v/t39.30808-6/440150940_3626455394350393_8165794921620499645_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=75d36f&_nc_ohc=iP9gOMw-hrEQ7kNvgG8THFs&_nc_ht=scontent-lhr8-2.xx&oh=00_AYAKsq2-alWC0yucKT4kSLiC1_Tz9Wcd5-RZji1y-gvXqA&oe=6684F37F'></img>
				</div>
			</section>
			<section className='BWB-aug-24'>
				<h2>News</h2>
				<div className='flex-across'>
					<h3>New Website</h3>
					<p>
						Hello, I hope you like the Weymouth Warlords Website, if you have any problems or
						suggestions about the site please fill in the little feedback form
					</p>
					<Feedback />
				</div>
			</section>
		</>
	)
}

export default News
