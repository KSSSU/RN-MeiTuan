import React, { PureComponent } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import ScrollableTabView from 'react-native-scrollable-tab-view';
import OrderList from './OrderList';
import { color } from '../../widget';
import api from '../../utils/api';

class OrderInfoScene extends PureComponent {
	static propTypes = {
		navigation: PropTypes.any
	};

	static navigationOptions = ({ navigation }) => ({
		title: '我的订单',
		headerStyle: {
			backgroundColor: color.white,
			elevation: 0,
			shadowOpacity: 0,
			borderBottomWidth: 1,
			borderColor: color.border
		},
		headerTitleStyle: { color: color.lightBlack }
	});

	constructor(porps) {
		super(porps);
		this.state = {
			initialPage: 0
		};
	}

	// componentWillMount可能下个版本移除，添加UNSAFE_前缀平滑升级
	UNSAFE_componentWillMount() {
		this._getInitialPage();
	}

	// 根据传过来的index值来判断当前Tab的下标
	_getInitialPage = () => {
		const index = this.props.navigation.state.params.index;

		if (index > -1) {
			this.setState({ initialPage: index + 1 });
		} else {
			this.setState({ initialPage: 0 });
		}
	};

	render() {
		const menus = api.orderMenu;

		return (
			<ScrollableTabView
				tabBarBackgroundColor={color.white}
				tabBarActiveTextColor={color.primary}
				tabBarInactiveTextColor={color.gray}
				tabBarTextStyle={styles.tabBarText}
				tabBarUnderlineStyle={styles.underLine}
				initialPage={this.state.initialPage}
			>
				{menus.map((menu, i) => (
					<OrderList
						key={i}
						tabLabel={menu.title}
						onNavigation={() => this.props.navigation.navigate('Home')}
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
		backgroundColor: color.primary,
		height: 2
	}
});

export default OrderInfoScene;
