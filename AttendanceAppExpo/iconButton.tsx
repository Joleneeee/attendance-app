import React, { useEffect, useState } from "react";
import { Feather } from "@expo/vector-icons";

import {
  StyleSheet,
  Text,
  View,
  Alert,
  TextInput,
  TouchableOpacity,
} from "react-native";
import axios from "axios";
import { getStudentList } from "./getStudentList";

const IconButton = ({ buttonIcon, label, date, time }) => {
  const [number, setNumber] = useState("");
  const [name, setName] = useState(" ");
  const [id, setStudentId] = useState('0')
  const [checkinCode, setCheckinCode] = useState("0");
  const [studentList, setStudentList] = useState([]);

  useEffect(() => {
    getCheckinCode();
    getStudentList();
  }, []);

  const getStudentList = async () => {
    const response = await axios.get(
      `http://192.168.0.110:3000/checkin/${number}`
    );
    const data = response.data[0];
    setStudentList(data.students);
  };

  const getCheckinCode = async () => {
    const response = await axios.get(
      `http://192.168.1.106:3000/checkin/${number}`
    );
    const data = response.data[0];
    console.log(data);
    if (data) {
      setCheckinCode(data.checkinCode.toString());
    }
  };

  const submitAttendance = async () => {
    studentList.push([name, id]);
    console.log("student list: " + studentList);
    const response = await axios.put(
      `http://192.168.1.106:3000/checkin/${number}`,
      { students: studentList }
    );
  };

  const handleCheckedIn = () => {
    getCheckinCode();
    if (number == checkinCode) {
      submitAttendance();
      alert("Check-in successful!");
    } else {
      alert("Invalid CheckinCode!");
      console.log("Invalid code");
    }
  };

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.checkIn}>Enter your check-in number: </Text>
        <TextInput
          placeholder="name"
          onChangeText={setName}
        ></TextInput>
        <TextInput
          placeholder="id"
          onChangeText={setStudentId}
        ></TextInput>
        <TextInput
          placeholder="Check-in number"
          value={number}
          onChangeText={setNumber}
        ></TextInput>
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
          <Text style={styles.captionBelow}>Date {date}</Text>
        </View>
        <View style={styles.columnBelow}>
          <Feather name="clock" size={24} color="black" />
          <Text style={styles.captionBelow}>Time {time}</Text>
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
