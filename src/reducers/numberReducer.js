import { ADD_NUMBER, ADD_RANDOM_NUMBER, REMOVE_NUMBER } from '../actions/types'

const initialState = {
	numbers: [1,2,3]
}
export default (state = initialState, action) => {
	console.log(`${action.type} reducer`)
	switch (action.type) {
		case ADD_RANDOM_NUMBER:
			return {
				...state,
				numbers: [...state.numbers, action.payload]
			}
		case ADD_NUMBER:
			return {
				...state,
				numbers: [...state.numbers, action.payload]
			}
		case REMOVE_NUMBER:
			return {
				...state,
				numbers: state.numbers.filter(n => n !== action.payload)
			}
		default: return state;
	}
}