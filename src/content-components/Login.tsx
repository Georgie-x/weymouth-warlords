import { useState } from "react"
import { supabase } from "../supabase/supabase-client"
import { validateEmail, validatePassword } from "../utils/validation"

function SignIn() {
	const [formData, setFormData] = useState({ email: "", password: "" })
	const [errors, setErrors] = useState({})

	const handleChange = (e) => {
		const { name, value } = e.target
		setFormData((prev) => ({ ...prev, [name]: value }))
	}

	const validateForm = () => {
		const newErrors = {}
		if (!validateEmail(formData.email)) newErrors.email = "Invalid email format"
		if (!validatePassword(formData.password))
			newErrors.password = "Password must be at least 6 characters long"
		setErrors(newErrors)
		return Object.keys(newErrors).length === 0
	}

	const handleSignIn = async (e) => {
		e.preventDefault()
		if (!validateForm()) return

		try {
			const { data, error } = await supabase.auth.signInWithPassword(formData)
			if (error) throw error
			console.log("Signed in user:", data.user)
		} catch (error) {
			console.error("Error signing in:", error)
			setErrors({ form: error.message })
		}
	}

	return (
		<section className='sign-in'>
			<h2>Member sign in</h2>
			<form onSubmit={handleSignIn}>
				<div className='label-and-input'>
					<label htmlFor='email'>Email: </label>
					<input
						type='email'
						id='email'
						name='email'
						placeholder='Georgie@example.com'
						value={formData.email}
						onChange={handleChange}
					/>
				</div>
				{errors.email && <p className='error'>{errors.email}</p>}
				<div className='label-and-input'>
					<label htmlFor='password'>Password: </label>
					<input
						type='password'
						id='password'
						name='password'
						value={formData.password}
						onChange={handleChange}
					/>
				</div>
				{errors.password && <p className='error'>{errors.password}</p>}
				{errors.form && <p className='error'>{errors.form}</p>}
				<button type='submit'>Sign In</button>
			</form>
		</section>
	)
}

export default SignIn
