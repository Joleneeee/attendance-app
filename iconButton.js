import React, { useState, useEffect } from "react";
import { Feather } from '@expo/vector-icons';
import { SafeAreaView, StyleSheet, Text, View, TextInput, Button, TouchableOpacity, FlatList } from 'react-native';
import Alert from './alert';

const IconButton = ({ buttonIcon, label, name, onPress, captionIcon, caption }) => {
  const [isCheckedIn, setIsCheckedIn] = useState(false);
  
  const handleButtonPress = () => {
    setIsCheckedIn(true);   
       
  };

  return (
    <View style={styles.container}>
    <Text style={styles.name}>{name}</Text>
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <View style={styles.buttonContent}>
        <Feather name={buttonIcon} size={100} color="white" />
        <Text style={styles.label}>{label}</Text>
        {isCheckedIn && <Text style={styles.successMessage}>Successfully checked in!</Text>}
        <Alert></Alert>
        </View>
    </TouchableOpacity>
    <View style={styles.captionContainer}>
      <Feather name={captionIcon} size={26} color="black" />
      <Text style={styles.caption}>{caption}</Text>
    </View>
    <View style={styles.containerBelow}>
      <View style={styles.columnBelow}>
        <Feather name="clock" size={24} color="black" />
        <Text style={styles.captionBelow}>Duration</Text>
      </View>
      <View style={styles.columnBelow}>
        <Feather name="sunrise" size={24} color="black" />
        <Text style={styles.captionBelow}>Check In</Text>
      </View>
      <View style={styles.columnBelow}>
        <Feather name="sunset" size={24} color="black" />
        <Text style={styles.captionBelow}>Check Out</Text>
      </View>
    </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  name: {
    marginTop: 110,
    fontSize: 24,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#000000',
    borderRadius: 400,
    width: 300,
    height: 300, 
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  buttonContent: {
    // flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 5,
    marginBottom: 15,
  },
  label: {
    marginTop: 11,
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  successMessage: {
    marginTop: 8,
    color: 'white',
    fontSize: 14,
    textAlign: 'center',
  },
  captionContainer: {
    flexDirection: 'row',
    // alignItems: 'center',
    marginTop: 20,
  },
  caption: {
    marginLeft: 15,
    marginBottom: 18,
    marginTop: 4,
    fontSize: 15,
    textAlign: 'center',
  },
  containerBelow: {
    flexDirection: 'column',
    flexWrap: 'wrap',
    marginTop: 10,
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: '#F5F5F5',
    height: 250,
    width: 280,
  },
  columnBelow: {
    alignItems: 'center',
    columnGap: 10,
  },
  captionBelow: {
    marginTop: 15,
    marginBottom: 10,
    fontSize: 14,
  },
});

export default IconButton;




