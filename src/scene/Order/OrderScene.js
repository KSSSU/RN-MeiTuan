import React, { PureComponent } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

import GroupCell from '../Group/GroupCell';
import OrderCaption from './OrderCaption';
import OrderMenu from './OrderMenu';

import { color, Line } from '../../widget';
import api from '../../utils/api';

class OrderScene extends PureComponent {
	static navigationOptions = ({ navigation }) => ({
		title: '订单',
		headerStyle: { backgroundColor: color.white },
		headerTitleStyle: { color: color.white }
	});

	constructor(props) {
		super(props);
		this.state = {
			dataList: [],
			refreshing: false
		};
	}

	componentDidMount() {
		this._onRefresh();
	}

	_renderHeader = () => {
		return (
			<View>
				<OrderCaption
					title="我的订单"
					subtitle="全部订单"
					onhandlePress={title => {
						this.props.navigation.navigate('OrderInfoScene', { data: title });
					}}
				/>

				<View style={styles.menuContainer}>
					<OrderMenu
						title="待付款"
						icon={require('../../img/order/order_tab_need_pay.png')}
						onhandlePress={title => {
							this.props.navigation.navigate('OrderInfoScene', { data: title });
						}}
					/>
					<OrderMenu
						title="待使用"
						icon={require('../../img/order/order_tab_need_use.png')}
						onhandlePress={title => {
							this.props.navigation.navigate('OrderInfoScene', { data: title });
						}}
					/>
					<OrderMenu
						title="待评论"
						icon={require('../../img/order/order_tab_need_review.png')}
						onhandlePress={title => {
							this.props.navigation.navigate('OrderInfoScene', { data: title });
						}}
					/>
					<OrderMenu
						title="退款/售后"
						icon={require('../../img/order/order_tab_needoffer_aftersale.png')}
						onhandlePress={title => {
							this.props.navigation.navigate('OrderInfoScene', { data: title });
						}}
					/>
				</View>

				<Line />

				<OrderCaption
					title="我的收藏"
					subtitle="查看全部"
					onhandlePress={title => alert(title)}
				/>
			</View>
		);
	};

	_keyExtractor = info => {
		return info.id;
	};

	_renderItem = info => {
		return <GroupCell info={info.item} onPress={this._onItemSelected} />;
	};

	_requestData = async () => {
		let response = await fetch(api.RECOMMEND_URL);
		let json = await response.json();

		// 遍历数据，只返回需要的参数
		let dataList = json.data.map(info => {
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

		return dataList;
	};

	_onItemSelected = info => {
		this.props.navigation.navigate('GroupScene', { data: info });
	};

	_onRefresh = async () => {
		this.setState({ refreshing: true });

		try {
			let dataList = await this._requestData();

			this.setState({
				dataList: dataList,
				refreshing: false
			});
		} catch (error) {
			this.setState({ refreshing: false });
		}
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
				// 头部组件
				ListHeaderComponent={this._renderHeader}
			/>
		);
	}
}

const styles = StyleSheet.create({
	menuContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		backgroundColor: color.white,
		paddingTop: 15,
		paddingBottom: 15
	}
});

export default OrderScene;
