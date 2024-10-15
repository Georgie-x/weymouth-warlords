import { ChangeEvent, FormEvent, useState } from "react"
import { SignUpData } from "../utils/types"
import { validateEmail, validatePassword, validateUsername } from "../utils/validation"
import { supabase } from "../supabase/supabase-client"

function SignIn() {
	const [formData, setFormData] = useState<SignUpData>({ username: "", email: "", password: "" })
	const [message, setMessage] = useState<string>("")

	const handleEmail = (e: ChangeEvent<HTMLInputElement>) => {
		let email = e.target.value
		if (validateEmail(email)) {
			setFormData((prevState) => ({ ...prevState, email }))
			setMessage("")
		} else {
			setMessage("Enter a valid email address")
		}
	}

	const handlePassword = (e: ChangeEvent<HTMLInputElement>) => {
		let password = e.target.value
		if (validatePassword(password)) {
			setFormData((prevState) => ({ ...prevState, password }))
			setMessage("")
		} else {
			setMessage("Password must be 8+ characters")
		}
	}

	const handleUsername = (e: ChangeEvent<HTMLInputElement>) => {
		let username = e.target.value
		if (validateUsername(e.target.value)) {
			setFormData((prevState) => ({ ...prevState, username }))
			setMessage("")
		} else {
			setMessage("Username should be 2 to 20 alphanumeric characters")
		}
	}

	const handleSignIn = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		try {
			const { data, error } = await supabase.auth.signUp({
				email: formData.email,
				password: formData.password,
			})

			if (error) {
				setMessage(error.message)
			} else {
				console.log("Sign up successful:", data)
			}
		} catch (error) {
			setMessage("error has occurred")
		}
	}

	return (
		<section className='sign-up'>
			<form onSubmit={handleSignIn}>
				<label htmlFor='email'>Email: </label>
				<input
					type='email'
					id='email'
					name='email'
					placeholder='Georgie@example.com'
					value={formData.email}
					onBlur={handleEmail}
				/>
				<label htmlFor='username'>Username: </label>
				<input
					type='text'
					id='username'
					name='username'
					placeholder='Georgie'
					value={formData.username}
					onBlur={handleUsername}
				/>
				<label htmlFor='password'>Password: </label>
				<input
					type='password'
					id='password'
					name='password'
					placeholder='Georgie@example.com'
					value={formData.password}
					onBlur={handlePassword}
				/>
				{message}
				<button type='submit'>Submit</button>
			</form>
		</section>
	)
}

export default SignIn
