import React, { useState } from "react";
import { Feather } from "@expo/vector-icons";

import {
  StyleSheet,
  Text,
  View,
  Alert,
  TextInput,
  TouchableOpacity,
} from "react-native";

const IconButton = ({
  buttonIcon,
  label,
  onPress,
  status,
  date,
  time,
}) => {
  const [number, setNumber] = useState("");

  const handleCheckedIn = () => {
    const randomNumber = "5";
    if (number === randomNumber) {
      alert("Check-in successful!");
  } else {
    console.log('Invalid code');
  }
};
  
  return (
    <View>
        <View style={styles.container}>
          <Text style={styles.checkIn}>Enter your check-in number: </Text>
          <TextInput placeholder="Check-in number" value={number}onChangeText={setNumber}></TextInput>
        </View>
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handleCheckedIn}>
        <View style={styles.buttonContent}>
          <Feather name={buttonIcon} size={100} color="white" />
          <Text style={styles.label}>{label}</Text>
        </View>
      </TouchableOpacity>
      </View>

      <View style={styles.containerBelow}>
        <View style={styles.columnBelow}>
          <Feather name="clock" size={24} color="black" />
          <Text style={styles.captionBelow}>Date             {date}</Text>
        </View>
        <View style={styles.columnBelow}>
          <Feather name="clock" size={24} color="black" />
          <Text style={styles.captionBelow}>Time            {time}</Text>
        </View>
        <View style={styles.columnBelow}>
          <Feather name="sunrise" size={24} color="black" />
          <Text style={styles.captionBelow}>
            Checkin            {status.toUpperCase()}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  checkIn: {
    alignItems: "center",
    fontWeight: "bold",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#000000",
    borderRadius: 400,
    width: 300,
    height: 300,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
  },
  buttonContent: {
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
  containerBelow: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 30,
    marginLeft: 70,
    paddingHorizontal: 20,
    paddingVertical: 30,
    backgroundColor: "#F5F5F5",
    width: 250,
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
    fontWeight: "500",
  },
}); 

export default IconButton;