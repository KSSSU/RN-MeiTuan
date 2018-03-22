/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { PureComponent } from 'react';
import { Platform, StyleSheet, Text, View, Image } from 'react-native';
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';

import HomeScene from './scene/Home/HomeScene';
import GroupScene from './scene/Group/GroupScene';
import NearbyScene from './scene/Nearby/NearbyScene';
import OrderScene from './scene/Order/OrderScene';
import OrderInfoScene from './scene/Order/OrderInfoScene';
import MineScene from './scene/Mine/MineScene';

import TabBarItem from './widget/TabBarItem';
import { color } from './widget';

export default class App extends PureComponent {
	render() {
		return <Navigator />;
	}
}

// 类似底部标签栏，用来区分模块
const Tab = TabNavigator(
	{
		Home: {
			screen: HomeScene,
			navigationOptions: ({ navigation }) => ({
				tabBarLabel: '首页',
				tabBarIcon: ({ focused, tintColor }) => (
					<TabBarItem
						focused={focused}
						tintColor={tintColor}
						selectedImage={require('./img/tabbar/tabbar_homepage_selected.png')}
						normalImage={require('./img/tabbar/tabbar_homepage.png')}
					/>
				)
			})
		},
		Nearby: {
			screen: NearbyScene,
			navigationOptions: ({ navigation }) => ({
				tabBarLabel: '附近',
				tabBarIcon: ({ focused, tintColor }) => (
					<TabBarItem
						focused={focused}
						tintColor={tintColor}
						selectedImage={require('./img/tabbar/tabbar_merchant_selected.png')}
						normalImage={require('./img/tabbar/tabbar_merchant.png')}
					/>
				)
			})
		},
		Order: {
			screen: OrderScene,
			navigationOptions: ({ navigation }) => ({
				tabBarLabel: '订单',
				tabBarIcon: ({ focused, tintColor }) => (
					<TabBarItem
						focused={focused}
						tintColor={tintColor}
						selectedImage={require('./img/tabbar/tabbar_order_selected.png')}
						normalImage={require('./img/tabbar/tabbar_order.png')}
					/>
				)
			})
		},
		Mine: {
			screen: MineScene,
			navigationOptions: ({ navigation }) => ({
				tabBarLabel: '我的',
				tabBarIcon: ({ focused, tintColor }) => (
					<TabBarItem
						focused={focused}
						tintColor={tintColor}
						selectedImage={require('./img/tabbar/tabbar_mine_selected.png')}
						normalImage={require('./img/tabbar/tabbar_mine.png')}
					/>
				)
			})
		}
	},
	{
		// tabBarComponent: TabBarBottom,
		tabBarPosition: 'bottom',
		lazy: true,
		animationEnabled: false,
		swipeEnabled: false,
		initialRouteName: 'Home',
		tabBarOptions: {
			// 选中状态的颜色
			activeTintColor: color.primary,
			// 取消选中的颜色
			inactiveTintColor: color.black,
			// 显示图标
			showIcon: true,
			style: {
				backgroundColor: color.white,
				borderTopWidth: 1,
				borderColor: '#ddd',
				height: 54
			},
			labelStyle: {
				fontSize: 12,
				margin: 0
			}
		}
	}
);

// 类似顶部导航条，用来跳转页面和传递参数
const Navigator = StackNavigator(
	{
		Tab: { screen: Tab },
		GroupScene: { screen: GroupScene },
		OrderInfoScene: { screen: OrderInfoScene }
		// Web: { screen: WebScene },
	},
	{
		// 设置顶部导航栏的一些参数设置和跳转方式
		navigationOptions: {
			// 屏幕导航的默认选项, 也可以在组件内用 static navigationOptions 设置(会覆盖此处的设置)
			headerStyle: {
				backgroundColor: color.primary,
				// elevation属性是android去掉导航条底的阴影
				elevation: 0,
				// shadowOpacity属性是iOS去掉导航条底的阴影
				shadowOpacity: 0
			},
			headerBackTitle: 'null',
			headerTintColor: color.black,
			showIcon: true
		}
	}
);
