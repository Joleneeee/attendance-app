import React, { useState, useEffect } from "react";
import { Text, View } from "react-native";
import IconButton from "./iconButton";
import { updateUserStatus } from "./api/userApi";
import axios from "axios";
import moment from 'moment';

const CheckinScreen = () => {
  const [currentDate, setCurrentDate] = useState('');
  const [currentTime, setCurrentTime] = useState('');

    useEffect(() => {
      var date = moment()
                    .utcOffset('+08:00')
                    .format('MM/DD/YYYY');
      setCurrentDate(date);
      var time = moment()
                    .utcOffset('+08:00')
                    .format('hh:mm:ss a');
      setCurrentTime(time);
    }, []);


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
        date={currentDate}
        time={currentTime}
      />
    </View>
  );
};

export default CheckinScreen;
