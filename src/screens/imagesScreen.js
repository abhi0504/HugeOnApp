import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Dimensions,
  Image,
  TouchableOpacity,
  FlatList
} from 'react-native';

import Svg, { G, Rect, Line, Circle } from "react-native-svg";
import Card from '../components/card';

const { height, width } = Dimensions.get('window')

const ImageScreen = (props, { navigation }) => {

  const initialData = [
    {
        "id": 1,
        "title": "Item 1",
        "image_url": "https://example.com/image1.jpg",
        "size": "1:1",
        "type": "image",
        "description": "This is the description for Item 1"
    },
    {
        "id": 2,
        "title": "Item 2",
        "image_url": "https://example.com/image2.jpg",
        "size": "4:5",
        "type": "video",
        "description": "This is the description for Item 2"
    },
    {
        "id": 3,
        "title": "Item 3",
        "image_url": "https://example.com/image3.jpg",
        "size": "16:9",
        "type": "image",
        "description": "This is the description for Item 3"
    },
    {
        "id": 4,
        "title": "Item 4",
        "image_url": "https://example.com/image4.jpg",
        "size": "1:1",
        "type": "video",
        "description": "This is the description for Item 4"
    },
    {
        "id": 5,
        "title": "Item 5",
        "image_url": "https://example.com/image5.jpg",
        "size": "4:5",
        "type": "image",
        "description": "This is the description for Item 5"
    },
    {
        "id": 6,
        "title": "Item 6",
        "image_url": "https://example.com/image6.jpg",
        "size": "16:9",
        "type": "video",
        "description": "This is the description for Item 6"
    },
    {
        "id": 7,
        "title": "Item 7",
        "image_url": "https://example.com/image7.jpg",
        "size": "1:1",
        "type": "image",
        "description": "This is the description for Item 7"
    },
    {
        "id": 8,
        "title": "Item 8",
        "image_url": "https://example.com/image8.jpg",
        "size": "4:5",
        "type": "video",
        "description": "This is the description for Item 8"
    },
    {
        "id": 9,
        "title": "Item 9",
        "image_url": "https://example.com/image9.jpg",
        "size": "16:9",
        "type": "image",
        "description": "This is the description for Item 9"
    },
    {
        "id": 10,
        "title": "Item 10",
        "image_url": "https://example.com/image10.jpg",
        "size": "1:1",
        "type": "video",
        "description": "This is the description for Item 10"
    }
];

  const handlePress = () => {
    // Add your desired functionality when the circle is pressed
    console.log('Circle pressed!');
  };

  console.log(props.route.params);
  return (
    <View style={styles.layout}>
      <View style={styles.header}>
        <View style={styles.headerLayout}>
          <View style={styles.header1}>
            <Image
              source={require('../assets/logo.png')}
              style={styles.logo}
            />
          </View>
          <View style={styles.header2}>
            <TouchableOpacity onPress={handlePress}>
              <View style={styles.container}>
                <Svg width={30} height={30} viewBox="0 0 100 100">
                  <Circle cx={50} cy={50} r={40} fill="black" />
                </Svg>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={handlePress}>
              <View style={styles.container}>
                <Svg width={30} height={30} viewBox="0 0 100 100">
                  <Circle cx={50} cy={50} r={40} fill="black" />
                </Svg>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.body}>
      <FlatList
        data={initialData}
        keyExtractor={(item) => item.id.toString()}
        numColumns={1} // Set the number of columns you want in the masonry layout
        renderItem={({ item }) => <Card item={item} />} // Render each card using the Card component
      />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  layout: {
    display: 'flex',
    flex: 1,
  },
  header: {
    display: 'flex',
    flex: 0.1,
    backgroundColor: '#FFFFFF'
  },
  body: {
    display: 'flex',
    flex: 0.9,
    backgroundColor: '#FAFAFA',
    flexDirection: 'row'
  },
  headerLayout: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  header1: {
    display: 'flex',
    flex: 0.3,
    // backgroundColor: 'green',
    // alignItems: 'center',
    justifyContent: 'center'
  },
  header2: {
    display: 'flex',
    flex: 0.3,
    // backgroundColor: 'orange',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: 20
  },
  logo: {
    height: height * 0.043, width: width * 0.18, marginLeft: width * 0.024
  },
  container: {
    flex: 1,
    // backgroundColor: '#f5f5f5',
  },
  listContainer: {
    padding: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center'
  },
  cardContainer: {
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#ffffff',
    marginHorizontal: 8,
    marginVertical: 4
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
  },
  container2: {
    flex: 1,
    position: 'absolute',
    right: 1,
    bottom: 1
  }
});


export default ImageScreen