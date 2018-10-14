import { ADD_RANDOM_NUMBER } from '../actions/types'

export default () => dispatch => {
	console.log('adding a random number')
	setTimeout(() => {
		dispatch({
			type: ADD_RANDOM_NUMBER,
			payload: Math.round(Math.random() * 1000),
		})
	}, 1000);
}