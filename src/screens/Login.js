import React from 'react';
import { View, StyleSheet, Text, TextInput, Image, TouchableOpacity, Dimensions, StatusBar } from 'react-native';

import { facebookIcon, twitterIcon } from '../assets';

const Login = ({ navigation }) => {
	return (
		<View style={mystyles.container}>
			<Text style={mystyles.title}>Sign In</Text>
			<View style={mystyles.formGroup}>
				<Text style={mystyles.label}>Mobile Number</Text>
				<TextInput
					style={mystyles.formInput}
					placeholder="Enter Mobile Number"
					placeholderTextColor="#AAAAAA"
					keyboardType="numeric"
				/>
			</View>
			<View style={mystyles.formGroup}>
				<Text style={mystyles.label}>Password</Text>
				<TextInput
					secureTextEntry
					style={mystyles.formInput}
					placeholder="Enter Password"
					placeholderTextColor="#AAAAAA"
				/>
			</View>
			<View style={mystyles.formGroup}>
				<Text style={mystyles.label}>Sign In with</Text>
				<View style={mystyles.mediaRow}>
					<TouchableOpacity style={mystyles.mediaBtn}>
						<Image source={facebookIcon} style={mystyles.mediaIcon} />
					</TouchableOpacity>
					<TouchableOpacity style={mystyles.mediaBtn}>
						<Image source={twitterIcon} style={mystyles.mediaIcon} />
					</TouchableOpacity>
				</View>
			</View>
			<TouchableOpacity style={mystyles.btnSubmit} onPress={() => navigation.navigate('Home')}>
				<Text style={mystyles.btnLabel}>Sign In</Text>
			</TouchableOpacity>
			<Text style={mystyles.footer}>
				Don't have an account? <Text style={mystyles.footerClick}> Sign Up</Text>
			</Text>
		</View>
	);
};

const statusBarHeight = StatusBar.currentHeight;
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const mystyles = StyleSheet.create({
	container: {
		marginTop: statusBarHeight,
		backgroundColor: '#fff',
		height: windowHeight,
		width: windowWidth,
		paddingHorizontal: '6%',
		paddingTop: '16%',
		paddingBottom: 0,
	},
	title: {
		fontSize: 24,
		fontWeight: 'bold',
		marginBottom: '16%',
		color: '#263238',
	},
	formGroup: {
		paddingHorizontal: '2%',
		width: '100%',
		marginBottom: '20%',
	},
	label: {
		fontSize: 14,
		marginBottom: 0,
		color: '#455a64',
	},
	formInput: {
		height: 30,
		borderColor: '#CCCCCC',
		borderBottomWidth: 1,
		color: '#000000',
	},
	mediaRow: {
		flexDirection: 'row',
		marginTop: 10,
	},
	mediaBtn: {
		height: 40,
		width: 40,
		marginRight: 10,
	},
	mediaIcon: {
		height: 30,
		width: 30,
		resizeMode: 'contain',
	},
	btnSubmit: {
		height: 40,
		width: '100%',
		backgroundColor: '#009688',
		borderRadius: 4,
		marginBottom: 14,
		justifyContent: 'center',
	},
	btnLabel: {
		fontSize: 12,
		color: '#fff',
		textAlign: 'center',
	},
	footer: {
		textAlign: 'center',
		color: '#263238',
		fontSize: 12,
	},
	footerClick: {
		color: '#009688',
	},
});

export default Login;
