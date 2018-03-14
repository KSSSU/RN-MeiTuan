import React, { PureComponent } from 'react';
import { Image } from 'react-native';
import PropTypes from 'prop-types';

class TabBarItem extends PureComponent {
	static propTypes = {
		focused: PropTypes.bool.isRequired,
		selectedImage: PropTypes.any.isRequired,
		normalImage: PropTypes.any.isRequired,
		tintColor: PropTypes.string.isRequired
	};

	render() {
		return (
			<Image
				source={
					this.props.focused ? this.props.selectedImage : this.props.normalImage
				}
				style={{ tintColor: this.props.tintColor, width: 25, height: 25 }}
			/>
		);
	}
}

export default TabBarItem;
