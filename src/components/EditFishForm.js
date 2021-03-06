import React from 'react';
import PropTypes from 'prop-types';

class EditFishForm extends React.Component {
	static propTypes = {
		fish: PropTypes.object,
		index: PropTypes.string,
		updateFish: PropTypes.func,
		deleteFish: PropTypes.func
	};

	handleChange = event => {
		console.log(event.currentTarget.value);
		// Update that fish
		// 1. Take a copy of the current fish
		const updatedFish = {
			...this.props.fish,
			[event.currentTarget.name]: event.currentTarget.value // We can use computed property names
		};
		// We send the changes upstream to app where the state lives
		this.props.updateFish(this.props.index, updatedFish);
	};

	render() {
		return (
			<div className="fish-edit">
				<input
					type="text"
					name="name"
					onChange={this.handleChange}
					value={this.props.fish.name}
				/>
				<input
					type="text"
					name="price"
					onChange={this.handleChange}
					value={this.props.fish.price}
				/>
				<select
					name="status"
					onChange={this.handleChange}
					value={this.props.fish.status}>
					<option value="available">Fresh!</option>
					<option value="unavailable">Sold out!</option>
				</select>
				<textarea
					name="desc"
					onChange={this.handleChange}
					value={this.props.fish.desc}
				/>
				<input
					type="text"
					name="image"
					onChange={this.handleChange}
					value={this.props.fish.image}
				/>
				<button onClick={() => this.props.deleteFish(this.props.index)}>
					Remove Fish
				</button>
			</div>
		);
	}
}

export default EditFishForm;
