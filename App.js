import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SearchScreen from './Screens/SearchScreen';
// import { NavigationContainer } from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack'

// const Stack = createStackNavigator();

export default function App() {
  return (
    <View >
      <SearchScreen/>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 10,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
