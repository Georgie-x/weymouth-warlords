import { ChangeEvent, MouseEvent, useState } from "react"
import { SignUpData } from "../utils/types"
import { validateEmail, validatePassword } from "../utils/validation"
import { supabase } from "../supabase/supabase-client"
import construct from "../assets/construc.png"

function LogIn() {
	const [formData, setFormData] = useState<SignUpData>({ email: "", password: "" })
	const [message, setMessage] = useState<string>("")

	const handleEmail = (e: ChangeEvent<HTMLInputElement>) => {
		let email = e.target.value
		setFormData((prevState) => ({ ...prevState, email }))
	}
	const handlePassword = (e: ChangeEvent<HTMLInputElement>) => {
		let password = e.target.value
		setFormData((prevState) => ({ ...prevState, password }))
	}

	const handleSignUp = async (e: MouseEvent<HTMLButtonElement>) => {
		e.preventDefault()

		if (!validateEmail(formData.email)) {
			setMessage("Please enter a valid email address")
			return
		}
		if (!validatePassword(formData.password)) {
			setMessage("Password should be 8+ characters")
			return
		}

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
			setMessage("An error has occurred")
		}
	}

	const handleSignIn = async (e: MouseEvent<HTMLButtonElement>) => {
		e.preventDefault()
		if (!validateEmail(formData.email)) {
			setMessage("Please enter a valid email address")
			return
		}
		if (!validatePassword(formData.password)) {
			setMessage("Password should be 8+ characters")
			return
		}
		try {
			const { data, error } = await supabase.auth.signInWithPassword({
				email: formData.email,
				password: formData.password,
			})

			if (error) {
				setMessage(error.message)
			} else {
				console.log("Sign in successful:", data)
			}
		} catch (error) {
			setMessage("An error has occurred")
		}
	}

	return (
		<section className='sign-in'>
			<h2>Login</h2>
			<img className='construction' src={construct}></img>
			{/* <form onSubmit={(e) => e.preventDefault()}>
					<label htmlFor='email'>Email: </label>
					<input
						type='email'
						id='email'
						name='email'
						placeholder='Georgie@example.com'
						value={formData.email}
						onChange={handleEmail}
					/>
					<label htmlFor='password'>Password: </label>
					<input
						type='password'
						id='password'
						name='password'
						placeholder='Enter your password'
						value={formData.password}
						onChange={handlePassword}
					/>

					<button type='button' onClick={handleSignUp}>
						Sign Up
					</button>
					<button type='button' onClick={handleSignIn}>
						Sign In
					</button>
					<br />
					{message}
				</form> */}
		</section>
	)
}

export default LogIn
