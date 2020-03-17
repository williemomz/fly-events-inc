import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const EventDesc = () => {
	return (
		<View style={styles.scene}>
			<Text style={styles.content}>
				This 5 days certification workshop seminar is open for Organizations, Executives, Managers, Consultants,
				Professionals, and Entrepreneurs that desires to improve Consistency, Responsiveness, Efficiency,
				Profitability, Effectiveness, and Sustainability. The seminar utilizes industry best practices and
				proven methodologies in Business Process Management and Performance Analytics to achieve the above
				stated outcomes.{'\n'}You will learn {'\n'}(1) Process Discovery {'\n'}(2) Process Mapping {'\n'}(3)
				Process Documentation
				{'\n'}(4) Process Analysis {'\n'}(5) Process Design {'\n'}(6) Process Implementation {'\n'}(7) Process
				Performance Management
				{'\n'}(8) Process Change Management. We use IBM proven approach and state of the art technology.
			</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	scene: {
		height: 'auto',
		paddingHorizontal: '6%',
		paddingVertical: '2%',
	},
	content: {
		color: '#707070',
		fontSize: 12,
		lineHeight: 18,
		marginVertical: 8,
		marginHorizontal: 0,
	},
});

export default EventDesc;
