import React, { PureComponent } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import { Header2, Header3, Paragraph } from '../../widget/Text';
import { color } from '../../widget';

class GroupCell extends PureComponent {
	static propTypes = {
		info: PropTypes.object,
		onpress: PropTypes.func
	};

	render() {
		let { info } = this.props;
		let imageUrl = info.imageUrl.replace('w.h', '160.0');

		return (
			<TouchableOpacity
				onPress={() => this.props.onPress(info)}
				style={styles.container}
			>
				<Image source={{ uri: imageUrl }} style={styles.thumbnail} />
				<View style={styles.rightContainer}>
					<Header2>{info.title}</Header2>
					{info.rating ? (
						<Paragraph style={styles.p}>
							{info.rating}分 | {info.ratingCount}人评论
						</Paragraph>
					) : null}
					<Paragraph style={styles.p}>{info.subtitle}</Paragraph>
					<View style={styles.bottomContainer}>
						<Header2 style={styles.price}>
							<Text style={{ color: color.orange, fontSize: 12 }}>￥</Text>
							{info.price}&nbsp;
							<Text style={styles.span}>起</Text>
						</Header2>
						{info.solds ? (
							<Header3 style={{ color: color.lightGray }}>
								已售{info.solds}
							</Header3>
						) : null}
					</View>
				</View>
			</TouchableOpacity>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		padding: 10,
		borderBottomWidth: 1,
		borderColor: color.border,
		backgroundColor: color.white
	},
	rightContainer: {
		flex: 1,
		paddingLeft: 20,
		paddingRight: 10
	},
	bottomContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center'
	},
	thumbnail: {
		width: 90,
		height: 90,
		borderRadius: 5
	},
	price: {
		color: color.orange,
		fontSize: 18
	},
	span: {
		color: color.lightGray,
		fontSize: 13
	},
	p: {
		marginTop: 2,
		marginBottom: 2
	}
});

export default GroupCell;
