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
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'


const GallaryOrCamera = ({ navigation }) => {



    return (
        <View style={{ display: 'flex', flex: 1 }}>
            <TouchableOpacity style={{ display: 'flex', flex: 0.1, justifyContent: 'center', marginLeft: 10 }} onPress={() => { navigation.goBack() }}>
                <View style={styles.container}>
                    <Text><MaterialIcons color='black' name='arrow-back' size={30} /></Text>
                </View>
            </TouchableOpacity>
            <View style={{ display: 'flex', flex: 0.9, marginLeft: 30 }}>
                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}>
                    <TouchableOpacity style={{ display: 'flex', flex: 0.2, justifyContent: 'center', marginLeft: 10, marginRight: 10 }} onPress={() => { navigation.push('DetailsScreen', "library") }}>
                        <View style={styles.container}>
                            <Text><MaterialIcons color='black' name='collections' size={30} /></Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { navigation.push('DetailsScreen', "library") }}>

                        <Text style={{ color: 'grey', marginLeft: 10, fontWeight: 'bold', fontSize: 16 }}>Pick from gallery</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <TouchableOpacity style={{ display: 'flex', flex: 0.2, justifyContent: 'center', marginLeft: 10, marginRight: 10 }} onPress={() => { navigation.push('DetailsScreen', "camera") }}>
                        <View style={styles.container}>
                            <Text><MaterialIcons color='black' name='add-a-photo' size={30} /></Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { navigation.push('DetailsScreen', "camera") }}>
                        <Text style={{ color: 'grey', marginLeft: 10, fontWeight: 'bold', fontSize: 16 }}>Capture with camera</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

});

export default GallaryOrCamera