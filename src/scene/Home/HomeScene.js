import React, { PureComponent } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import PropTypes from 'prop-types';

import HomeMenu from './HomeMenu';
import HomeSwiper from './HomeSwiper';
import SearchBar from './SearchBar';
import GroupCell from '../Group/GroupCell';

import { Header1, Header2, Header3 } from '../../widget/Text';
import { color, NavButton } from '../../widget';

import api, { recommendUrlWithOffset } from '../../utils/api';

class HomeScene extends PureComponent {
	static navigationOptions = ({ navigation }) => ({
		headerLeft: (
			<NavButton
				title="北京"
				titleStyle={{ fontSize: 16 }}
				onPress={() => navigation.navigate('Home')}
			/>
		),
		headerTitle: <SearchBar />,
		headerRight: (
			<NavButton
				icon={require('../../img/mine/icon_navigation_item_message_white.png')}
				onPress={() => navigation.navigate('Mine')}
			/>
		)
	});

	constructor(props) {
		super(props);
		this.state = {
			dataList: [],
			refreshing: false,
			offset: 0
		};
	}

	componentDidMount() {
		// 首次加载是载入第一页列表
		// this._requestRecommend();
	}

	// 渲染单个列表项
	_renderItem = info => {
		return <GroupCell info={info.item} onPress={this._onItemSelected} />;
	};

	_keyExtractor = info => {
		return info.id;
	};

	_renderHeader = () => {
		return (
			<View>
				<HomeSwiper />
				<HomeMenu
					menuData={api.menuInfo}
					onMenuSelected={this._onMenuSelected}
				/>
				<Header2 style={styles.title}>猜你喜欢</Header2>
			</View>
		);
	};

	_renderFooter = () => {
		return <View />;
	};

	_requestData = async offset => {
		let response = await fetch(recommendUrlWithOffset(offset));
		let json = await response.json();

		// 遍历数据，只返回需要的参数
		let dataList = json.data.map(info => {
			return {
				id: info.id,
				imageUrl: info.squareimgurl,
				title: info.mname,
				subtitle: `[${info.range}]${info.title}`,
				price: info.price,
				rating: info.rating,
				ratingCount: info['rate-count'],
				solds: info.solds
			};
		});

		return dataList;
	};

	// 推荐列表
	_requestRecommend = async () => {
		try {
			let offset = this.state.offset;
			let dataList = await this._requestData(offset);

			this.setState({
				dataList: dataList,
				refreshing: false,
				offset: offset
			});

			offset++;
		} catch (error) {
			this.setState({ refreshing: false });
		}
	};

	// 下拉刷新
	_onRefresh = () => {
		// 在等待加载新数据时将refreshing属性设为true，列表就会显示出一个正在加载的符号。
		this.setState({ refreshing: true });

		// 下拉刷新推荐列表
		this._requestRecommend();
	};

	// 上拉加载更多
	_onload = async () => {
		try {
			let offset = this.state.offset;
			let dataList = await this._requestData(offset);

			// ES6的数组扩展运算符：将已经载入的数据数组和新载入的数据数据进行合并
			let data = [...this.state.dataList, ...dataList];

			this.setState({
				dataList: data,
				refreshing: false,
				offset: offset
			});

			offset++;
		} catch (error) {
			this.setState({ refreshing: false });
		}
	};

	_onItemSelected = info => {
		// 参数GroupScene是在App.js里定义StackNavigator注册界面组件时的名称
		// 后一个参数{data}是把info的值传过去
		this.props.navigation.navigate('GroupScene', { data: info });
	};

	_onMenuSelected = index => {
		alert(index);
	};

	render() {
		return (
			<View>
				<FlatList
					// FlatList组件自带“上拉加载、下拉刷新”的功能
					// 数据格式为普通数组 [{},{},...]
					data={this.state.dataList}
					// 根据行数据data，渲染每一行的组件
					renderItem={this._renderItem}
					// 为给定的item生成一个不重复的key
					keyExtractor={this._keyExtractor}
					// 如果设置了onRefresh选项，则会在列表头部添加一个标准的RefreshControl控件来实现“下拉刷新”的功能。同时你需要正确设置refreshing属性。
					onRefresh={this._onRefresh}
					// 在等待加载新数据时将此属性设为true，列表就会显示出一个正在加载的符号
					refreshing={this.state.refreshing}
					// 指定一开始渲染的元素数量，最好刚刚够填满一个屏幕，这样保证了用最短的时间给用户呈现可见的内容
					initialNumToRender={7}
					// 设置为true则使用旧的ListView的实现
					// legacyImplementation={true}
					// 设置滚动到底的值
					onEndReachedThreshold={0.1}
					// 滚动到指定值时触发
					onEndReached={this._onload}
					// 头部组件
					ListHeaderComponent={this._renderHeader}
					// 脚部组件
					// ListFooterComponent={this._renderFooter}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	title: {
		fontWeight: '400',
		textAlign: 'center',
		paddingTop: 8,
		paddingLeft: 10,
		paddingBottom: 8,
		color: color.gray,
		borderBottomWidth: 1,
		borderColor: color.border,
		backgroundColor: color.white
	},
	searchBar: {}
});

HomeScene.propTypes = {
	navigation: PropTypes.any
};

export default HomeScene;
