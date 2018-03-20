import React, { PureComponent } from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import color from './color';

class Line extends PureComponent {
	static propTypes = {
		style: PropTypes.any
	};

	render() {
		return <View style={[styles.container, this.props.style]} />;
	}
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: color.border,
		height: 10
	}
});

export default Line;
