import { Messages } from "."

function Forum() {
	return (
		<section className="forum">
			<h2>Forum</h2>
			<Messages />
			<div className="message-input"></div>
		</section>
	)
}

export default Forum