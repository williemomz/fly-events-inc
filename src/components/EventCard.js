import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

import { calIcon, pinIcon } from '../assets';

const EventCard = ({ title, tag, eventPic, onPressHandler, location }) => {
	return (
		<TouchableOpacity onPress={onPressHandler}>
			<View style={styles.eventCard}>
				<View style={{ width: '70%' }}>
					<Text style={styles.eventTitle}>{title}</Text>
					<View style={styles.footerRow}>
						<Image source={calIcon} style={{ width: 14, height: 14, resizeMode: 'contain' }} />
						<Text style={styles.eventTag}>{tag}</Text>
					</View>
					<View style={styles.footerRow2}>
						<Image source={pinIcon} style={{ width: 14, height: 14, resizeMode: 'contain' }} />
						<Text style={styles.eventLoc}>{location}</Text>
					</View>
				</View>

				<View style={{ width: '30%' }}>
					<Image
						resizeMode={'cover'}
						source={eventPic}
						style={{
							flex: 1,
							height: undefined,
							width: undefined,
							borderTopRightRadius: 10,
							borderBottomRightRadius: 10,
						}}
					/>
				</View>
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	eventCard: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		backgroundColor: '#ffffff',
		marginHorizontal: '6%',
		marginBottom: 20,
		borderRadius: 10,
		paddingLeft: 10,
		elevation: 2,
	},
	eventTitle: {
		color: '#37474f',
		fontSize: 16,
		marginVertical: 10,
	},
	eventTag: {
		color: '#707070',
		fontSize: 12,
		marginLeft: 4,
	},
	eventLoc: {
		color: '#707070',
		fontSize: 10,
		marginLeft: 4,
	},
	footerWrapper: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	footerRow: {
		flexDirection: 'row',
		alignItems: 'center',
		marginBottom: 8,
	},
	footerRow2: {
		flexDirection: 'row',
		alignItems: 'flex-start',
		marginBottom: 12,
	},
	footer: {
		color: '#BBBBBB',
		fontSize: 10,
		marginLeft: 4,
		color: '#009688',
	},
});

export default EventCard;
