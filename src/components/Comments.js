import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Comments = () => {
	return (
		<View style={styles.section}>
			<View style={styles.card}>
				<Text style={styles.post}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
					et dolore magna aliqua.
				</Text>
				<Text style={styles.poster}>Joan Kirema</Text>
			</View>
			<View style={styles.card}>
				<Text style={styles.post}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
					et dolore magna aliqua. Ut porttitor leo a diam.
				</Text>
				<Text style={styles.poster}>Lucy Njeri</Text>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	section: {
		height: 'auto',
		// backgroundColor: '#EEEEEE',
		paddingHorizontal: '6%',
		paddingTop: '6%',
	},
	content: {
		marginVertical: 8,
	},
	card: {
		backgroundColor: '#eee',
		borderWidth: 1,
		borderColor: '#AAAAAA',
		borderRadius: 6,
		paddingHorizontal: 10,
		paddingVertical: 6,
		marginBottom: 20,
	},
	post: {
		fontSize: 12,
		color: '#455a64',
		textAlign: 'left',
		marginBottom: 10,
	},
	poster: {
		fontSize: 10,
		color: '#AAAAAA',
		textAlign: 'left',
		marginBottom: 0,
	},
});

export default Comments;
