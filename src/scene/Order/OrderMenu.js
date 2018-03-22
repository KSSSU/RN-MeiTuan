import React, { PureComponent } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import { Header3, Paragraph } from '../../widget/Text';
import { color } from '../../widget';
import { screen } from '../../common';

class OrderMenu extends PureComponent {
	static propTypes = {
		title: PropTypes.string.isRequired,
		icon: PropTypes.any.isRequired,
		onhandlePress: PropTypes.func.isRequired
	};

	render() {
		let { title, icon, onhandlePress } = this.props;
		return (
			<TouchableOpacity
				style={styles.container}
				onPress={() => onhandlePress()}
			>
				<Image style={styles.icon} source={icon} />
				<Header3 style={styles.title}>{title}</Header3>
			</TouchableOpacity>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		alignItems: 'center',
		width: screen.width / 4
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

export default OrderMenu;
