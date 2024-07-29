import React, { useState } from "react"
import { supabase } from "../supabase/supabase-client.ts"

function Login() {
	const [username, setUsername] = useState("")
	const [password, setPassword] = useState("")
	const [email, setEmail] = useState("")

	const handleSignIn = async (e: React.FormEvent) => {
		e.preventDefault()
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
						/>
					</div>
					<div className='label-and-input'>
						<label htmlFor='password'>Password: </label>
						<input
							type='password'
							id='password'
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>
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
						/>
					</div>
					<div className='label-and-input'>
						<label htmlFor='new-email'>Email: </label>
						<input
							type='text'
							id='new-email'
							placeholder='Georgie@example.com'
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
					</div>
					<div className='label-and-input'>
						<label htmlFor='new-password'>Password: </label>
						<input
							type='password'
							id='new-password'
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>
					<button type='submit'>Sign Up</button>
				</form>
			</section>
		</>
	)
}

export default Login
