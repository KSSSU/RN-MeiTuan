import React, { PureComponent } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import { Header3, Paragraph } from './Text';
import color from './color';
import { screen } from '../common';

class MenuItem extends PureComponent {
	render() {
		let { title, icon, iconStyle, numColumns, onhandlePress } = this.props;
		const itemStyle = {
			width: screen.width / (numColumns || 4) - 15
		};

		return (
			<TouchableOpacity
				style={[styles.container, itemStyle]}
				onPress={() => onhandlePress(title)}
			>
				<Image style={[styles.icon, iconStyle]} source={icon} />
				<Header3 style={styles.title}>{title}</Header3>
			</TouchableOpacity>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		alignItems: 'center'
		// width: screen.width / 4
	},

	icon: {
		width: 40,
		height: 40
	},
	title: {
		color: color.gray,
		marginTop: 3
	}
});

MenuItem.propTypes = {
	title: PropTypes.string.isRequired,
	icon: PropTypes.any.isRequired,
	iconStyle: PropTypes.any,
	numColumns: PropTypes.number,
	onhandlePress: PropTypes.func.isRequired
};

export default MenuItem;
