import React from 'react';
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

const GallaryOrCamera = ({ navigation }) => {



    return (
        <View style={{ display: 'flex', flex: 1 }}>
            <TouchableOpacity style={{ display: 'flex', flex: 0.1, justifyContent: 'center', marginLeft: 10 }} onPress={() => { navigation.goBack() }}>
                <View style={styles.container}>
                    <Svg width={30} height={30} viewBox="0 0 100 100">
                        <Circle cx={50} cy={50} r={40} fill="black" />
                    </Svg>
                </View>
            </TouchableOpacity>
            <View style={{ display: 'flex', flex: 0.9, marginLeft: 30 }}>
                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}>
                    <TouchableOpacity style={{ display: 'flex', flex: 0.1, justifyContent: 'center', marginLeft: 10,  marginRight: 10  }} onPress={() => { navigation.goBack() }}>
                        <View style={styles.container}>
                            <Svg width={30} height={30} viewBox="0 0 100 100">
                                <Circle cx={50} cy={50} r={40} fill="black" />
                            </Svg>
                        </View>
                    </TouchableOpacity>
                    <Text style={{ color: 'grey', marginLeft: 10, fontWeight: 'bold', fontSize: 16 }}>Pick from gallery</Text>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <TouchableOpacity style={{ display: 'flex', flex: 0.1, justifyContent: 'center', marginLeft: 10,  marginRight: 10  }} onPress={() => { navigation.goBack() }}>
                        <View style={styles.container}>
                            <Svg width={30} height={30} viewBox="0 0 100 100">
                                <Circle cx={50} cy={50} r={40} fill="black" />
                            </Svg>
                        </View>
                    </TouchableOpacity>
                    <Text style={{ color: 'grey', marginLeft: 10, fontWeight: 'bold', fontSize: 16}}>Capture with camera</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

});

export default GallaryOrCamera