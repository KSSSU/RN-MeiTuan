import React, { PureComponent } from 'react';
import { View, Text, FlatList } from 'react-native';
import PropTypes from 'prop-types';

import NearbyHeader from './NearbyHeader';
import GroupCell from '../Group/GroupCell';

import api, { recommendUrlWithOffset } from '../../utils/api';

class NearbyList extends PureComponent {
	static propTypes = {
		types: PropTypes.array.isRequired,
		offset: PropTypes.number,
		navigation: PropTypes.any
	};

	constructor(props) {
		super();
		this.state = {
			dataList: [],
			refreshing: false,
			typeIndex: 0,
			offset: 0
		};
	}

	componentDidMount() {
		// 首次载入页面时请求数据
		let offset = this.state.offset;
		this._onRefresh(offset);
	}

	// 渲染列表
	_renderItem = info => {
		return <GroupCell info={info.item} onPress={this._onItemSelected} />;
	};

	_keyExtractor = info => {
		return info.id;
	};

	_renderHeader = () => {
		return (
			<NearbyHeader
				titles={this.props.types}
				selectIndex={this.state.typeIndex}
				onSelectType={this._onSelectType}
			/>
		);
	};

	_requestData = async offset => {
		// 偷懒：根据title不同的下标作为页数，去请求同一个api
		let response = await fetch(recommendUrlWithOffset(offset));
		let json = await response.json();

		// 遍历数据，只返回需要的参数
		let dataList = json.data.map(info => {
			return {
				id: info.id,
				key: info.id,
				imageUrl: info.squareimgurl,
				title: info.mname,
				subtitle: `[${info.range}]${info.title}`,
				price: info.price,
				rating: info.rating,
				ratingCount: info['rate-count'],
				solds: info.solds,
				channel: info.channel
			};
		});

		return dataList;
	};

	// 首次载入页面时和每次点击时请求数据
	_onRefresh = async index => {
		this.setState({ refreshing: true });

		try {
			let offset = index;
			let dataList = await this._requestData(offset);

			this.setState({
				dataList: dataList,
				refreshing: false
			});
		} catch (error) {
			this.setState({ refreshing: false });
		}
	};

	// 上拉加载更多
	_onload = async () => {
		try {
			let offset = this.state.offset;
			let dataList = await this._requestData(offset);

			this.setState({
				dataList: [...this.state.dataList, ...dataList],
				refreshing: false,
				offset: offset
			});

			offset++;
		} catch (error) {
			this.setState({ refreshing: false });
		}
	};

	_onSelectType = index => {
		// 如果当前选择的下标不等于点击时title的下标，就把当前选择的下标设为点击时的下标
		// 用来切换title切换时的背景色
		if (this.state.typeIndex != index) {
			this.setState({
				typeIndex: index,
				// 每次点击标签的时候把页数设为当前type的下标
				offset: index
			});

			// 每次点击就请求一次以当前下标为页数的数据
			this._onRefresh(index);
		}
	};

	_onItemSelected = info => {
		// 参数GroupScene是在App.js里定义StackNavigator注册界面组件时的名称
		// 后一个参数{data}是把info的值传过去
		this.props.navigation.navigate('GroupScene', { data: info });
	};

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
				// 设置滚动到底的值
				onEndReachedThreshold={0}
				// 滚动到指定值时触发
				onEndReached={this._onload}
				// 头部组件
				ListHeaderComponent={this._renderHeader}
			/>
		);
	}
}

export default NearbyList;
