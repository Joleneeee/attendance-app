import React, { useState, useEffect } from "react";
import { Feather } from '@expo/vector-icons';
import { SafeAreaView, StyleSheet, Text, View, TextInput, Button, TouchableOpacity, FlatList } from 'react-native';

const App = () => {
  const handleButtonPress = () => {
    alert('Successfully checked in!');
  };

return (
  <View>
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