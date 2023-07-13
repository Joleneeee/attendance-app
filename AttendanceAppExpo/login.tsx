import axios from "axios";
import React, { useEffect, useState } from "react";
import { View, Image, TextInput, Button, StyleSheet } from "react-native";

const Login = ({ navigation }: any) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleEmailChange = (value) => {
    setEmail(value);
  };

  const handlePasswordChange = (value) => {
    setPassword(value);
  };

  const getUserAuth = async () => {
    const response = await axios.get(`http://192.168.0.110:3000/student/${email}/${password}`);
    const data = response.data[0];
    console.log(data);
    return data;
  };

  const handleLogin = async () => {

    const data = getUserAuth();

    if (await data) {
      setIsLoggedIn(true);
      if(isLoggedIn) {
        navigation.navigate('Checkin');
        alert("Login Successful")
      }
    } else {
      alert("Login Failed")
      console.log("Invalid Student Id or password");
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("./sunwaylion.jpeg")}
        style={styles.logo}
        resizeMode="contain"
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={handleEmailChange}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={handlePasswordChange}
        secureTextEntry
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 200,
    height: 200,
  },
  input: {
    width: "80%",
    height: 40,
    borderWidth: 1,
    borderColor: "gray",
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default Login;