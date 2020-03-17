import React from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import { FloatingAction } from 'react-native-floating-action';
import { SliderBox } from 'react-native-image-slider-box';

import { ScreenWrapper, ScrollWrapper, EventTabview } from '../components';
import {} from '../assets';

const Event = ({ navigation }) => {
	const eventPics = {
		collection: [
			// Network image  "https://source.unsplash.com/1024x768/?girl",
			// Local image
			require('../assets/slide1.jpg'),
			require('../assets/slide2.jpg'),
			require('../assets/slide3.png'),
			require('../assets/slide4.jpg'),
			require('../assets/slide5.jpg'),
		],
	};

	return (
		<ScreenWrapper goHome={true} date="Sat, 11 March 2020" onPressHandler={() => navigation.navigate('Home')}>
			<ScrollWrapper>
				<SliderBox
					images={eventPics.collection}
					autoplay={true}
					circleLoop={true}
					dotColor="#009688"
					imageLoadingColor="#009688"
					sliderBoxHeight={400}
				/>
				<View style={styles.padContainer}>
					<Text style={styles.owner}>Owned By: Kahiria Mbugua</Text>
					<Text style={styles.title}>
						Business Process Management & Performance Analytics Workshop Seminar (Fix the Process & Improve
						Performance)
					</Text>
					<Text style={styles.time}>09:30 AM - 12:48 PM</Text>
					<Text style={styles.location}>Dagorreti, Nairobi, 2nd flor Kariku Hse</Text>
				</View>
				<EventTabview />
			</ScrollWrapper>

			<FloatingAction
				actions={actions}
				color="#009688"
				onPressItem={name => {
					if (name == 'btn_new_event') {
						navigation.navigate('Create');
					} else if (name == 'btn_edit_event') {
						navigation.navigate('Create');
					} else {
						Alert.alert(
							'Share or send event',
							'Opens a popup share-window with social media share buttons.\n\nNOTE: This is ONLY a description of a user triggered event and does NOT resemble the intended interface.',
							[{ text: 'Close' }],
							{ cancelable: true }
						);
					}
				}}
			/>
		</ScreenWrapper>
	);
};

const actions = [
	{
		text: 'Edit Event',
		icon: require('../assets/edit-calendar-icon.png'),
		name: 'btn_edit_event',
		color: '#009688',
		position: 1,
	},
	{
		text: 'Share Event',
		icon: require('../assets/share-event-icon.png'),
		name: 'btn_share_event',
		color: '#009688',
		position: 2,
	},
	{
		text: 'Create New Event',
		icon: require('../assets/add-event-icon.png'),
		name: 'btn_new_event',
		color: '#009688',
		position: 3,
	},
];

const styles = StyleSheet.create({
	padContainer: {
		paddingHorizontal: '6%',
		paddingVertical: '2%',
	},
	owner: {
		color: '#AAAAAA',
		fontSize: 10,
		letterSpacing: 2,
		// fontWeight: 'bold',
	},
	title: {
		color: '#263238',
		fontSize: 18,
		marginBottom: 8,
	},
	time: {
		color: '#AAAAAA',
		fontSize: 10,
		letterSpacing: 3,
	},
	location: {
		color: '#707070',
		fontSize: 14,
		// marginBottom: 8,
	},
});

export default Event;
