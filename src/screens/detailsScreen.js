import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';


const DetailsScreen = (navigation) => {

  console.log(navigation);

  return (
    <View style={styles.container}>
      <Text>Helllo</Text>
      <TouchableOpacity onPress={() => navigation.navigation.goBack()}>
        <View>
          <Text>Go back</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({

});

export default DetailsScreen;
