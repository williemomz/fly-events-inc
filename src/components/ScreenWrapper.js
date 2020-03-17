import React from 'react';
import {
	StyleSheet,
	View,
	Dimensions,
	StatusBar,
	Image,
	SafeAreaView,
	TouchableOpacity,
	Alert,
	Text,
} from 'react-native';
import { logo, menu, back } from '../assets';

const ScreenWrapper = props => {
	const menuOpen = () => {
		Alert.alert(
			'Menu button clicked',
			'Opens menu interface to show user configurable options like logged in user profile and any other relevant options.\nThe menu interface can either be positioned at the top right corner of the window or slide into view from left side of the window.\n\nNOTE: This is ONLY a description of a user triggered event and does NOT resemble the intended interface.',
			[{ text: 'Close', onPress: () => console.log('Menu closed') }],
			{ cancelable: true }
		);
	};

	const backHome = () => {
		Alert.alert(
			'Home pressed',
			'Goes to home screen.\n\nNOTE: This is ONLY a description of a user triggered event and does NOT resemble the intended interface.',
			[{ text: 'Close', onPress: () => console.log('Home pressed') }],
			{ cancelable: true }
		);
	};

	const productIcon = (
		<TouchableOpacity>
			<Image style={{ height: 20, width: 20, resizeMode: 'contain', marginLeft: 0 }} source={logo} />
		</TouchableOpacity>
	);
	const BackButton = (
		<View style={styles.dateRow}>
			<TouchableOpacity onPress={props.onPressHandler}>
				<Image style={{ height: 20, width: 20, resizeMode: 'contain', marginLeft: 0 }} source={back} />
			</TouchableOpacity>
			<Text style={styles.date}>{props.date}</Text>
		</View>
	);

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.navBar}>
				{props.goHome ? BackButton : productIcon}
				<TouchableOpacity onPress={menuOpen} style={{ width: 60, alignItems: 'flex-end' }}>
					<Image style={{ height: 10, width: 20, resizeMode: 'contain' }} source={menu} />
				</TouchableOpacity>
			</View>
			{props.children}
		</SafeAreaView>
	);
};

const statusBarHeight = StatusBar.currentHeight;
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
	container: {
		marginTop: statusBarHeight,
		backgroundColor: '#fff',
		height: windowHeight,
		width: windowWidth,
	},
	navBar: {
		backgroundColor: '#fff',
		flexDirection: 'row',
		paddingHorizontal: '6%',
		alignItems: 'center',
		justifyContent: 'space-between',
		height: 40,
	},
	dateRow: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	date: {
		color: '#707070',
		fontSize: 10,
		marginLeft: 10,
	},
});

export default ScreenWrapper;
