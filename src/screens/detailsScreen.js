import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'


const { height, width } = Dimensions.get('window')


const DetailsScreen = (props) => {
  const [imageUri, setImageUri] = useState('');
  const [capturedImage, setCapturedImage] = useState(null);
  const [selectedAspectRatio, setSelectedAspectRatio] = useState('1:1');

  useEffect(() => {
    console.log("USE EFFECT CALLED");
    console.log(props.route.params);
    if (props.route.params == 'library') {
      handleImagePicker('library')
    } else if (props.route.params == 'camera') {
      handleImagePicker('camera')
    }
  }, [])

  const handleImagePicker = async (launchType) => {
    const options = {
      mediaType: 'photo',
      maxWidth: 500,
      maxHeight: 500,
      quality: 1,
    };

    const launchFunction =
      launchType === 'library' ? launchImageLibrary : launchCamera;

    const response = await launchFunction(options);

    if (response.didCancel) {
      console.log('User cancelled image picker');
    } else if (response.error) {
      console.log('ImagePicker Error: ', response.error);
    } else {
      if (launchType === 'camera') {
        // For camera, we need to set the capturedImage to display it
        setCapturedImage(response.assets[0].uri);
        setImageUri('');
      } else {
        // For gallery, we can directly set the imageUri
        setImageUri(response.assets[0].uri);
        setCapturedImage(null);
      }
    }
  };

  const handleAspectRatioSelection = (aspectRatio) => {
    setSelectedAspectRatio(aspectRatio);
  };

  const applyAspectRatio = () => {
    // Apply the selected aspect ratio to the image
    // For simplicity, we will just log the selection here
    console.log('Selected Aspect Ratio:', selectedAspectRatio);
  };

  const getImageDimensions = () => {
    const aspectRatio = selectedAspectRatio.split(':').map(Number);
    const screenWidth = 200; // Set your desired image width
    const imageWidth = screenWidth;
    const imageHeight = (screenWidth * aspectRatio[1]) / aspectRatio[0];
    return { width: imageWidth, height: imageHeight };
  };

  return (
    <View style={styles.container}>
      {/* Top left button */}
      <TouchableOpacity
        style={{
          position: 'absolute',
          top: 10,
          left: 10,
          padding: 10,
        }}
        onPress={() => {
          // Handle the back button press here
          props.navigation.goBack();
        }}
      >
        <Text><MaterialIcons color='black' name='arrow-back' size={30} /></Text>
      </TouchableOpacity>

      {/* Top right button */}
      <TouchableOpacity
        style={{position:'absolute', top: 20, right: 10 }}
        onPress={() => {
          // Handle the next button press here
          props.navigation.push('PostingScreen', { imageUri: imageUri, selectedAspectRatio: selectedAspectRatio });
        }}
      >
        <View style={{
            width: width * 0.3, backgroundColor: '#00B2E8', marginRight: 20, borderRadius: 20, justifyContent: 'center',
            alignItems: 'center', display: 'flex', height:40
          }}>
            <Text style={{ color: 'white' }}>Next</Text>
          </View>
      </TouchableOpacity>

      {imageUri ? (
        <Image source={{ uri: imageUri }} style={[styles.image, getImageDimensions()]} />
      ) : capturedImage ? (
        <Image source={{ uri: capturedImage }} style={[styles.image, getImageDimensions()]} />
      ) : (
        <Text>No image selected</Text>
      )}

<Text style={{ color: '#00B2E8', marginLeft: 10, fontWeight: 'bold', fontSize: 16 }}>Aspect Ratio</Text>


      <View style={styles.aspectRatioButtons}>
        <TouchableOpacity
          style={[
            styles.aspectRatioButton,
            selectedAspectRatio === '1:1' && styles.selectedButton,
          ]}
          onPress={() => handleAspectRatioSelection('1:1')}
        >
          <Text style={styles.buttonText}>1:1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.aspectRatioButton,
            selectedAspectRatio === '4:5' && styles.selectedButton,
          ]}
          onPress={() => handleAspectRatioSelection('4:5')}
        >
          <Text style={styles.buttonText}>4:5</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.aspectRatioButton,
            selectedAspectRatio === '16:9' && styles.selectedButton,
          ]}
          onPress={() => handleAspectRatioSelection('16:9')}
        >
          
          <Text style={styles.buttonText}>16:9</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity style={styles.applyButton} onPress={applyAspectRatio}>
          <Text style={styles.buttonText}>Apply</Text>
        </TouchableOpacity> */}
      </View>
      {/* <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => handleImagePicker('library')} style={styles.button}>
          <Text style={styles.buttonText}>Select Image</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleImagePicker('camera')} style={styles.button}>
          <Text style={styles.buttonText}>Take Photo</Text>
        </TouchableOpacity>
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    marginBottom: 20,
  },
  buttonContainer: {
    position: 'absolute',
    top: 10,
    right: 10,
    padding: 10,
    backgroundColor: 'blue',
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
  },
  aspectRatioButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 10,
  },
  aspectRatioButton: {
    backgroundColor: '#B7dc99',
    padding: 10,
    borderRadius: 5,
    marginRight: 10,
  },
  selectedButton: {
    backgroundColor: '#00B2E8',
  },
  applyButton: {
    backgroundColor: '#B7dc99',
    padding: 10,
    borderRadius: 5,
  },
});

export default DetailsScreen;
