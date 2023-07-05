import React, { useState, useEffect } from "react";
import { Feather } from "@expo/vector-icons";
import {
  QueryClient,
  QueryClientProvider,
  useMutation,
  useQuery,
} from "@tanstack/react-query";
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
import IconButton from "./iconButton";
import { updateUserStatus } from "./api/userApi";
import axios from "axios";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
    },
  },
});

const CheckinScreen = () => {
  const [currentDate, setCurrentDate] = useState("");
  const [currentTime, setCurrentTime] = useState("");
  const [userStatus, setUserStatus] = useState("-");
  const [userTime, setUserTime] = useState("");
  const [userLocation, setUserLocation] = useState("");

  useEffect(() => {
    var date = new Date().getDate(); // current Date
    var month = new Date().getMonth() + 1; // current Month
    var year = new Date().getFullYear(); // current Year
    var hours = new Date().getHours() + 1; // current Hours
    var min = new Date().getMinutes(); // current Minutes
    var sec = new Date().getSeconds(); // current Seconds
    setCurrentDate(date + "/" + month + "/" + year + " ");
    setCurrentTime(hours + ":" + min + ":" + sec);
    fetchUserStatus(" ", 0);
  }, []);

  const fetchUserStatus = async (name: string, id: number) => {
    try {
      if (name != " " || id != 0) {
        const response = await axios.get(
          `http://192.168.1.109:3000/user/${name}/${id}`
        );
        const data = response.data[0];
        setUserStatus(data.status);
        setUserTime(data.time);
        setUserLocation(data.location);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleButtonPress = (name: string, idStr: string) => {
    const id = parseInt(idStr, 10);
    fetchUserStatus(name, id);
    updateUserStatus(name, id, userStatus);
  };

  return (
    <View style={{ display: "flex", paddingTop: 30 }}>
      <Text
        style={{
          display: "flex",
          fontSize: 20,
          fontWeight: "800",
          alignSelf: "center",
          justifyContent: "flex-end",
        }}
      >
        {currentDate}
      </Text>
      <IconButton
        buttonIcon="check"
        label="CHECK IN"
        onPress={handleButtonPress}
        captionIcon="map-pin"
        caption="LOCATION:"
        status={userStatus}
        time={userTime}
        location={userLocation}
      />
    </View>
  );
};

export default CheckinScreen;
