import React, { PureComponent } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

// import { color } from './index';

type Props = {
	style: Object,
	titleStyle: Object,
	title: String,
	onPress: Func
};

class Button extends PureComponent<Props> {
	render() {
		let { style, titleStyle, title, onPress } = this.props;
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
