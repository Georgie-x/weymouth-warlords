import { MessageInput, Messages } from "."
import construc from "../assets/construc.png"

function Forum() {
	return (
				<section className='forum'>
					<h2>Forum</h2><img className="construction" src={construc}></img>
					{/* <Messages />
					<MessageInput /> */}
				</section>
		
	)
}

export default Forum
