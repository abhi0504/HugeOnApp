import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import Svg, { G, Rect, Line, Circle } from "react-native-svg";

const { width } = Dimensions.get('window');
const { height } = Dimensions.get('window');

const columnWidth = width / 2 - 15; // Adjust the gap between columns (15) as needed

const Card = ({ item }) => {

    const handlePress = () => {
        // Add your desired functionality when the circle is pressed
        console.log('Circle pressed!');
    };

    const { image_url, description, size } = item;
    console.log('item');
    const screenWidth = Dimensions.get('window').width;
    const aspectRatio = size.split(':').map(Number);
    console.log(aspectRatio);
    const cardHeight = (columnWidth * aspectRatio[1]) / aspectRatio[0];
    const cardWidth = (screenWidth - (1 + 1) * 10);

    // height: cardHeight, width: columnWidth image ka size

    return (<TouchableOpacity style={{ alignItems: 'center'}}>
        <View style={[styles.layout, { height: height * 0.4, width: width * 0.9, elevation: 4 }]}>
            <View style={styles.cbody1}>
                <View style={styles.cb11}>
                <TouchableOpacity onPress={handlePress}>
                    <View style={styles.container}>
                        <Svg width={40} height={40} viewBox="0 0 100 100">
                            <Circle cx={50} cy={50} r={40} fill="black" />
                        </Svg>
                    </View>
                </TouchableOpacity>
                </View>
                <View style={styles.cb12}>
                    <Text>Username</Text>
                    <Text>Arunachal pradesh, 20 mins ago</Text>
                </View>
                <View style={styles.cb13}>
                <TouchableOpacity onPress={handlePress}>
                    <View style={styles.container}>
                        <Svg width={40} height={40} viewBox="0 0 100 100">
                            <Circle cx={50} cy={50} r={40} fill="black" />
                        </Svg>
                    </View>
                </TouchableOpacity>
                </View>
            </View>
            <View style={styles.cbody2}>
            <Image
              source={require('../assets/test.jpg')}
              style={[styles.image, {height: '100%', width: '100%'}]}
            />
            <TouchableOpacity style={{position: 'absolute', right: 1, bottom: 1}} onPress={handlePress}>
                    <View style={styles.container}>
                        <Svg width={40} height={40} viewBox="0 0 100 100">
                            <Circle cx={50} cy={50} r={40} fill="black" />
                        </Svg>
                    </View>
            </TouchableOpacity>
            
            </View>
            <View style={styles.cbody3}>
                <View style={styles.cb31}>
                <TouchableOpacity onPress={handlePress}>
                    <View style={styles.container}>
                        <Svg width={40} height={40} viewBox="0 0 100 100">
                            <Circle cx={50} cy={50} r={40} fill="black" />
                        </Svg>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={handlePress}>
                    <View style={styles.container}>
                        <Svg width={40} height={40} viewBox="0 0 100 100">
                            <Circle cx={50} cy={50} r={40} fill="black" />
                        </Svg>
                    </View>
                </TouchableOpacity>
                <Text>The cition is truthy</Text>
                </View>
                <View style={styles.cb32}>
                    <Text>The conditional (ternary) operator is t condition is truthy</Text>
                </View>
            </View>

        </View>
    </TouchableOpacity>


    );
};

const styles = StyleSheet.create({
    cardContainer: {
        borderRadius: 10,
        overflow: 'hidden',
        marginBottom: 10,
        backgroundColor: '#ffffff',
    },
    image: {
        width: columnWidth,
        height: '100%',
        resizeMode: 'cover',
        borderRadius: 10
    },
    descriptionContainer: {
        display: 'flex',
        flex: 1
    },
    description: {
        fontSize: 16,
    },
    layout: {
        display: 'flex',
        flex: 1,
        backgroundColor: '#FFFFFF', margin: 10,
        borderRadius: 20,
        padding: 10
    },
    cbody1: {
        display: 'flex',
        flex: 0.15,
        // backgroundColor: 'orange',
        flexDirection: 'row',
    },
    cbody2: {
        display: 'flex',
        flex: 0.55,
        // backgroundColor: 'green',
        alignItems: 'center',
    },
    cbody3: {
        display: 'flex',
        flex: 0.3,
        // backgroundColor: 'orange',
    },
    cb11: {
        // backgroundColor: 'red',
        display: 'flex',
        flex: 0.15,
        justifyContent: 'center',
        alignItems: 'flex-start'

    },
    cb13: {
            // backgroundColor: 'pink',
            display: 'flex',
            flex: 0.15,
            justifyContent: 'center',
            alignItems: 'center'
        
    },
    cb12: {
        // backgroundColor: 'blue',
        display: 'flex',
        flex: 0.7,
        alignItems: 'flex-start'

    },
    cb31: {
        display: 'flex',
        flex: 0.5,
        // backgroundColor: 'purple',
        flexDirection: 'row',
        justifyContent: 'flex-start',
            alignItems: 'center'
    },
    cb32: {
        display: 'flex',
        flex: 0.5,
        // backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default Card;
