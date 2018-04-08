import React from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import { Header3 } from './Text';
import color from './color';
import { screen } from '../common';

export default function MenuItem({ title, icon, numColumns, onhandlePress }) {
	const itemStyle = {
		width: screen.width / (numColumns || 4) - 15
	};

	return (
		<TouchableOpacity
			style={[styles.container, itemStyle]}
			onPress={() => onhandlePress(title)}
		>
			{icon ? <Image style={styles.icon} source={icon} /> : null}
			{title ? <Header3 style={styles.title}>{title}</Header3> : null}
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		alignItems: 'center'
		// width: screen.width / 4
	},
	icon: {
		width: 30,
		height: 30
	},
	title: {
		color: color.gray,
		marginTop: 3
	}
});

MenuItem.propTypes = {
	title: PropTypes.string.isRequired,
	icon: PropTypes.any.isRequired,
	numColumns: PropTypes.number,
	onhandlePress: PropTypes.func.isRequired
};
