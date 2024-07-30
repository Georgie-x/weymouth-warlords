import { validateEmail, validatePassword, validateUsername } from "../utils/validation"

describe("Validation Functions", () => {
	describe("validateEmail", () => {
		test("should return true for valid email", () => {
			expect(validateEmail("test@example.com")).toBe(true)
		})

		test("should return false for invalid email", () => {
			expect(validateEmail("test@.com")).toBe(false)
			expect(validateEmail("test.com")).toBe(false)
			expect(validateEmail("")).toBe(false)
		})
	})
})

describe("validateUsername", () => {
    test("should return true for valid username", () => {
        expect(validateUsername("georgie")).toBe(true)
    })

    test("should return false for invalid username", () => {
        expect(validateUsername("ge")).toEqual(false)
        expect(validateUsername("georgiegeorgiegeorgie")).toEqual(false)
        expect(validateUsername("georgie!")).toEqual(false)
        expect(validateUsername("")).toEqual(false)
    })
})

describe("validatePassword", () => {
    test("should return true for valid password", () => {
        expect(validatePassword("georgie1")).toBe(true)
    })

    test("should return false for invalid username", () => {
        expect(validatePassword("short")).toEqual(false)
        expect(validatePassword("")).toEqual(false)
    })
})