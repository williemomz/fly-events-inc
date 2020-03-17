import React from 'react';
import { Image, StyleSheet, Text } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

import { welcomeImg, scheduleImg, shareImg, findImg } from '../assets';

const Onboard = ({ navigation }) => {
	return (
		<Onboarding
			onSkip={() => navigation.navigate('Login')}
			onDone={() => navigation.navigate('Login')}
			allowFontScaling={false}
			pages={[
				{
					backgroundColor: '#fff',
					image: <Image style={mystyles.img} source={welcomeImg} />,
					title: <Text style={mystyles.title}>Welcome</Text>,
					subtitle: <Text style={mystyles.subtitle}>One place for all your events scheduling</Text>,
				},
				{
					backgroundColor: '#fff',
					image: <Image style={mystyles.img} source={scheduleImg} />,
					title: <Text style={mystyles.title}>Create Events</Text>,
					subtitle: (
						<Text style={mystyles.subtitle}>
							Whether you planning for a conference, workshop, meetup or any other category, just get it
							done
						</Text>
					),
				},
				{
					backgroundColor: '#fff',
					image: <Image style={mystyles.img} source={shareImg} />,
					title: <Text style={mystyles.title}>Share Events</Text>,
					subtitle: (
						<Text style={mystyles.subtitle}>Let people know of your event and invite whoever you want</Text>
					),
				},
				{
					backgroundColor: '#fff',
					image: <Image style={mystyles.img} source={findImg} />,
					title: <Text style={mystyles.title}>Find Events</Text>,
					subtitle: <Text style={mystyles.subtitle}>As easy as a click to look for upcoming events</Text>,
				},
			]}
		/>
	);
};

const mystyles = StyleSheet.create({
	img: {
		height: 200,
		width: '100%',
		resizeMode: 'contain',
	},
	title: {
		fontSize: 24,
		fontWeight: 'bold',
		marginBottom: '4%',
		color: '#263238',
		textAlign: 'center',
	},
	subtitle: {
		fontSize: 14,
		width: '80%',
		textAlign: 'center',
		color: '#455a64',
	},
});

export default Onboard;
