  
import { ADD_USER } from '../actions/userActions'

const initial_state = {
	data: []
}

export const userReducer = (state = initial_state, action) => {
	switch (action.type) {
		case ADD_USER:
			return {
				...state
			}
		default:
			return state
	}
}