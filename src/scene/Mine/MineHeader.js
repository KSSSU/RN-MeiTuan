import React, { PureComponent } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import { Header2 } from '../../widget/Text';
import { MenuItem, color } from '../../widget';
import { screen } from '../../common';

class MineHeader extends PureComponent {
	render() {
		let menus = this.props.menus;

		// 函数式编程
		const cells = menus.map((element, index) => (
			<MenuItem
				key={index}
				title={element.title}
				icon={element.image}
				iconStyle={styles.icon}
				numColumns={3}
				onhandlePress={title => alert(title)}
			/>
		));

		// 相当于 => 过程式编程
		// let cells = [];
		// for (let index = 0; index < menus.length; index++) {
		// 	const element = menus[index];
		// 	const cell = (
		// 		<MenuItem
		// 			key={index}
		// 			title={element.title}
		// 			icon={element.image}
		// 			iconStyle={styles.icon}
		// 			numColumns={3}
		// 			onhandlePress={title => alert(title)}
		// 		/>
		// 	);
		// 	cells.push(cell);
		// }

		return (
			<View style={styles.container}>
				<View style={styles.avatarBg} />
				<View style={styles.avatarContainer}>
					<Image
						source={require('../../img/mine/icon_userreview_defaultavatar.png')}
						style={styles.avatarImg}
					/>
					<Header2 style={styles.avatar}>KSSSU</Header2>
				</View>
				<View style={styles.menu}>{cells}</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center'
	},
	avatarContainer: {
		justifyContent: 'center'
	},
	avatarBg: {
		backgroundColor: color.primary,
		width: screen.width,
		height: 30
	},
	avatar: {
		textAlign: 'center',
		marginTop: 6,
		marginBottom: 36
	},
	avatarImg: {
		width: 60,
		height: 60,
		borderRadius: 50,
		borderWidth: 2,
		borderColor: color.white,
		marginTop: -30
	},
	menu: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center'
	},
	icon: {
		width: 30,
		height: 30
	}
});

MineHeader.propTypes = {
	menus: PropTypes.array.isRequired
};

export default MineHeader;
