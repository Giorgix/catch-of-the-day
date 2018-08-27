import React from 'react';
import PropTypes from 'prop-types';

// When there is no state we can create a "stateless functional component"
// We can use the implicit return of arrow functions instead of return ()
const Header = props => (
	<header className="top">
		<h1>
			Catch
			<span className="ofThe">
				<span className="of">Of</span>
				<span className="the">The</span>
			</span>
			Day
		</h1>
		<h3 className="tagline">
			<span>{props.tagline}</span>
		</h3>
	</header>
);

Header.propTypes = {
	tagline: PropTypes.string.isRequired
};

/*class Header extends React.Component {
	render() {
		return (
			<header className="top">
				<h1>
					Catch
					<span className="ofThe">
						<span className="of">Of</span>
						<span className="the">The</span>
					</span>
					Day
				</h1>
				<h3 className="tagline">
					<span>{this.props.tagline}</span>
				</h3>
			</header>
		);
	}
}*/

export default Header;
