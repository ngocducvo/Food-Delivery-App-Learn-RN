import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native';
import { Home, Restaurant, OrderDelivery } from './screens';

const Stack = createNativeStackNavigator();

const App = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{
					headerShown: false,
				}}
				initialRouteName={'Home'}
			>
				<Stack.Screen name="Home" component={Home}></Stack.Screen>
				<Stack.Screen name="Restaurant" component={Restaurant}></Stack.Screen>
				<Stack.Screen
					name="OrderDelivery"
					component={OrderDelivery}
				></Stack.Screen>
			</Stack.Navigator>
		</NavigationContainer>
	);
};
export default App;
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
