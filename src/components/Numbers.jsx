import React from 'react';
import { connect } from 'react-redux'

import addRandomNumber from '../actions/addRandomNumber'
import addNumber from '../actions/addNumber'
import removeNumber from '../actions/removeNumber'

class Numbers extends React.Component {
	constructor (props) {
		super(props);
		this.props.addRandomNumber();
	}

	onDelete = e => {
		this.props.removeNumber(Number(e.target.previousSibling.textContent))
	}

	render = () => console.log(this.props) || (
		<ul>
			{
				this.props.numbers.map(n =>
					<li key={n}>
						<span>{ n }</span>
						<button onClick={this.onDelete}>✖</button>
					</li>
				)
			}
		</ul>
	)
}

const mapStateToProps = state => ({
	numbers: state.data.numbers
})

export default connect(mapStateToProps, { addRandomNumber, addNumber, removeNumber })(Numbers)