import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DetailsScreen from './src/screens/detailsScreen';
import HomeScreen from './src/screens/homeScreen';
import ImageScreen from './src/screens/imagesScreen';
import VideoScreen from './src/screens/videoScreen';
import PostingScreen from './src/screens/postingScreen';

const Stack = createNativeStackNavigator();


function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Overview',
            headerShown: false
          }}
        />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="ImageScreen" component={ImageScreen} options={{
            title: 'Overview',
            headerShown: false
          }} />
          <Stack.Screen name="PostingScreen" component={PostingScreen} options={{
            title: 'Overview',
            headerShown: false
          }} />
        <Stack.Screen name="VideoScreen" component={VideoScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  }
});

export default App;
