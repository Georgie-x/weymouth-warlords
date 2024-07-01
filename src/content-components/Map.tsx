import React from "react"

const Map: React.FC = () => {
	return (
		<>
			<iframe
				src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d72677.11291546085!2d-2.3847115247315536!3d50.59599346836208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4872f6dd78ecd06f%3A0x4f6ad9a99969ef90!2sWyke%20Regis%20Community%20%26%20Sports%20Association!5e0!3m2!1sen!2suk!4v1719353686393!5m2!1sen!2suk'
				max-width='360'
				min-width="320"
				height='260'
				style={{ border: 0 }}
				allowFullScreen={true}
				loading='lazy'
				referrerPolicy='no-referrer-when-downgrade'
			></iframe>
		</>
	)
}

export default Map
