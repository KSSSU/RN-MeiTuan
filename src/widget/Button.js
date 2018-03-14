import React, { PureComponent } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

class Button extends PureComponent {
	static propTypes = {
		title: PropTypes.string.isRequired,
		onPress: PropTypes.func,
		style: PropTypes.any,
		titleStyle: PropTypes.any
	};

	render() {
		let { title, onPress, style, titleStyle } = this.props;
		return (
			<TouchableOpacity
				onPress={() => onPress && onPress()}
				style={[styles.container, style]}
			>
				<Text style={[styles.title, titleStyle]}>{title}</Text>
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
	title: {
		fontSize: 18,
		color: 'white'
	}
});

export default Button;
