import { useState } from "react"
import { useUser } from "../contexts/User-context"
import { supabase } from "../supabase/supabase-client"

function MessageInput() {
	const [message, setMessage] = useState("")
	const [error, setError] = useState<string | null>(null)
	const { user } = useUser()

	const handleMessagePost = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		setError(null)

		if (!message.trim()) {
			setError("Message cannot be empty")
			return
		}

		if (!user) {
			setError("You must be logged in to post a message")
			return
		}

		try {
			const { error: supabaseError } = await supabase
				.from("messages")
				.insert({ user_id: user.id, message_body: message.trim() })

			if (supabaseError) throw supabaseError

			setMessage("")
			console.log("Message posted successfully")
		} catch (err) {
			console.error("Error posting message:", err)
			setError("Failed to post message. Please try again.")
		}
	}

	return (
		<form onSubmit={handleMessagePost}>
			<label htmlFor='forum-message'>Post Message: </label>
			<input
				id='forum-message'
				value={message}
				onChange={(e) => setMessage(e.target.value)}
				placeholder='Hi'
			/>
			<button type='submit'>Submit</button>
			{error && <p style={{ color: "red" }}>{error}</p>}
		</form>
	)
}

export default MessageInput
