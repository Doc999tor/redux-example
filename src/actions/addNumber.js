import { ADD_NUMBER } from '../actions/types'

export default addedNumber => dispatch => {
	console.log('adding a number')
	dispatch({
		type: ADD_NUMBER,
		payload: addedNumber,
	})
}