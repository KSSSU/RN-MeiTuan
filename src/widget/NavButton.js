import React, { PureComponent } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import color from './color';

class NavButton extends PureComponent {
	render() {
		let { title, titleStyle, icon, iconStyle, style, onPress } = this.props;
		return (
			<TouchableOpacity
				onPress={() => onPress && onPress()}
				style={[styles.container, style]}
			>
				{icon ? <Image source={icon} style={[styles.icon, iconStyle]} /> : null}
				{title ? <Text style={[styles.title, titleStyle]}>{title}</Text> : null}
			</TouchableOpacity>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		alignItems: 'center',
		paddingLeft: 15,
		paddingRight: 15,
		borderRadius: 3
	},
	icon: {
		width: 24,
		height: 24
	},
	title: {
		fontSize: 18,
		color: color.white
	}
});

NavButton.propTypes = {
	title: PropTypes.string,
	titleStyle: PropTypes.any,
	icon: PropTypes.any,
	iconStyle: PropTypes.any,
	style: PropTypes.any,
	onPress: PropTypes.func
};

export default NavButton;
