import React, { PureComponent } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import { Header2 } from '../../widget/Text';
import { MenuItem, color } from '../../widget';
import { screen } from '../../common';

class MineMenu extends PureComponent {
	render() {
		let { title, data } = this.props;
		let cells = [];
		for (let index = 0; index < data.length; index++) {
			const element = data[index];
			const cell = (
				<MenuItem
					key={index}
					title={element.title}
					icon={element.image}
					iconStyle={styles.icon}
					onhandlePress={title => alert(title)}
				/>
			);
			cells.push(cell);
		}

		return (
			<View>
				<Header2 style={styles.title}>{title}</Header2>
				<View style={styles.cellContainer}>{cells}</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	cellContainer: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		// justifyContent: 'center',
		alignItems: 'center'
	},
	title: {
		fontSize: 14,
		marginBottom: 15,
		color: color.lightBlack
	},
	icon: {
		width: 30,
		height: 30
	}
});

MineMenu.propTypes = {
	title: PropTypes.string.isRequired,
	data: PropTypes.array.isRequired
};

export default MineMenu;
