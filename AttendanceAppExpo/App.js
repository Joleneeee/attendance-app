import React, { useState, useEffect } from "react";
import { Feather } from '@expo/vector-icons';
import { SafeAreaView, StyleSheet, Text, View, TextInput, Button, TouchableOpacity, FlatList } from 'react-native';
import IconButton from "./iconButton";
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import IconButton from './iconButton';

const App = () => {
  const [currentDate, setCurrentDate] = useState('');
  useEffect(() => {
    setCurrentDate(
      new Date().getDate() +
      '/' +
      (new Date().getMonth() + 1) +
      '/' + 
      new Date().getFullYear() 
      // ' ' + 
      // new Date().getHours() +
      // ' ' + hours + ':' +
      // new Date().getMinutes() 
    );
    saveDate()
    getSavedDate();
    }, []);

    const saveDate = async () => {
      await AsyncStorage.setItem(
        'DATE',
        new Date().getDate() +
        '/' +
      (new Date().getMonth() + 1) +
      '/' + 
      new Date().getFullYear(),
      );
    };

    const getSavedDate = async () => {
      const date = await AsyncStorage.getItem('DATE');
      console.log(date);
    };

    const handleButtonPress = () => {
      alert('Successfully checked in!');
    };
    
    return (
      <View style = {{flex: 1}}>
      <Text
      style = {{
        fontSize : 20,
        fontWeight : '800', 
        alignSelf : 'center', 
        marginTop: 100,
      }}>
        {currentDate}
      </Text>
      <IconButton
        buttonIcon="check"
        label="CHECK IN"
        name="JASON CHUNG"
        onPress={handleButtonPress}
        captionIcon="map-pin"
        caption="LOCATION -"
      />
      </View>
    );
};

export default App;
