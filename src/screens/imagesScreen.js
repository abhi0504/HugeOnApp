import React,  { useEffect, useState } from 'react';
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
import axios from 'axios';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const { height, width } = Dimensions.get('window')

const ImageScreen = (props) => {


const [data, setData] = useState([]);


useEffect(() => {
    fetchData();
  }, []);

const fetchData = async () => {
try {
  console.log('going for items');
  const response = await axios.get("http://192.168.1.2:8000/items");
  setData(response.data);
  console.log(data);
} catch (error) {
  console.error('Error fetching data:', error);
}
}; 

  const handlePress = () => {
    // Add your desired functionality when the circle is pressed
    // props.navigation.push('PostingScreen')
    // console.log(navigation);
    // console.log(props);
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
                        <Text><MaterialIcons color='#000000' name='add' size={30} /></Text>
                        </TouchableOpacity>

                        <TouchableOpacity>
                        <Text><MaterialIcons color='#000000' name='search' size={30} /></Text>
                        </TouchableOpacity>
                    </View>
                </View>
      </View>
      <View style={styles.body}>
      <FlatList
        data={data}
        // keyExtractor={(item) => item.id.toString()}
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