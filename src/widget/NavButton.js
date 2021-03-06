import React from 'react';
import { Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import color from './color';

export default function NavButton({ title, titleStyle, icon, style, onPress }) {
	return (
		<TouchableOpacity
			onPress={() => onPress && onPress()}
			style={[styles.container, style]}
		>
			{icon ? <Image source={icon} style={styles.icon} /> : null}
			{title ? <Text style={[styles.title, titleStyle]}>{title}</Text> : null}
		</TouchableOpacity>
	);
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
	style: PropTypes.any,
	onPress: PropTypes.func
};
