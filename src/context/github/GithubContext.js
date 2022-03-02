import { createContext, useReducer } from 'react'
import GithubReducer from './GithubReducer'

const GithubContext = createContext()

export const GithubProvider = ({ children }) => {
	const initialState = {
		users: [],
		loading: false
	}

	const [ state, dispatch ] = useReducer(GithubReducer, initialState)

	// Testing purpose
	const fetchUsers = async () => {
		setLoading()
		const response = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users`)

		const data = await response.json()

		dispatch({
			type: 'GET_USERS',
			payload: data
		})
	}

	// set loading to true
	const setLoading = () => dispatch({ type: 'SET_LOADING' })

	return (
		<GithubContext.Provider
			value={{
				users: state.users,
				loading: state.loading,
				fetchUsers,
				setLoading
			}}
		>
			{children}
		</GithubContext.Provider>
	)
}

export default GithubContext
