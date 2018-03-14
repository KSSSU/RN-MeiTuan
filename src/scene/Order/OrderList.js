import React, { PureComponent } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import OrderListHeader from './OrderListHeader';
import { color } from '../../widget';

class OrderList extends PureComponent {
	static propTypes = {
		tabLabel: PropTypes.string
	};

	constructor(props) {
		super(props);
		this.state = {
			dataList: [],
			refreshing: false
		};
	}

	_keyExtractor = () => {};
	_renderHeader = () => {
		return (
			<View>
				{this.state.dataList.length ? null : (
					<OrderListHeader onNavigation={() => this.props.onNavigation()} />
				)}
			</View>
		);
	};
	_renderItem = () => {};
	_onRefresh = () => {};

	render() {
		return (
			<FlatList
				// FlatList组件自带“上拉加载、下拉刷新”的功能
				// 数据格式为普通数组 [{},{},...]
				data={this.state.dataList}
				// 根据行数据data，渲染每一行的组件。
				renderItem={this._renderItem}
				// 为给定的item生成一个不重复的key
				keyExtractor={this._keyExtractor}
				// 如果设置了onRefresh选项，则会在列表头部添加一个标准的RefreshControl控件来实现“下拉刷新”的功能。同时你需要正确设置refreshing属性。
				onRefresh={this._onRefresh}
				// 在等待加载新数据时将此属性设为true，列表就会显示出一个正在加载的符号。
				refreshing={this.state.refreshing}
				// 头部组件
				ListHeaderComponent={this._renderHeader}
			/>
		);
	}
}

export default OrderList;
