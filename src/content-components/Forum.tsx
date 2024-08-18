import { MessageInput, Messages } from "."

function Forum() {
	return (
		<section className="forum">
			<h2>Forum</h2>
			<Messages />
			<MessageInput />
		</section>
	)
}

export default Forum