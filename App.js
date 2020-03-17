import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { setCustomText, setCustomTextInput } from 'react-native-global-props';

import { HomeScreen, Eventcreen, OnboardScreens, LoginScreen, CreateScreen } from './src/screens';

const Stack = createStackNavigator();

// Setting default styles for all Text components.
const customTextProps = {
	style: {
		fontFamily: 'Roboto',
		color: '#455a64',
	},
};

// Getting rid of that ugly line on Android and adding some custom style to all TextInput components.
const customTextInputProps = {
	underlineColorAndroid: 'rgba(0,0,0,0)',
};

setCustomText(customTextProps);
setCustomTextInput(customTextInputProps);

export default function App() {
	return (
		<NavigationContainer>
			{/* Rest of your app code */}
			<Stack.Navigator
				initialRouteName="OnboardScreens"
				screenOptions={{
					headerShown: false,
				}}
			>
				<Stack.Screen name="Onboard" component={OnboardScreens} options={{ title: 'Welcome' }} />
				<Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Sign In' }} />
				<Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Landing Screen' }} />
				<Stack.Screen name="Profile" component={Eventcreen} />
				<Stack.Screen name="Create" component={CreateScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}
