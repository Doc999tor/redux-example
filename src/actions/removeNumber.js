import { REMOVE_NUMBER } from '../actions/types'

export default removedNumber => dispatch => {
	console.log('removing a number')
	dispatch({
		type: REMOVE_NUMBER,
		payload: removedNumber,
	})
}
