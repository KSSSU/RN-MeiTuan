import React, { PureComponent } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import { Header2, Paragraph } from '../../widget/Text';
import { color, Line } from '../../widget';

class OrderCaption extends PureComponent {
	static propTypes = {
		title: PropTypes.string.isRequired,
		subtitle: PropTypes.string.isRequired,
		onhandlePress: PropTypes.func.isRequired
	};

	render() {
		let { title, subtitle, onhandlePress } = this.props;
		return (
			<View style={styles.container}>
				<TouchableOpacity
					style={styles.innerContainer}
					onPress={() => onhandlePress(title)}
				>
					<Header2 style={styles.title}>{title}</Header2>
					<Paragraph style={styles.subtitle}>{subtitle}</Paragraph>
					<Image
						style={styles.icon}
						source={require('../../img/public/cell_arrow.png')}
					/>
				</TouchableOpacity>
				<Line style={{ height: 1 }} />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: color.white,
		paddingLeft: 15,
		paddingRight: 15
	},
	innerContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		height: 40
	},
	title: {
		color: color.gray
	},
	subtitle: {
		color: color.lightGray,
		marginLeft: 'auto'
	},
	icon: {
		marginLeft: 5,
		width: 12,
		height: 12
	}
});

export default OrderCaption;
