import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

const ImageScreen = (props , { navigation }) => {
    console.log(props.route.params);
    return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>ImageScreen Screen</Text>
      {/* <Button
        title="Go to Details... again"
        onPress={() => navigation.push('Details')}
      />
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      /> */}
    </View>
)}

export default ImageScreen