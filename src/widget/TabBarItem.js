import React from 'react';
import { Image } from 'react-native';
import PropTypes from 'prop-types';

export default function TabBarItem({
	focused,
	selectedImage,
	normalImage,
	tintColor
}) {
	return (
		<Image
			source={focused ? selectedImage : normalImage}
			style={{ tintColor: tintColor, width: 25, height: 25 }}
		/>
	);
}

TabBarItem.propTypes = {
	focused: PropTypes.bool.isRequired,
	selectedImage: PropTypes.any.isRequired,
	normalImage: PropTypes.any.isRequired,
	tintColor: PropTypes.string.isRequired
};
