import React, { PureComponent } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

import Swiper from 'react-native-swiper';

import { screen } from '../../common';
import color from '../../widget/color';
import api from '../../utils/api';

class HomeSwiper extends PureComponent {
	render() {
		return (
			<Swiper
				autoplay
				style={styles.wrapper}
				dotColor={color.border}
				activeDotColor={color.primary}
				paginationStyle={{ bottom: 10 }}
			>
				{api.swiper.map((item, i) => (
					<Image source={item.image} key={i} style={styles.banner} />
				))}
			</Swiper>
		);
	}
}

const styles = StyleSheet.create({
	wrapper: {
		height: screen.width * 482 / 1100
	},
	banner: {
		flex: 1,
		width: '100%'
	}
});

export default HomeSwiper;
