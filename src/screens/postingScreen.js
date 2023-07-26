import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Dimensions,
  Image,
  TouchableOpacity,
  FlatList,
  TextInput,
  ScrollView
} from 'react-native';
import Svg, { G, Rect, Line, Circle } from "react-native-svg";

const { height, width } = Dimensions.get('window')

const PostingScreen = (props) => {

  useEffect(() => {
    console.log("EWWWWWWWWW");
    console.log(props.route.params);
  },[])

  const [paragraph, setParagraph] = useState('');

  const handleChangeText = (text) => {
    setParagraph(text);
  };

  return (
    <View style={{ flex: 1, display: 'flex' }}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => {props.navigation.goBack() }}>
          <View style={[styles.container, { marginLeft: 10 }]}>
            <Svg width={30} height={30} viewBox="0 0 100 100">
              <Circle cx={50} cy={50} r={40} fill="black" />
            </Svg>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={{
            width: width * 0.3, backgroundColor: '#00B2E8', marginRight: 20, borderRadius: 20, justifyContent: 'center',
            alignItems: 'center', display: 'flex', flex: 0.5
          }}>
            <Text style={{ color: 'white' }}>Post</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.body}>
        <Image
          source={{uri: props.route.params}}
          style={[styles.image, { height: '15%', width: '25%' }]}
        />
        <Text style={{ color: '#00B2E8', marginLeft: 10, fontWeight: 'bold', fontSize: 16 }}>Description</Text>
        <TextInput
          style={styles.input}
          multiline
          placeholder="Enter your paragraph here..."
          value={paragraph}
          onChangeText={handleChangeText}
        />
        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginVertical:10 }}>
          <Text style={{ color: '#00B2E8', marginLeft: 10, fontWeight: 'bold', fontSize: 16 }}>Tag People</Text>
          <TouchableOpacity onPress={() => { props.navigation.goBack() }}>
            <View style={[styles.container, { marginRight: 10 }]}>
              <Svg width={30} height={30} viewBox="0 0 100 100">
                <Circle cx={50} cy={50} r={40} fill="black" />
              </Svg>
            </View>
          </TouchableOpacity>
        </View>

        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginVertical:10 }}>
          <Text style={{ color: '#00B2E8', marginLeft: 10, fontWeight: 'bold', fontSize: 16 }}>Location</Text>
          <TouchableOpacity onPress={() => { props.navigation.goBack() }}>
            <View style={[styles.container, { marginRight: 10 }]}>
              <Svg width={30} height={30} viewBox="0 0 100 100">
                <Circle cx={50} cy={50} r={40} fill="black" />
              </Svg>
            </View>
          </TouchableOpacity>
        </View>

        <Text style={{ color: 'grey', marginLeft: 10, fontWeight: 'bold', fontSize: 16, marginTop: 20 }}>Add your vibetags</Text>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    flex: 0.1,
    // backgroundColor: 'red',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row'
  },
  body: {
    display: 'flex',
    flex: 0.9,
    // backgroundColor: 'green'
  },
  image: {
    resizeMode: 'cover',
    borderRadius: 10,
    margin: 10
  },
  input: {
    flex: 0.25,
    textAlignVertical: 'top',
    borderWidth: 1,
    borderColor: '#00B2E8',
    borderRadius: 5,
    fontSize: 16,
    padding: 10,
    margin: 10
  },
  scrollContainer: {
    flex: 0.25,
  }
});

export default PostingScreen