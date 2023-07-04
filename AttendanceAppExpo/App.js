import React, { useState, useEffect } from "react";
import { Feather } from '@expo/vector-icons';
import { SafeAreaView, StyleSheet, Text, View, TextInput, Button, TouchableOpacity, FlatList } from 'react-native';
import IconButton from "./iconButton";
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import IconButton from './iconButton';

const App = () => {
  const [currentDate, setCurrentDate, setCurrentTime] = useState('');

  useEffect(() => {
      var date = new Date().getDate() // current Date
      var month = new Date().getMonth() + 1 // current Month
      var year = new Date().getFullYear() // current Year
      var hours = new Date().getHours() + 1 // current Hours
      var min = new Date().getMinutes() // current Minutes
      var sec = new Date().getSeconds() // current Seconds
      setCurrentDate(
        date + '/' + month + '/' + year + ' ' 
      )
      setCurrentTime(
        hours + ':' + min + ':' + sec
      )
    }, [])

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
