import { createContext, useContext, useState, useEffect, ReactNode } from "react"
import { User } from "@supabase/supabase-js"
import { supabase } from "../supabase/supabase-client"

interface UserContextType {
	user: User | null
	username: string | null
	avatar: string | null
	loading: boolean
}

const UserContext = createContext<UserContextType | undefined>(undefined)

export function UserProvider({ children }: { children: ReactNode }) {
	const [user, setUser] = useState<User | null>(null)
	const [username, setUsername] = useState<string | null>(null)
	const [avatar, setAvatar] = useState<string | null>(null)
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		const fetchSession = async () => {
			const {
				data: { session },
			} = await supabase.auth.getSession()
			setUser(session?.user ?? null)
			if (session?.user) {
				await fetchUserProfile(session.user.id)
			}
			setLoading(false)
		}

		fetchSession()

		const { data: authListener } = supabase.auth.onAuthStateChange(async (_, session) => {
			setUser(session?.user ?? null)
			if (session?.user) {
				await fetchUserProfile(session.user.id)
			} else {
				setUsername(null)
				setAvatar(null)
			}
			setLoading(false)
		})

		return () => {
			authListener.subscription.unsubscribe()
		}
	}, [])

	async function fetchUserProfile(userId: string) {
		const { data, error } = await supabase
			.from("profiles")
			.select("username, avatar_url")
			.eq("id", userId)
			.single()

		if (error) {
			console.error("Error fetching user profile:", error)
		} else if (data) {
			setUsername(data.username)
			setAvatar(data.avatar_url)
		}
	}

	const value = {
		user,
		username,
		avatar,
		loading,
	}

	return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

export function useUser() {
	const context = useContext(UserContext)
	if (context === undefined) {
		throw new Error("useUser must be used within a UserProvider")
	}
	return context
}
