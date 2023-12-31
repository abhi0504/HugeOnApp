import React from 'react';
import { useEffect, useState } from 'react';

import {
    StyleSheet,
    Text,
    View,
    Button,
    Image,
    Dimensions,
    TouchableOpacity,
    FlatList,
    Modal
} from 'react-native';
import Svg, { G, Rect, Line, Circle } from "react-native-svg";
import MasonryList from '@react-native-seoul/masonry-list';
import axios from 'axios';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'



const { height, width } = Dimensions.get('window')

const HomeScreen = ({ navigation }) => {

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
        console.log('Circle pressed!');
        setModalVisible(true);
    };

    const createAPost = () => {
        // Add your desired functionality when the circle is pressed
        console.log('Circle pressed!22');
        setModalVisible(false);
        navigation.push('GallaryOrCamera')
    };

    const calculateCardSize = (size) => {
        console.log(size);
        const aspectRatio = size.split(':').map(Number);
        const screenWidth = Dimensions.get('window').width;
        const columns = 2; // Number of columns you want in the grid
        const cardWidth = (screenWidth - (columns + 1) * 10) / columns; // Adjust the gap between cards (10) as needed
        const cardHeight = (cardWidth * aspectRatio[1]) / aspectRatio[0];
        return { width: cardWidth, height: cardHeight };
    };

    const pressNavigate = (item) => {
        // Add your desired functionality when the circle is pressed
        // console.log(item);
        if (item.type == "video") {
            navigation.push('VideoScreen', item)
        } else {
            navigation.push('ImageScreen', item)
        }
    };

    const [modalVisible, setModalVisible] = useState(false);

    const handleCloseModal = () => {
        setModalVisible(false);
    };


    const renderItem = ({ item }) => {
        const cardSize = calculateCardSize(item.size);
        console.log(item.image_url);
        return (
            <TouchableOpacity onPress={() => { pressNavigate(item) }}>
                <View style={[styles.cardContainer, cardSize]}>
                    <Image source={{ uri: item.image_url }} style={styles.image} />
                    <View style={styles.container2}>
                    <Text><MaterialIcons color='white' name='favorite-border' size={30} /></Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    };


    // useEffect(() => {
    //   // Function to fetch and parse JSON data, replace with your actual data source
    //   const fetchData = async () => {
    //     try {
    //       const response = await fetch('https://example.com/api/data');
    //       const jsonData = await response.json();
    //       setData(jsonData);
    //     } catch (error) {
    //       console.error('Error fetching data:', error);
    //     }
    //   };

    //   fetchData();
    // }, []);


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
                {/* <Text>Home Screenssss</Text>
                <Button
                    title="Go to Details"
                    onPress={() => navigation.navigate('Details')}
                /> */}

                <Modal
                    visible={modalVisible}
                    animationType="slide"
                    // transparent={true}
                    onRequestClose={handleCloseModal}
                >
                    <View style={styles.modalContainer}>
                        <View style={styles.modalContent}>

                            <View style={{ display: 'flex', flex: 0.2, alignItems: 'flex-end' }}>
                                <TouchableOpacity onPress={handleCloseModal}>
                                    <View style={styles.container}>
                                    <Text><MaterialIcons color='#000000' name='cancel' size={30} /></Text>
                                    </View>
                                </TouchableOpacity>
                            </View>

                            <View style={{ display: 'flex', flex: 0.8, marginTop: 20 }}>
                                <TouchableOpacity onPress={createAPost}>
                                    <View style={{ display: 'flex', flexDirection: 'row', height: 50 }}>
                                        <TouchableOpacity>
                                            <View style={styles.container}>
                                            <Text><MaterialIcons color='#000000' name='add-box' size={30} /></Text>
                                            </View>
                                        </TouchableOpacity>
                                        <Text style={{ color: 'black', marginLeft: 20, fontWeight: 'bold', fontSize: 16 }}>Create a post</Text>
                                    </View>
                                </TouchableOpacity>

                                <TouchableOpacity onPress={createAPost}>
                                    <View style={{ display: 'flex', flexDirection: 'row',  height: 50 }}>
                                        <TouchableOpacity>
                                            <View style={styles.container}>
                                            <Text><MaterialIcons color='#000000' name='add-box' size={30} /></Text>
                                            </View>
                                        </TouchableOpacity>
                                        <Text style={{ color: 'black', marginLeft: 20, fontWeight: 'bold', fontSize: 16 }}>Create a story</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>


                        </View>
                    </View>
                </Modal>


                <MasonryList
                    data={data}
                    // keyExtractor={(item) => item.id.toString()}
                    renderItem={renderItem}
                    numColumns={2} // Set the number of columns you want in the masonry layout
                    containerWidth={width}
                    spacing={50} // Adjust the gap between cards (10) as needed

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
        backgroundColor: '#FAFAFA'
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
        display: 'flex',
        // position: 'absolute',
        // right: 0
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
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        display: 'flex'
    },
    modalContent: {
        backgroundColor: '#D0D0D0',
        padding: 20,
        borderRadius: 10,
        height: height * 0.3,
        width: width * 0.9,
        display: 'flex',
    },
    modalText: {
        fontSize: 20,
        marginBottom: 10,
    },
    closeButton: {
        fontSize: 16,
        color: 'blue',
        alignSelf: 'flex-end',
    },
});

export default HomeScreen