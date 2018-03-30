import React, { PureComponent } from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import color from './color';

export default function Line({ style }) {
	return <View style={[styles.container, style]} />;
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: color.border,
		height: 10
	}
});

Line.prototype = {
	style: PropTypes.any
};
