import React, { PureComponent } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import ScrollableTabView from 'react-native-scrollable-tab-view';
import NearbyList from './NearbyList';

import { color } from '../../widget';
import api from '../../utils/api';

class NearbyScene extends PureComponent {
	static navigationOptions = navigation => ({
		headerTitle: '吃喝玩乐',
		headerStyle: {
			backgroundColor: color.white,
			// elevation属性是android去掉导航条底的阴影
			elevation: 0,
			// shadowOpacity属性是iOS去掉导航条底的阴影
			shadowOpacity: 0
		},
		headerTitleStyle: { alignSelf: 'center' },
		// 是否支持滑动返回手势，iOS默认支持，安卓默认关闭
		gesturesEnabled: true
		// headerRight: (
		// 	<NavigationItem
		// 		icon={require('../../img/public/icon_navigation_item_share.png')}
		// 		onPress={() => {}}
		// 	/>
		// )
	});

	render() {
		let { titles, types } = api;

		return (
			<ScrollableTabView
				tabBarBackgroundColor={color.white}
				tabBarActiveTextColor={color.pink}
				tabBarInactiveTextColor={color.gray}
				tabBarTextStyle={styles.tabBarText}
				tabBarUnderlineStyle={styles.underLine}
			>
				{titles.map((title, i) => (
					<NearbyList
						tabLabel={titles[i]}
						types={types[i]}
						offset={i}
						key={i}
						navigation={this.props.navigation}
					/>
				))}
			</ScrollableTabView>
		);
	}
}

const styles = StyleSheet.create({
	tabBarText: {
		fontSize: 15,
		paddingTop: 12
	},
	underLine: {
		backgroundColor: color.pink,
		height: 2
	}
});

export default NearbyScene;
