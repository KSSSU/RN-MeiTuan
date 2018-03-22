import React, { PureComponent } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

import { screen } from '../../common';
import color from '../../widget/color';

class SearchBar extends PureComponent {
	render() {
		return (
			<TouchableOpacity style={styles.searchBar}>
				<Image
					source={require('../../img/home/search_icon.png')}
					style={styles.searchIcon}
				/>
				<Text>搜索</Text>
			</TouchableOpacity>
		);
	}
}

const styles = StyleSheet.create({
	searchBar: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		height: 36,
		paddingLeft: 15,
		paddingRight: 15,
		borderRadius: 22,
		backgroundColor: color.white
	},
	searchIcon: {
		width: 24,
		height: 24
	}
});

export default SearchBar;
