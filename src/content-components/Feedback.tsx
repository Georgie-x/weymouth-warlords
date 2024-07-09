function Feedback() {
	return (
		<form>
			<label htmlFor='feedback-name'>Name: </label>
			<input id='feedback-name' placeholder="e.g. Mr Warlord"></input>
            <label htmlFor='feedback-email'>Email: </label>
			<input id='feedback-email' placeholder="e.g. MrW@example.com"></input>
            <label htmlFor='feedback-message'>Feedback: </label>
			<input id='feedback-message' placeholder="Enter your feedback here"></input>
            <button type="submit">Submit</button>
		</form>
	)
}

export default Feedback
