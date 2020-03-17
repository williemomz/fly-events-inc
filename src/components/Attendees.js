import React from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';
import { attendee, userPic } from '../assets';

const Attendees = () => {
	return (
		<View style={styles.scene}>
			<View style={styles.usrRow}>
				<Image source={attendee} style={styles.usrIcon} />
				<Text style={styles.usr}>Gracewart Kalwafirahi</Text>
			</View>
			<View style={styles.usrRow}>
				<Image source={userPic} style={styles.usrIcon} />
				<Text style={styles.usr}>Gracewart Kalwafirahi</Text>
			</View>
			<View style={styles.usrRow}>
				<Image source={attendee} style={styles.usrIcon} />
				<Text style={styles.usr}>Gracewart Kalwafirahi</Text>
			</View>
			<View style={styles.usrRow}>
				<Image source={userPic} style={styles.usrIcon} />
				<Text style={styles.usr}>Gracewart Kalwafirahi</Text>
			</View>
			<View style={styles.usrRow}>
				<Image source={attendee} style={styles.usrIcon} />
				<Text style={styles.usr}>Gracewart Kalwafirahi</Text>
			</View>
			<View style={styles.usrRow}>
				<Image source={userPic} style={styles.usrIcon} />
				<Text style={styles.usr}>Gracewart Kalwafirahi</Text>
			</View>
			<View style={styles.usrRow}>
				<Image source={attendee} style={styles.usrIcon} />
				<Text style={styles.usr}>Gracewart Kalwafirahi</Text>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	scene: {
		height: 'auto',
		// backgroundColor: '#EEEEEE',
		paddingHorizontal: '6%',
		paddingVertical: '2%',
	},
	usrRow: {
		flexDirection: 'row',
		alignItems: 'center',
		marginTop: 10,
	},
	usrIcon: { height: 24, width: 24, resizeMode: 'contain' },
	usr: {
		color: '#707070',
		fontSize: 10,
		letterSpacing: 2,
		fontWeight: '200',
		marginLeft: 10,
	},
});

export default Attendees;
