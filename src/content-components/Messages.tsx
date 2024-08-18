import { useState, useEffect } from "react"
import { supabase } from "../supabase/supabase-client"
import { DemoTable } from "../utils/types"

function Message() {
	const [demoTable, setDemoTable] = useState<DemoTable[]>([])

	useEffect(() => {
		const fetchData = async () => {
			const { data, error } = await supabase.from("Demo_Table").select("*")

			if (error) {
				console.error(error)
			} else {
				setDemoTable(data as DemoTable[])
			}
		}

		fetchData()
	}, [])

	return (
		<>
			<table className='demoTab'>
				<thead>
					<tr>
						<th>Name</th>
						<th>Favourite Person</th>
					</tr>
				</thead>
				<tbody>
					{demoTable.map((item) => (
						<tr key={item.id}>
							<td>{item.name}</td>
							<td>{item.fave_warlord}</td>
						</tr>
					))}
				</tbody>
			</table>
		</>
	)
}

export default Message
