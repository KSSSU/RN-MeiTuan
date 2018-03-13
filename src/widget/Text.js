import React, { PureComponent } from 'react';
import { StyleSheet, Text } from 'react-native';
import { color } from './index';

// style属性最简单的方式是JavaScript对象类型，也可写成数组类型；在数组类型中，优先加载最后的元素，因此可应用于继承中
export function Header1({ style, ...props }: Object) {
	return <Text style={[styles.h1, style]} {...props} />;
}

export function Header2({ style, ...props }: Object) {
	return <Text style={[styles.h2, style]} {...props} />;
}

export function Header3({ style, ...props }: Object) {
	return <Text style={[styles.h3, style]} {...props} />;
}

export function Paragraph({ style, ...props }: Object) {
	return <Text style={[styles.p, style]} {...props} />;
}

const styles = StyleSheet.create({
	h1: {
		fontSize: 40,
		color: color.primary
	},
	h2: {
		fontSize: 16,
		fontWeight: 'bold',
		color: color.black
	},
	h3: {
		fontSize: 14,
		color: color.black
	},
	p: {
		fontSize: 14,
		color: color.gray
	}
});
