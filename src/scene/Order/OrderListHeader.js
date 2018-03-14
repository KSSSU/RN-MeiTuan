import React, { PureComponent } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

import { Button, color } from '../../widget';
import { Header2 } from '../../widget/Text';
import { screen } from '../../common';

class OrderListHeader extends PureComponent {
	_onhandlePress = () => {
		this.props.onNavigation();
	};

	render() {
		return (
			<View style={styles.container}>
				<Image
					style={{ width: 110, height: 110 }}
					source={require('../../img/mine/icon_userreview_defaultavatar.png')}
				/>
				<Header2 style={styles.header2}>你还没有相关的订单</Header2>
				<Text style={styles.text}>去下一单试试吧</Text>
				<Button
					title="随便逛逛"
					style={styles.button}
					onPress={this._onhandlePress}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'column',
		alignItems: 'center',
		paddingTop: 80
	},
	header2: {
		fontWeight: '400',
		color: color.lightBlack,
		marginTop: 12
	},
	text: {
		color: color.lightGray,
		marginTop: 5,
		marginBottom: 20
	},
	button: {
		width: screen.width / 3,
		height: 42,
		backgroundColor: color.primary
	}
});

export default OrderListHeader;
