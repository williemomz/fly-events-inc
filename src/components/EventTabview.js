import * as React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { Attendees, Comments, EventDesc } from '../components';

const FirstRoute = () => <EventDesc />;

const SecondRoute = () => <Attendees />;

const ThirdRoute = () => <Comments />;

const initialLayout = { width: Dimensions.get('window').width };

export default EventTabview = () => {
	const [index, setIndex] = React.useState(0);
	const [routes] = React.useState([
		{ key: 'first', title: 'Description' },
		{ key: 'second', title: 'Attendees' },
		{ key: 'third', title: 'Commments' },
	]);

	// const renderLabel = ({ route, focused, color }) => {
	// 	<Text style={{ fontSize: 10 }}>{route.title}</Text>;
	// };

	const renderTabBar = props => (
		<TabBar
			{...props}
			labelStyle={{ fontSize: 10, textTransform: 'capitalize' }}
			indicatorStyle={{ backgroundColor: 'white' }}
			style={{ backgroundColor: 'teal' }}
		/>
	);

	const renderScene = SceneMap({
		first: FirstRoute,
		second: SecondRoute,
		third: ThirdRoute,
	});

	return (
		<TabView
			navigationState={{ index, routes }}
			renderTabBar={renderTabBar}
			renderScene={renderScene}
			onIndexChange={setIndex}
			initialLayout={initialLayout}
		/>
	);
};
