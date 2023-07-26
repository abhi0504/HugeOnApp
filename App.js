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
import GallaryOrCamera from './src/screens/gallaryOrCamera';

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
        <Stack.Screen name="DetailsScreen" component={DetailsScreen} options={{
            headerShown: false
          }} />
        <Stack.Screen name="ImageScreen" component={ImageScreen} options={{
            headerShown: false
          }} />
          <Stack.Screen name="PostingScreen" component={PostingScreen} options={{
            headerShown: false
          }} />
        <Stack.Screen name="VideoScreen" component={VideoScreen} options={{
            headerShown: false
          }} />
          <Stack.Screen name="GallaryOrCamera" component={GallaryOrCamera} options={{
            headerShown: false
          }} />

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
