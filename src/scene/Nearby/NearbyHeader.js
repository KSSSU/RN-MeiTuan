import React, { PureComponent } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { color, Button } from '../../widget';
import { screen } from '../../common';

class NearbyHeader extends PureComponent {
	render() {
		return (
			<View style={styles.container}>
				{this.props.titles.map((title, i) => (
					<Button
						key={i}
						title={title}
						onPress={() => this.props.onSelectType(i)}
						style={[
							styles.button,
							{
								backgroundColor:
									this.props.selectIndex === i ? color.pink : color.white
							}
						]}
						titleStyle={[
							styles.title,
							{
								color: this.props.selectIndex === i ? color.white : color.gray
							}
						]}
					/>
				))}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'space-between',
		padding: 10
	},
	button: {
		alignItems: 'center',
		width: screen.width / 4 - 12,
		height: 26,
		marginTop: 4,
		marginBottom: 4,
		borderRadius: 20
	},
	title: {
		fontSize: 14
	}
});

export default NearbyHeader;
