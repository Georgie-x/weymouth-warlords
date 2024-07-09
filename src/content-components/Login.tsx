function Login() {
	return (
		<>
			<section className='sign-in'>
				<h2>Member sign in</h2>
				<form>
					<div className='label-and-input'>
						<label htmlFor='username'>Username: </label>
						<input type='text' id='username' placeholder='Georgie'></input>
					</div>
					<div className='label-and-input'>
						<label htmlFor='username'>Password: </label>
						<input type='password' id='password'></input>
					</div>
					<button type='submit'>Sign In</button>
				</form>
			</section>
			<section className='sign-up'>
				<h2>Make an account</h2>
				<form>
					<div className='label-and-input'>
						<label htmlFor='new-username'>Username: </label>
						<input type='text' id='new-username' placeholder='Georgie'></input>
					</div>
					<div className='label-and-input'>
						<label htmlFor='new-email'>Email: </label>
						<input type='text' id='new-email' placeholder='Georgie@example.com'></input>
					</div>
					<div className='label-and-input'>
						<label htmlFor='password'>Password: </label>
						<input type='password' id='new-password'></input>
					</div>
					<button type='submit'>Sign Up</button>
				</form>
			</section>
		</>
	)
}

export default Login
