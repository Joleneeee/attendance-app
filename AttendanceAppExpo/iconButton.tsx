import React, { useState } from "react";
import { Feather } from "@expo/vector-icons";
import { randomBytes } from "react-native-randombytes";
import {
  StyleSheet,
  Text,
  View,
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
    const randomNumber = randomBytes(5).toString("hex");
    if (number === randomNumber) {
      alert("Check-in successful!");
  } else {
    console.log('Invalid code');
  }
};
  
  return (
    <View style={styles.containerBelow}>
        <View style={styles.columnBelow}>
          <Feather name="clock" size={24} color="black" />
          <Text style={styles.captionBelow}>Enter your check-in number: </Text>
          <TextInput placeholder="Check-in number" value={number}onChangeText={setNumber}></TextInput>
        </View>
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handleCheckedIn}>
        <View style={styles.buttonContent}>
          <Feather name={buttonIcon} size={100} color="white" />
          <Text style={styles.label}>{label}</Text>
          {/* {setNumber && (
            <Text style={styles.successMessage}>Successfully checked in!</Text> */}
          {/* )} */}
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
  button: {
    backgroundColor: "#000000",
    borderRadius: 400,
    width: 300,
    height: 300,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
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
  containerBelow: {
    flexDirection: "column",
    flexWrap: "wrap",
    marginTop: 30,
    paddingHorizontal: 20,
    paddingVertical: 20,
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