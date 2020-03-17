import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Alert, ScrollView } from 'react-native';

import { ScreenWrapper } from '../components';

const Create = ({ navigation }) => {
	const shareAction = () => {
		Alert.alert(
			'Send Action on Edit',
			'Prompts to send changes to all attendees only when making changes to an already existing event.\n\nNOTE: This is ONLY a description of a user triggered event and does NOT resemble the intended interface.',
			[{ text: 'Close' }],
			{ cancelable: true }
		);
	};

	const dateAction = () => {
		Alert.alert(
			'Date and Time Picker',
			'Calender and Clock prompt to select date and time.\n\nNOTE: This is ONLY a description of a user triggered event and does NOT resemble the intended interface.',
			[{ text: 'Close' }],
			{ cancelable: true }
		);
	};

	const picAction = () => {
		Alert.alert(
			'Media file picker',
			'Allows a user to upload image files.\n\nNOTE: This is ONLY a description of a user triggered event and does NOT resemble the intended interface.',
			[{ text: 'Close' }],
			{ cancelable: true }
		);
	};

	const catAction = () => {
		Alert.alert(
			'Radio input picker',
			'Prompts user to select category type from a list.\n\nNOTE: This is ONLY a description of a user triggered event and does NOT resemble the intended interface.',
			[{ text: 'Close' }],
			{ cancelable: true }
		);
	};

	const locAction = () => {
		Alert.alert(
			'Location picker',
			'Prompts user to select location from searchable map interface.\n\nNOTE: This is ONLY a description of a user triggered event and does NOT resemble the intended interface.',
			[{ text: 'Close' }],
			{ cancelable: true }
		);
	};

	const desAction = () => {
		Alert.alert(
			'Opens a WYSIWYG Editor',
			'WYSIWYG Editor alows a user to input text with desired formatting.\n\nNOTE: This is ONLY a description of a user triggered event and does NOT resemble the intended interface.',
			[{ text: 'Close' }],
			{ cancelable: true }
		);
	};

	return (
		<ScreenWrapper goHome={true} onPressHandler={() => navigation.navigate('Home')}>
			<ScrollView>
				<View style={mystyles.container}>
					<Text style={mystyles.title}>Create Event</Text>
					<View style={mystyles.formGroup}>
						<Text style={mystyles.label}>Event Name</Text>
						<TextInput
							style={mystyles.formIn}
							placeholder="Give it a name"
							placeholderTextColor="#AAAAAA"
						/>
					</View>
					<View style={mystyles.formGroup}>
						<Text style={mystyles.label}>Category</Text>
						<TouchableOpacity onPress={catAction} style={mystyles.formInput}>
							<Text style={mystyles.sample}>Select a category</Text>
						</TouchableOpacity>
					</View>
					<View style={mystyles.formGroup}>
						<Text style={mystyles.label}>Start Date</Text>
						<TouchableOpacity onPress={dateAction} style={mystyles.formInput}>
							<Text style={mystyles.sample}>DD/MM/YYYY : 00-00-AM</Text>
						</TouchableOpacity>
					</View>
					<View style={mystyles.formGroup}>
						<Text style={mystyles.label}>End Date</Text>
						<TouchableOpacity onPress={dateAction} style={mystyles.formInput}>
							<Text style={mystyles.sample}>DD/MM/YYYY : 00-00-PM</Text>
						</TouchableOpacity>
					</View>
					<View style={mystyles.formGroup}>
						<Text style={mystyles.label}>Event Location</Text>
						<TouchableOpacity onPress={locAction} style={mystyles.formInput}>
							<Text style={mystyles.sample}>Choose a place</Text>
						</TouchableOpacity>
					</View>
					<View style={mystyles.formGroup}>
						<Text style={mystyles.label}>Event Description</Text>
						<TouchableOpacity onPress={desAction} style={mystyles.formInput}>
							<Text style={mystyles.sample}>Describe details of the event</Text>
						</TouchableOpacity>
					</View>
					<View style={mystyles.formGroup}>
						<Text style={mystyles.label}>Add Pictures</Text>
						<TouchableOpacity onPress={picAction} style={mystyles.formInput}>
							<Text style={mystyles.sample}>Select files</Text>
						</TouchableOpacity>
					</View>
					<View style={mystyles.btnGroup}>
						<TouchableOpacity style={mystyles.btnUpdate} onPress={shareAction}>
							<Text style={mystyles.upLabel}>Update</Text>
						</TouchableOpacity>
						<TouchableOpacity style={mystyles.btnSave} onPress={() => navigation.navigate('Profile')}>
							<Text style={mystyles.suLabel}>Save</Text>
						</TouchableOpacity>
					</View>
				</View>
			</ScrollView>
		</ScreenWrapper>
	);
};

const mystyles = StyleSheet.create({
	container: {
		paddingHorizontal: '6%',
	},
	title: {
		fontSize: 24,
		fontWeight: 'bold',
		marginBottom: '12%',
		color: '#263238',
	},
	formGroup: {
		// paddingHorizontal: '2%',
		width: '100%',
		marginBottom: '6%',
	},
	btnGroup: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		width: '100%',
		marginBottom: '6%',
		marginTop: '20%',
	},
	btnUpdate: {
		width: '30%',
		height: 40,
		alignItems: 'center',
		alignContent: 'center',
		justifyContent: 'center',
		backgroundColor: '#fff',
		borderWidth: 1,
		borderColor: '#009688',
		borderRadius: 4,
	},
	btnSave: {
		width: '30%',
		height: 40,
		alignItems: 'center',
		alignContent: 'center',
		justifyContent: 'center',
		backgroundColor: '#009688',
		borderRadius: 4,
	},
	upLabel: {
		fontSize: 12,
		color: '#009688',
		textAlign: 'center',
	},
	suLabel: {
		fontSize: 12,
		color: '#fff',
		textAlign: 'center',
	},
	label: {
		fontSize: 14,
		marginBottom: 0,
		color: '#455a64',
	},
	formIn: {
		height: 30,
		borderColor: '#CCCCCC',
		borderBottomWidth: 1,
		color: '#000000',
	},
	formInput: {
		height: 30,
		borderColor: '#CCCCCC',
		borderBottomWidth: 1,
		paddingBottom: 6,
		justifyContent: 'flex-end',
	},
	sample: {
		color: '#AAAAAA',
		fontSize: 14,
	},
	txtInput: {
		height: 30,
		borderColor: '#CCCCCC',
		borderWidth: 1,
		color: '#000000',
	},
});

export default Create;
