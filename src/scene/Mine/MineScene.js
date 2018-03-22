import React, { PureComponent } from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';

import MineHeader from './MineHeader';
import MineMenu from './MineMenu';

import { Header2 } from '../../widget/Text';
import { color, Line, NavButton } from '../../widget';
import { screen } from '../../common';
import api from '../../utils/api';

class MineScene extends PureComponent {
	static navigationOptions = ({ navigation }) => ({
		headerLeft: (
			<NavButton
				icon={require('../../img/mine/icon_navigation_item_set_white.png')}
				onPress={() => navigation.navigate('Home')}
			/>
		),
		headerRight: (
			<NavButton
				icon={require('../../img/mine/icon_navigation_item_message_white.png')}
				onPress={() => navigation.navigate('Mine')}
			/>
		),
		headerStyle: {
			backgroundColor: color.white,
			elevation: 0,
			shadowOpacity: 0
		}
	});

	constructor(props) {
		super(props);
		this.state = {
			refreshing: false
		};
	}

	_renderHeader = () => {
		return <MineHeader menus={api.menuMain} />;
	};

	_renderFooter = () => {
		return (
			<View style={styles.footerContainer}>
				<Line style={styles.line} />
				<MineMenu title="美团钱包" data={api.menuWallet} />
				<Line style={styles.line} />
				<MineMenu title="美团服务" data={api.menuAccount} />
			</View>
		);
	};

	_onRefresh = () => {
		// 模拟刷新
		this.setState({
			refreshing: true
		});

		setTimeout(() => {
			this.setState({ refreshing: false });
		}, 2000);
	};

	render() {
		return (
			<FlatList
				// FlatList组件自带“上拉加载、下拉刷新”的功能
				// 如果设置了onRefresh选项，则会在列表头部添加一个标准的RefreshControl控件来实现“下拉刷新”的功能。同时你需要正确设置refreshing属性。
				onRefresh={this._onRefresh}
				// 在等待加载新数据时将此属性设为true，列表就会显示出一个正在加载的符号。
				refreshing={this.state.refreshing}
				// 头部组件
				ListHeaderComponent={this._renderHeader}
				// 脚部组件
				ListFooterComponent={this._renderFooter}
				style={styles.container}
			/>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: color.white
	},
	footerContainer: {
		paddingLeft: 30,
		paddingRight: 30
	},
	line: {
		height: 1,
		marginTop: 20,
		marginBottom: 20
	}
});

export default MineScene;
