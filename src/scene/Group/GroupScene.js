import React, { PureComponent } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import PropTypes from 'prop-types';

import GroupCell from './GroupCell';
import GroupDetail from './GroupDetail';

import api, { recommendUrlWithId } from '../../utils/api';
import { color } from '../../widget';

class GroupScene extends PureComponent {
	static propTypes = {
		navigation: PropTypes.any
	};

	static navigationOptions = navigation => ({
		headerTitle: '团购详情',
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

	constructor(props) {
		super(props);
		this.state = {
			dataList: [],
			refreshing: false
		};
	}

	componentDidMount() {
		this._requestData();
	}

	_requestData = () => {
		// 在等待加载新数据时将refreshing属性设为true，列表就会显示出一个正在加载的符号。
		this.setState({ refreshing: true });

		// 请求加载推荐列表
		this._requestRecommend();
	};

	_requestRecommend = async () => {
		try {
			// 通过state.params来获取传来的参数，后面为key值。
			let info = this.props.navigation.state.params.data;
			let response = await fetch(recommendUrlWithId(info.id));
			let json = await response.json();

			// 遍历数据，只返回需要的参数
			let dataList = json.data.deals.map(info => {
				return {
					id: info.id,
					imageUrl: info.imgurl,
					title: info.brandname,
					subtitle: `[${info.range}]${info.title}`,
					price: info.price,
					rating: info.rating,
					ratingCount: info['rate-count'],
					solds: info.solds
				};
			});

			this.setState({
				dataList: dataList,
				refreshing: false
			});
		} catch (error) {
			this.setState({ refreshing: false });
		}
	};

	_renderItem = info => {
		return <GroupCell info={info.item} onPress={this._onItemSelected} />;
	};

	_onItemSelected = info => {
		this.props.navigation.navigate('GroupScene', { data: info });
	};

	_keyExtractor = info => {
		return info.id;
	};

	_renderHeader = () => {
		// 通过state.params来获取传来的参数，后面data为key值。
		let data = this.props.navigation.state.params.data;
		return <GroupDetail itemData={data} />;
	};

	render() {
		// 通过state.params来获取传来的参数，后面为key值。
		// let info = this.props.navigation.state.params.data;
		return (
			<View>
				<FlatList
					// FlatList组件自带“上拉加载、下拉刷新”的功能
					// 数据格式为普通数组 [{},{},...]
					data={this.state.dataList}
					// 根据行数据data，渲染每一行的组件。
					renderItem={this._renderItem}
					// 为给定的item生成一个不重复的key
					keyExtractor={this._keyExtractor}
					// 如果设置了onRefresh选项，则会在列表头部添加一个标准的RefreshControl控件来实现“下拉刷新”的功能。同时你需要正确设置refreshing属性。
					onRefresh={this._requestData}
					// 在等待加载新数据时将此属性设为true，列表就会显示出一个正在加载的符号。
					refreshing={this.state.refreshing}
					// 设置滚动到底的值
					// onEndReachedThreshold={0}
					// 滚动到指定值时触发
					// onEndReached={this._onload}
					// 头部组件
					ListHeaderComponent={this._renderHeader}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({});

export default GroupScene;
