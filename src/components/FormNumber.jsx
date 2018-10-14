import React from 'react'
import { connect } from 'react-redux'

import addNumber from '../actions/addNumber'

class FormNumber extends React.Component {
	constructor (props) {
		super(props);
		this.inputRef = React.createRef()
	}

	onSubmit = e => {
		e.preventDefault();
		this.props.addNumber(Number(this.inputRef.current.value))
		e.target.reset()
	}

	render = () => (
		<form onSubmit={this.onSubmit}>
			<label>
				<input type="number" ref={this.inputRef} />
			</label>
			<input type="submit"/>
		</form>
	)
}

export default connect(null, { addNumber })(FormNumber)