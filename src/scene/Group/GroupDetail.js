import React, { PureComponent } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import { Header1, Header2, Header3, Paragraph } from '../../widget/Text';
import { screen } from '../../common';
import { color, Button } from '../../widget';

class GroupDetail extends PureComponent {
	static propTypes = {
		itemData: PropTypes.object.isRequired
	};

	render() {
		// 对象解构赋值，将itemData赋值给item
		let { itemData: item } = this.props;
		console.log(item);
		return (
			<View style={styles.container}>
				<Image
					source={{ uri: item.imageUrl.replace('w.h', '480.0') }}
					style={styles.thumbnail}
				/>
				<View style={styles.info}>
					<Header2 style={{ fontSize: 18 }}>{item.title}</Header2>
					<Header2 style={{ fontSize: 18 }}>{item.id}</Header2>
					<Paragraph style={{ marginTop: 5, marginBottom: 15 }}>
						{item.subtitle}
					</Paragraph>
					<View style={styles.priceContainer}>
						<Header2 style={styles.price}>
							<Text style={{ color: color.primary, fontSize: 18 }}>￥</Text>
							<Text>{item.price}</Text>
						</Header2>
						<Button
							title="立即抢购"
							onPress={() => alert('ff')}
							style={styles.button}
						/>
					</View>
					<View style={styles.bottomContainer}>
						<View style={styles.centerContainer}>
							<Image
								source={require('../../img/home/icon_deal_anytime_refund.png')}
								style={{ width: 18, height: 18 }}
							/>
							<Text style={{ paddingLeft: 5, fontSize: 13 }}>随时退</Text>
						</View>
						<View style={styles.centerContainer}>
							<Image
								source={require('../../img/tabbar/tabbar_mine.png')}
								style={{ width: 18, height: 18 }}
							/>
							<Text style={{ paddingLeft: 5, fontSize: 13 }}>
								已售{item.solds}
							</Text>
						</View>
					</View>
				</View>
				{item.rating && item.ratingCount ? (
					<View style={styles.othersContainer}>
						<Text style={{ color: color.orange }}>{item.rating}分</Text>
						<View style={styles.centerContainer}>
							<Text>{item.ratingCount}条评价</Text>
							<Image
								source={require('../../img/public/cell_arrow.png')}
								style={{ width: 13, height: 13 }}
							/>
						</View>
					</View>
				) : null}
				<View style={[styles.othersContainer, styles.otherDeal]}>
					<Text style={{ color: color.black }}>看了本套餐的人还看了</Text>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		// marginBottom: 12,
		backgroundColor: color.white
	},
	thumbnail: {
		width: screen.width,
		height: screen.width * 0.55
	},
	info: {
		paddingTop: 15,
		paddingLeft: 15,
		paddingRight: 15
	},
	priceContainer: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingTop: 10,
		paddingBottom: 10,
		borderColor: '#eee',
		borderTopWidth: 1,
		borderBottomWidth: 1
	},
	price: {
		color: color.primary,
		fontSize: 34,
		fontWeight: '400'
	},
	button: {
		backgroundColor: color.lightOrange
	},
	bottomContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingTop: 10,
		paddingBottom: 10
	},
	othersContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		borderTopWidth: 12,
		borderColor: '#eee',
		paddingTop: 10,
		paddingBottom: 10,
		paddingLeft: 15,
		paddingRight: 15
	},
	otherDeal: {
		borderBottomWidth: 1,
		borderColor: '#eee'
	},
	centerContainer: {
		flexDirection: 'row',
		alignItems: 'center'
	}
});

export default GroupDetail;
