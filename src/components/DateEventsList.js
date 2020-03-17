import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const DateEventsList = props => {
	return (
		<View style={styles.dateList}>
			<View style={styles.dateItem}>
				<Text style={styles.date}>{props.date}</Text>
			</View>
			{props.children}
		</View>
	);
};

const styles = StyleSheet.create({
	dateItem: {
		backgroundColor: '#EEEEEE',
		paddingHorizontal: '6%',
		paddingVertical: '2%',
		margin: 0,
	},
	date: {
		color: '#707070',
		fontSize: 10,
	},
});

export default DateEventsList;
