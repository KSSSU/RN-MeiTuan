import React, { PureComponent } from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

class Line extends PureComponent {
	static propTypes = {
		style: PropTypes.object
	};

	render() {
		return <View style={[styles.container, this.props.style]} />;
	}
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#eee',
		height: 10
	}
});

export default Line;
