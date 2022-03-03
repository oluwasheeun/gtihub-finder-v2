import { createContext, useReducer } from 'react'
import GithubReducer from './GithubReducer'

const GithubContext = createContext()

export const GithubProvider = ({ children }) => {
	const initialState = {
		users: [],
		user: {},
		repos: [],
		loading: false
	}

	const [ state, dispatch ] = useReducer(GithubReducer, initialState)

	// Get search results
	const searchUsers = async (text) => {
		setLoading()

		const params = new URLSearchParams({ q: text })

		const response = await fetch(`${process.env.REACT_APP_GITHUB_URL}/search/users?${params}`)

		const { items } = await response.json()

		dispatch({
			type: 'GET_USERS',
			payload: items
		})
	}

	// Get a single user
	const getUser = async (login) => {
		setLoading()

		const response = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users/${login}`)

		if (response.status === 404) {
			window.location = '/notfound'
		} else {
			const data = await response.json()

			dispatch({
				type: 'GET_USER',
				payload: data
			})
		}
	}

	// Get user repos
	const getUserRepos = async (login) => {
		setLoading()

		const params = new URLSearchParams({ sort: 'created', per_page: 10 })

		const response = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users/${login}/repos?${params}`)

		const data = await response.json()

		dispatch({
			type: 'GET_REPOS',
			payload: data
		})
	}

	// Clear users from state
	const clearUsers = () => dispatch({ type: 'CLEAR_USERS' })

	// set loading to true
	const setLoading = () => dispatch({ type: 'SET_LOADING' })

	return (
		<GithubContext.Provider
			value={{
				...state,
				searchUsers,
				getUser,
				getUserRepos,
				clearUsers,
				setLoading
			}}
		>
			{children}
		</GithubContext.Provider>
	)
}

export default GithubContext
