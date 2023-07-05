import React, { useState, useEffect } from "react";
import { Feather } from "@expo/vector-icons";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  FlatList,
} from "react-native";
import Alert from "./alert";

const IconButton = ({
  buttonIcon,
  label,
  onPress,
  captionIcon,
  caption,
  status,
  time,
  location
}) => {
  const [isCheckedIn, setIsCheckedIn] = useState(false);
  const [name, setName] = useState(" ");
  const [id, setId] = useState("0");

  const handleButtonPress = () => {
    setIsCheckedIn(true);
  };


  return (
    <View style={styles.container}>
      <TextInput style={styles.name} placeholder="Your Name" onChangeText={value => setName(value)} />
      <TextInput style={styles.id} placeholder="Your ID" onChangeText={value => setId(value)} />

      <TouchableOpacity style={styles.button} onPress={() => onPress(name, id)}>
        <View style={styles.buttonContent}>
          <Feather name={buttonIcon} size={100} color="white" />
          <Text style={styles.label}>{label}</Text>
          {isCheckedIn && (
            <Text style={styles.successMessage}>Successfully checked in!</Text>
          )}
        </View>
      </TouchableOpacity>

      <View style={styles.captionContainer}>
        <Feather name={captionIcon} size={26} color="black" />
        <Text style={styles.caption}>{caption}  {location}</Text>
      </View>
      <View style={styles.containerBelow}>
        <View style={styles.columnBelow}>
          <Feather name="clock" size={24} color="black" />
          <Text style={styles.captionBelow}>Time        {time}</Text>
        </View>
        <View style={styles.columnBelow}>
          <Feather name="sunrise" size={24} color="black" />
          <Text style={styles.captionBelow}>Checkin       {status.toUpperCase()}</Text>
        </View>
      </View>
    </View>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  textInputStyle: {
    marginTop: 20,
  },
  name: {
    borderWidth: 3,
    textAlign: 'center',
    paddingTop: 3,
    width: 200,
    marginTop: 110,
    fontSize: 24,
    fontWeight: "bold",
  },
  id: {
    borderWidth: 3,
    textAlign: 'center',
    paddingTop: 3,
    width: 200,
    marginTop: 5,
    fontSize: 24,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#000000",
    borderRadius: 400,
    width: 300,
    height: 300,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
  buttonContent: {
    // flexDirection: 'row',
    alignItems: "center",
    marginLeft: 5,
    marginBottom: 15,
  },
  label: {
    marginTop: 11,
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  successMessage: {
    marginTop: 8,
    color: "white",
    fontSize: 14,
    textAlign: "center",
  },
  captionContainer: {
    flexDirection: "row",
    // alignItems: 'center',
    marginTop: 20,
  },
  caption: {
    marginLeft: 15,
    marginBottom: 18,
    marginTop: 4,
    fontSize: 15,
    textAlign: "center",
  },
  containerBelow: {
    flexDirection: "column",
    flexWrap: "wrap",
    marginTop: 10,
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: "#F5F5F5",
    width: 280,
  },
  columnBelow: {
    alignItems: "flex-start",
    columnGap: 10,
  },
  captionBelow: {
    width: 500,
    marginTop: 15,
    marginBottom: 10,
    fontSize: 14,
  },
});
