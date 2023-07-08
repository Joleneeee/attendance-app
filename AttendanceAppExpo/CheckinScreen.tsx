import React, { useState, useEffect } from "react";
import { Text, View } from "react-native";
import IconButton from "./iconButton";
import { updateUserStatus } from "./api/userApi";
import axios from "axios";
import moment from 'moment';

const CheckinScreen = () => {
  const [currentDate, setCurrentDate] = useState('');
  const [currentTime, setCurrentTime] = useState('');
  const [userStatus, setUserStatus] = useState("-");

    useEffect(() => {
      var date = moment()
                    .utcOffset('+08:00')
                    .format('MM/DD/YYYY');
      setCurrentDate(date);
      var time = moment()
                    .utcOffset('+08:00')
                    .format('hh:mm:ss a');
      setCurrentTime(time);
      fetchUserStatus(" ", 0);
    }, []);

  // Deprecated 
  const fetchUserStatus = async (name: string, id: number) => {
    try {
      if (name != " " || id != 0) {
        const response = await axios.get(
          `http://192.168.0.179:3000/user/${name}/${id}`
        );
        const data = response.data[0];
        setUserStatus(data.status);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleCheckedIn = (name: string, idStr: string) => {
    const id = parseInt(idStr, 10);
    fetchUserStatus(name, id);
    updateUserStatus(name, id, userStatus);
  };

  return (
    <View style={{ display: "flex", paddingTop: 100 }}>
      <Text
        style={{
          display: "flex",
          fontSize: 20,
          fontWeight: "800",
          alignSelf: "center",
          justifyContent: "flex-end",
        }}
      >
      </Text>
      <IconButton
        buttonIcon="check"
        label="CHECK IN"
        onPress={handleCheckedIn}
        status={userStatus}
        date={currentDate}
        time={currentTime}
      />
    </View>
  );
};

export default CheckinScreen;
