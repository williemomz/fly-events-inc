import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Alert, Text, ScrollView } from 'react-native';
import { FloatingAction } from 'react-native-floating-action';
import { confIcon, concertIcon, sportIcon, meetIcon, categoryIcon } from '../assets';
import { EventCard, ScreenWrapper, ScrollWrapper } from '../components';

import { editIcon, searchIcon, slide1, slide2, slide3, slide4, slide5 } from '../assets';

export default function Home({ navigation }) {
	const searchAction = () => {
		Alert.alert(
			'Search Action',
			'Opens a modal search with a text input to filter events.\n\nNOTE: This is ONLY a description of a user triggered event and does NOT resemble the intended interface.',
			[{ text: 'Close' }],
			{ cancelable: true }
		);
	};

	const listAll = () => {
		Alert.alert(
			'WIll list all events',
			'Opens the interface listing all the events.',
			[{ text: 'Close', onPress: () => console.log('List All clicked') }],
			{ cancelable: true }
		);
	};

	return (
		<ScreenWrapper>
			<ScrollWrapper>
				<View
					style={{
						flexDirection: 'row',
						width: '100%',
						justifyContent: 'space-between',
						paddingHorizontal: '6%',
						paddingVertical: '2%',
					}}
				>
					<View>
						<Text style={{ fontSize: 18, fontWeight: 'bold' }}>Hello, Onsare!</Text>
						<Text style={{ fontSize: 10, fontWeight: '200' }}>Let's explore what's happening nearby</Text>
					</View>

					<TouchableOpacity onPress={searchAction} style={{ height: 40, width: 40, alignItems: 'flex-end' }}>
						<Image style={{ height: 20, width: 20, resizeMode: 'contain' }} source={searchIcon} />
					</TouchableOpacity>
				</View>
				<ScrollView horizontal={true} style={{ marginLeft: '6%', height: 50 }}>
					<TouchableOpacity style={{ alignSelf: 'center', marginRight: 10 }}>
						<Text
							style={{
								textAlign: 'center',
								fontSize: 10,
								paddingHorizontal: 10,
							}}
						>
							10{'\n'}Sun
						</Text>
					</TouchableOpacity>
					<TouchableOpacity style={{ alignSelf: 'center', marginRight: 10 }}>
						<Text
							style={{
								textAlign: 'center',
								fontSize: 10,
								paddingHorizontal: 10,
							}}
						>
							11{'\n'}Mon
						</Text>
					</TouchableOpacity>
					<TouchableOpacity style={{ alignSelf: 'center', marginRight: 10 }}>
						<Text
							style={{
								textAlign: 'center',
								textAlignVertical: 'center',
								fontSize: 10,
								paddingHorizontal: 10,
								backgroundColor: '#009688',
								borderRadius: 10,
								color: '#fff',
								height: '100%',
							}}
						>
							12{'\n'}Tue
						</Text>
					</TouchableOpacity>
					<TouchableOpacity style={{ alignSelf: 'center', marginRight: 10 }}>
						<Text
							style={{
								textAlign: 'center',
								fontSize: 10,
								paddingHorizontal: 10,
							}}
						>
							13{'\n'}Wed
						</Text>
					</TouchableOpacity>
					<TouchableOpacity style={{ alignSelf: 'center', marginRight: 10 }}>
						<Text
							style={{
								textAlign: 'center',
								fontSize: 10,
								paddingHorizontal: 10,
							}}
						>
							14{'\n'}Thu
						</Text>
					</TouchableOpacity>
					<TouchableOpacity style={{ alignSelf: 'center', marginRight: 10 }}>
						<Text
							style={{
								textAlign: 'center',
								fontSize: 10,
								paddingHorizontal: 10,
							}}
						>
							15{'\n'}Fri
						</Text>
					</TouchableOpacity>
					<TouchableOpacity style={{ alignSelf: 'center', marginRight: 10 }}>
						<Text
							style={{
								textAlign: 'center',
								fontSize: 10,
								paddingHorizontal: 10,
							}}
						>
							16{'\n'}Sat
						</Text>
					</TouchableOpacity>
					<TouchableOpacity style={{ alignSelf: 'center', marginRight: 10 }}>
						<Text
							style={{
								textAlign: 'center',
								fontSize: 10,
								paddingHorizontal: 10,
							}}
						>
							17{'\n'}Sun
						</Text>
					</TouchableOpacity>
					<TouchableOpacity style={{ alignSelf: 'center', marginRight: 10 }}>
						<Text
							style={{
								textAlign: 'center',
								fontSize: 10,
								paddingHorizontal: 10,
							}}
						>
							18{'\n'}Mon
						</Text>
					</TouchableOpacity>
					<TouchableOpacity style={{ alignSelf: 'center', marginRight: 10 }}>
						<Text
							style={{
								textAlign: 'center',
								fontSize: 10,
								paddingHorizontal: 10,
							}}
						>
							19{'\n'}Tue
						</Text>
					</TouchableOpacity>
					<TouchableOpacity style={{ alignSelf: 'center', marginRight: 10 }}>
						<Text
							style={{
								textAlign: 'center',
								fontSize: 10,
								paddingHorizontal: 10,
							}}
						>
							20{'\n'}Wed
						</Text>
					</TouchableOpacity>
					<TouchableOpacity style={{ alignSelf: 'center', marginRight: 10 }}>
						<Text
							style={{
								textAlign: 'center',
								fontSize: 10,
								paddingHorizontal: 10,
							}}
						>
							21{'\n'}Thu
						</Text>
					</TouchableOpacity>
					<TouchableOpacity style={{ alignSelf: 'center', marginRight: 10 }}>
						<Text
							style={{
								textAlign: 'center',
								fontSize: 10,
								paddingHorizontal: 10,
							}}
						>
							22{'\n'}Fri
						</Text>
					</TouchableOpacity>
					<TouchableOpacity style={{ alignSelf: 'center', marginRight: 10 }}>
						<Text
							style={{
								textAlign: 'center',
								fontSize: 10,
								paddingHorizontal: 10,
							}}
						>
							23{'\n'}Sat
						</Text>
					</TouchableOpacity>
					<TouchableOpacity style={{ alignSelf: 'center', marginRight: 10 }}>
						<Text
							style={{
								textAlign: 'center',
								fontSize: 10,
								paddingHorizontal: 10,
							}}
						>
							24{'\n'}Sun
						</Text>
					</TouchableOpacity>
					<TouchableOpacity style={{ alignSelf: 'center', marginRight: 10 }}>
						<Text
							style={{
								textAlign: 'center',
								fontSize: 10,
								paddingHorizontal: 10,
							}}
						>
							25{'\n'}Mon
						</Text>
					</TouchableOpacity>
					<TouchableOpacity style={{ alignSelf: 'center', marginRight: 10 }}>
						<Text
							style={{
								textAlign: 'center',
								fontSize: 10,
								paddingHorizontal: 10,
							}}
						>
							26{'\n'}Tue
						</Text>
					</TouchableOpacity>
					<TouchableOpacity style={{ alignSelf: 'center', marginRight: 10 }}>
						<Text
							style={{
								textAlign: 'center',
								fontSize: 10,
								paddingHorizontal: 10,
							}}
						>
							27{'\n'}Wed
						</Text>
					</TouchableOpacity>
					<TouchableOpacity style={{ alignSelf: 'center', marginRight: 10 }}>
						<Text
							style={{
								textAlign: 'center',
								fontSize: 10,
								paddingHorizontal: 10,
							}}
						>
							28{'\n'}Thu
						</Text>
					</TouchableOpacity>
					<TouchableOpacity style={{ alignSelf: 'center', marginRight: 10 }}>
						<Text
							style={{
								textAlign: 'center',
								fontSize: 10,
								paddingHorizontal: 10,
							}}
						>
							29{'\n'}Fri
						</Text>
					</TouchableOpacity>
					<TouchableOpacity style={{ alignSelf: 'center', marginRight: 10 }}>
						<Text
							style={{
								textAlign: 'center',
								fontSize: 10,
								paddingHorizontal: 10,
							}}
						>
							30{'\n'}Sat
						</Text>
					</TouchableOpacity>
				</ScrollView>

				<Text style={{ marginLeft: '6%', marginVertical: '2%', fontSize: 18, color: '#263238' }}>
					Categories
				</Text>
				<ScrollView horizontal={true} style={{ marginLeft: '6%', marginBottom: 10 }}>
					<TouchableOpacity
						style={{
							backgroundColor: '#EEEEEE',
							borderRadius: 12,
							padding: 20,
							alignItems: 'center',
							marginRight: 12,
							width: 110,
						}}
					>
						<Image source={confIcon} style={{ height: 30, width: 30, resizeMode: 'contain' }} />
						<Text style={{ fontSize: 12, marginTop: 4 }}>Conference</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={{
							backgroundColor: '#EEEEEE',
							borderRadius: 12,
							padding: 20,
							alignItems: 'center',
							marginRight: 12,
							width: 110,
						}}
					>
						<Image source={sportIcon} style={{ height: 30, width: 30, resizeMode: 'contain' }} />
						<Text style={{ fontSize: 12, marginTop: 4 }}>Sports</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={{
							backgroundColor: '#EEEEEE',
							borderRadius: 12,
							padding: 20,
							alignItems: 'center',
							marginRight: 12,
							width: 110,
						}}
					>
						<Image source={meetIcon} style={{ height: 30, width: 30, resizeMode: 'contain' }} />
						<Text style={{ fontSize: 12, marginTop: 4 }}>Meetup</Text>
					</TouchableOpacity>

					<TouchableOpacity
						style={{
							backgroundColor: '#EEEEEE',
							borderRadius: 12,
							padding: 20,
							alignItems: 'center',
							marginRight: 12,
							width: 110,
						}}
					>
						<Image source={concertIcon} style={{ height: 30, width: 30, resizeMode: 'contain' }} />
						<Text style={{ fontSize: 12, marginTop: 4 }}>Concert</Text>
					</TouchableOpacity>

					<TouchableOpacity
						style={{
							backgroundColor: '#EEEEEE',
							borderRadius: 12,
							padding: 20,
							alignItems: 'center',
							marginRight: 12,
							width: 110,
						}}
					>
						<Image source={categoryIcon} style={{ height: 30, width: 30, resizeMode: 'contain' }} />
						<Text style={{ fontSize: 12, marginTop: 4 }}>Category5</Text>
					</TouchableOpacity>

					<TouchableOpacity
						style={{
							backgroundColor: '#EEEEEE',
							borderRadius: 12,
							padding: 20,
							alignItems: 'center',
							marginRight: 12,
							width: 110,
						}}
					>
						<Image source={categoryIcon} style={{ height: 30, width: 30, resizeMode: 'contain' }} />
						<Text style={{ fontSize: 12, marginTop: 4 }}>Category6</Text>
					</TouchableOpacity>

					<TouchableOpacity
						style={{
							backgroundColor: '#EEEEEE',
							borderRadius: 12,
							padding: 20,
							alignItems: 'center',
							marginRight: 12,
							width: 110,
						}}
					>
						<Image source={categoryIcon} style={{ height: 30, width: 30, resizeMode: 'contain' }} />
						<Text style={{ fontSize: 12, marginTop: 4 }}>Category7</Text>
					</TouchableOpacity>

					<TouchableOpacity
						style={{
							backgroundColor: '#EEEEEE',
							borderRadius: 12,
							padding: 20,
							alignItems: 'center',
							marginRight: 12,
							width: 110,
						}}
					>
						<Image source={categoryIcon} style={{ height: 30, width: 30, resizeMode: 'contain' }} />
						<Text style={{ fontSize: 12, marginTop: 4 }}>Category8</Text>
					</TouchableOpacity>
				</ScrollView>

				<View
					style={{
						flexDirection: 'row',
						alignItems: 'baseline',
						justifyContent: 'space-between',
						marginHorizontal: '6%',
						marginVertical: '2%',
					}}
				>
					<Text style={{ fontSize: 18, color: '#263238' }}>Popular Events</Text>

					<TouchableOpacity style={{ width: '40%' }} onPress={listAll}>
						<Text style={{ fontSize: 12, color: '#009688', textAlign: 'right' }}>All Events</Text>
					</TouchableOpacity>
				</View>

				<EventCard
					eventPic={slide1}
					onPressHandler={() => navigation.navigate('Profile')}
					title="Annual Summit on Investment Opportunities in Kenya (ASIO - Kenya)"
					tag="Jan 10, 2019"
					location="Panowa South, Tijaga street, 4th floor Hazo house43"
				/>
				<EventCard
					eventPic={slide2}
					onPressHandler={() => navigation.navigate('Profile')}
					title="Twarm Achievers, Business & Leadership Awards"
					tag="Jan 11, 2019"
					location="Panowa South, Tijaga street, 4th floor Hazo house"
				/>
				<EventCard
					eventPic={slide3}
					onPressHandler={() => navigation.navigate('Profile')}
					title="Eastern Africa Resource Mobilisation Workshop (EARMW)"
					tag="Jan 12, 2019"
					location="Panowa South, Tijaga street, 4th floor Hazo house"
				/>
				<EventCard
					eventPic={slide4}
					onPressHandler={() => navigation.navigate('Profile')}
					title="The Chartered OD Practitioner Programme"
					tag="Jan 13, 2019"
					location="Panowa South, Tijaga street, 4th floor Hazo house"
				/>

				<EventCard
					eventPic={slide5}
					onPressHandler={() => navigation.navigate('Profile')}
					title="Food & Hotel Kenya Trade Show (Food Expo)"
					tag="Jan 13, 2019"
					location="Panowa South, Tijaga street, 4th floor Hazo house"
				/>

				<EventCard
					eventPic={slide1}
					onPressHandler={() => navigation.navigate('Profile')}
					title="Introduction to Machine Learning on Microsoft Azure for Beginners"
					tag="Jan 13, 2019"
					location="Panowa South, Tijaga street, 4th floor Hazo house"
				/>
				<EventCard
					eventPic={slide1}
					onPressHandler={() => navigation.navigate('Profile')}
					title="Lamu Yoga Festival"
					tag="Jan 14, 2019"
					location="Panowa South, Tijaga street, 4th floor Hazo house"
				/>
				<EventCard
					eventPic={slide1}
					onPressHandler={() => navigation.navigate('Profile')}
					title="Afro - Asian International Trade Fair"
					tag="Jan 15, 2019"
					location="Panowa South, Tijaga street, 4th floor Hazo house"
				/>

				<EventCard
					eventPic={slide1}
					onPressHandler={() => navigation.navigate('Profile')}
					title="Town & Country Bridal Fair - Rift Valley (TCBF -RVW)"
					tag="Jan 13, 2019"
					location="Panowa South, Tijaga street, 4th floor Hazo house"
				/>
				<EventCard
					eventPic={slide1}
					onPressHandler={() => navigation.navigate('Profile')}
					title="Introduction to Machine Learning on Microsoft Azure for Beginners ONLY!!"
					tag="Jan 14, 2019"
					location="Panowa South, Tijaga street, 4th floor Hazo house"
				/>

				<EventCard
					eventPic={slide1}
					onPressHandler={() => navigation.navigate('Profile')}
					title="Rugby and Netball Coaching Conference"
					tag="Jan 15, 2019"
					location="Panowa South, Tijaga street, 4th floor Hazo house"
				/>
			</ScrollWrapper>

			<FloatingAction actions={actions} color="#009688" onPressItem={() => navigation.navigate('Create')} />
		</ScreenWrapper>
	);
}

const actions = [
	{
		text: 'Create New Event',
		icon: require('../assets/add-event-icon.png'),
		name: 'btn_new_event',
		color: '#009688',
		// position: 2,
	},
];

const styles = StyleSheet.create({
	topWrapper: {
		flexDirection: 'row',
		paddingHorizontal: '6%',
		paddingVertical: '2%',
		justifyContent: 'space-between',
		alignItems: 'baseline',
		backgroundColor: '#fff',
		// elevation: 2,
	},
	searchInput: {
		height: 30,
		borderColor: '#009688',
		borderBottomWidth: 1,
		color: '#000000',
		paddingHorizontal: '2%',
		width: '80%',
	},
});
