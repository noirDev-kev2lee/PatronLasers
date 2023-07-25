import React from 'react';
import { View, Text, TouchableOpacity, Modal,StyleSheet, } from 'react-native';

const CustomAlert = ({ visible, message, onClose }: {visible: any, message: string, onClose: any}) => {
  return (
    <Modal visible={visible} transparent>
      <View style={styles.overlay}>
        <View style={styles.alertContainer}>
         <View>
         <Text style={styles.info}>Information</Text>
         <Text style={styles.message}>{message}</Text>
         </View>
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <View>
            <Text style={styles.closeButtonText}>Close</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default CustomAlert;
const styles = StyleSheet.create({
    overlay: {
      flex: 1,
      backgroundColor: '#00000080',
      justifyContent: 'center',
      alignItems: 'center',
    },
    alertContainer: {
      flexDirection: 'column',
      justifyContent: 'space-between',
      backgroundColor: 'white',
      padding: 20,
      borderRadius: 8,
      width: '80%',
      height: 200,
    },
    message: {
      fontSize: 16,
      marginBottom: 10,
      color: 'black'
    },
    info: {
        fontWeight: 'bold',
        color: 'black',
        fontSize: 19
    },
    closeButton: {
        backgroundColor: '#131035',
        width: '100%',
        height: '30%',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
      },
    closeButtonText: {
      color: 'white',
      fontSize: 16,
    },
  });
