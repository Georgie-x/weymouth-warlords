import React, { useState } from "react"
import { supabase } from "../supabase/supabase-client.ts"
import { validateEmail, validatePassword, validateUsername } from "../utils/validation.ts"

function Login() {
	const [username, setUsername] = useState("")
	const [password, setPassword] = useState("")
	const [email, setEmail] = useState("")
	const [emailError, setEmailError] = useState("")
	const [passwordError, setPasswordError] = useState("")
	const [usernameError, setUsernameError] = useState("")

	const handleEmailBlur = () => {
		if (!validateEmail(email)) {
			setEmailError("Invalid email format")
		} else {
			setEmailError("")
		}
	}

	const handleUsernameBlur = () => {
		if (!validateUsername(username)) {
			setUsernameError(
				"Username must be 3-20 characters long and contain only letters, numbers, or underscores"
			)
		} else {
			setUsernameError("")
		}
	}

	const handlePasswordBlur = () => {
		if (!validatePassword(password)) {
			setPasswordError("Password must be at least 6 characters long")
		} else {
			setPasswordError("")
		}
	}

	const handleSignIn = async (e: React.FormEvent) => {
		e.preventDefault()
		// Validate email and password
		if (!validateEmail(email)) {
			setEmailError("Invalid email format")
		} else {
			setEmailError("")
		}
		if (!validatePassword(password)) {
			setPasswordError("Password must be at least 6 characters long")
		} else {
			setPasswordError("")
		}
		if (!validateEmail(email) || !validatePassword(password)) {
			return
		}
		// Proceed with sign-in
		const { data, error } = await supabase.auth.signInWithPassword({
			email,
			password,
		})
		if (error) {
			console.error("Error signing in:", error)
		} else {
			console.log("Signed in user:", data.user)
		}
	}

	const handleSignUp = async (e: React.FormEvent) => {
		e.preventDefault()
		if (!validateEmail(email)) {
			setEmailError("Invalid email format")
		} else {
			setEmailError("")
		}
		if (!validateUsername(username)) {
			setUsernameError(
				"Username must be 3-20 characters long and contain only letters, numbers, or underscores"
			)
		} else {
			setUsernameError("")
		}
		if (!validatePassword(password)) {
			setPasswordError("Password must be at least 6 characters long")
		} else {
			setPasswordError("")
		}
		if (!validateEmail(email) || !validateUsername(username) || !validatePassword(password)) {
			return
		}
		// Proceed with sign-up
		const { data, error } = await supabase.auth.signUp({
			email,
			password,
			options: {
				data: {
					username,
				},
			},
		})
		if (error) {
			console.error("Error signing up:", error)
		} else {
			console.log("Signed up user:", data.user)
		}
	}

	return (
		<>
			<section className='sign-in'>
				<h2>Member sign in</h2>
				<form onSubmit={handleSignIn}>
					<div className='label-and-input'>
						<label htmlFor='username'>Email: </label>
						<input
							type='text'
							id='username'
							placeholder='Georgie@example.com'
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							onBlur={handleEmailBlur}
						/>
					</div>
					{emailError && <p className='error'>{emailError}</p>}
					<div className='label-and-input'>
						<label htmlFor='password'>Password: </label>
						<input
							type='password'
							id='password'
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							onBlur={handlePasswordBlur}
						/>
					</div>
					{passwordError && <p className='error'>{passwordError}</p>}
					<button type='submit'>Sign In</button>
				</form>
			</section>
			<section className='sign-up'>
				<h2>Make an account</h2>
				<form onSubmit={handleSignUp}>
					<div className='label-and-input'>
						<label htmlFor='new-username'>Username: </label>
						<input
							type='text'
							id='new-username'
							placeholder='Georgie'
							value={username}
							onChange={(e) => setUsername(e.target.value)}
							onBlur={handleUsernameBlur}
						/>
					</div>
					{usernameError && <p className='error'>{usernameError}</p>}
					<div className='label-and-input'>
						<label htmlFor='new-email'>Email: </label>
						<input
							type='text'
							id='new-email'
							placeholder='Georgie@example.com'
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							onBlur={handleEmailBlur}
						/>
					</div>
					{emailError && <p className='error'>{emailError}</p>}
					<div className='label-and-input'>
						<label htmlFor='new-password'>Password: </label>
						<input
							type='password'
							id='new-password'
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							onBlur={handlePasswordBlur}
						/>
					</div>
					{passwordError && <p className='error'>{passwordError}</p>}
					<button type='submit'>Sign Up</button>
				</form>
			</section>
		</>
	)
}

export default Login
