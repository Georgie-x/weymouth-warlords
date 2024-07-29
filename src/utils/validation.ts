export const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
}

export const validateUsername = (username: string): boolean => {
    const minLength = 3
    const maxLength = 20
    const usernameRegex = /^[a-zA-Z0-9_]+$/
    return username.length >= minLength && username.length <= maxLength && usernameRegex.test(username)
}

export const validatePassword = (password: string): boolean => {
    const minLength = 6
    return password.length >= minLength
}
