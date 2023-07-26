import React from 'react';
import { View, Modal, TouchableOpacity, Text, StyleSheet } from 'react-native';

const AspectRatioModal = ({ visible, onSelectAspectRatio }) => {
  const aspectRatios = ['1:1', '4:5', '16:9'];

  return (
    <Modal visible={visible} animationType="slide" transparent>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          {aspectRatios.map((ratio) => (
            <TouchableOpacity
              key={ratio}
              onPress={() => onSelectAspectRatio(ratio)}
              style={styles.aspectRatioButton}
            >
              <Text style={styles.aspectRatioText}>{ratio}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
  },
  aspectRatioButton: {
    padding: 10,
  },
  aspectRatioText: {
    fontSize: 18,
  },
});

export default AspectRatioModal;
