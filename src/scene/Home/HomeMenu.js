import React, { PureComponent } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import { Header3 } from '../../widget/Text';
import { screen } from '../../common';
import { color } from '../../widget';

class HomeMenu extends PureComponent {
	static propTypes = {
		menuData: PropTypes.array,
		onMenuSelected: PropTypes.func
	};

	render() {
		let { menuData, onMenuSelected } = this.props;
		return (
			<View style={styles.container}>
				{menuData.map((item, index) => (
					<TouchableOpacity
						key={index}
						style={styles.menu}
						onPress={() => onMenuSelected && onMenuSelected(index)}
					>
						<Image source={item.icon} style={styles.icon} />
						<Header3 style={styles.title}>{item.title}</Header3>
					</TouchableOpacity>
				))}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		flexWrap: 'wrap',
		paddingTop: 10,
		paddingBottom: 10,
		marginBottom: 10,
		backgroundColor: color.white
	},
	menu: {
		width: screen.width / 5,
		justifyContent: 'center',
		alignItems: 'center',
		paddingTop: 5,
		paddingBottom: 5
	},
	icon: {
		width: screen.width / 8,
		height: screen.width / 8,
		marginBottom: 5
	},
	title: {
		textAlign: 'center',
		color: color.gray
	}
});

export default HomeMenu;
