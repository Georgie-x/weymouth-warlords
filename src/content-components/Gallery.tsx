import { ChangeEvent, useState } from "react"
import { demo, demo2 } from "../utils/db"

function Gallery() {
	const [album, setAlbum] = useState<string[]>(demo)

	const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
		const selectedValue = e.target.value
		if (selectedValue === "demo") {
			setAlbum(demo)
		} else if (selectedValue === "demo2") {
			setAlbum(demo2)
		}
	}

	return (
		<section className='gallery'>
			<h2>Gallery</h2>
			<div className='flex'>
				<label htmlFor='gallery'>Choose an album: </label>
				<select
					className='select'
					name='gallery'
					id='gallery'
					value={album}
					onChange={handleChange}
				>
					<option value='demo'>Rad Pic Demo</option>
					<option value='demo2'>Ace Pic Demo 2</option>
				</select>
			</div>
			<div className='image-grid'>
				{album.map((imagePath, index) => (
					<img key={index} src={imagePath} alt={`Image ${index + 1}`} />
				))}
			</div>
		</section>
	)
}

export default Gallery
