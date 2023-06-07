import React, { useState, useEffect } from "react";
import { Feather } from '@expo/vector-icons';
import { SafeAreaView, StyleSheet, Text, View, TextInput, Button, TouchableOpacity, FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import IconButton from './iconButton';

const App = () => {
  const [currentDate, setCurrentDate] = useState('');
  useEffect(() => {
    setCurrentDate(
      new Date().getDate() +
      '/' +
      (new Date().getMonth() + 1) +
      '/' + 
      new Date().getFullYear(),
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
        <IconButton></IconButton>
      </Text>
      </View>
    );
};

export default App;






