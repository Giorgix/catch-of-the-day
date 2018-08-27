import React from 'react';
import PropTypes from 'prop-types';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
	static propTypes = {
		history: PropTypes.object
	};

	// 1. We have to bind our own methods to get the
	// instance of the component
	/*constructor() {
		super();
		this.goToStore = this.goToStore.bind(this);
	}*/
	myInput = React.createRef();
	// 2. If we use an arrow function this would be binded to the parent scope
	goToStore = event => {
		// Stop form from submiting
		event.preventDefault();
		// Get text from input
		const storeName = this.myInput.value.value;
		// Change store to /store/whatever input
		this.props.history.push(`/store/${storeName}`);
	};
	render() {
		// We can not return sibilings elements.
		// To do so we have to use an empty div or
		// a transparent wrapper like Fragment
		return (
			<React.Fragment>
				{/* Comment inside JSX */}
				<h1>Welcome</h1>
				<form className="store-selector" onSubmit={this.goToStore}>
					<h2>Please Enter A Store</h2>
					<input
						ref={this.myInput}
						type="text"
						required
						placeholder="Store Name"
						defaultValue={getFunName()}
					/>
					<button type="submit">Visit Store -></button>
				</form>
			</React.Fragment>
		);
	}
}

export default StorePicker;
