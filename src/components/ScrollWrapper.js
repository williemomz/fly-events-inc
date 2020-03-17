import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';

const ScrollWrapper = props => {
	return (
		<ScrollView>
			<View style={styles.ScrollWrapper}>{props.children}</View>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	ScrollWrapper: {
		paddingBottom: 88,
	},
});

export default ScrollWrapper;
