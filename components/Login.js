import React, {useState } from "react";
import { StyleSheet, Text, Button, TextInput, View } from "react-native";
import { SocialIcon } from "react-native-elements";

const Login = () => {
  const [btnvalue, btnchangeValue] = useState("Login");

  const changeText = () => {
    btnchangeValue(btnvalue == "Login" ? "Logout" : "Login");
  };

  return (
    <View style={styles.container}>
      <Text>My Mart</Text>
      <TextInput style={{ height: 40 }} placeholder="Username" />
      <TextInput style={{ height: 40 }} placeholder="passowrd" />
      <Button title={btnvalue} onPress={changeText} />

      <View style={styles.buttonContainer}>
        <SocialIcon type="facebook" />

        <SocialIcon type="google" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  header: {
    backgroundColor: "pink",
    padding: 50
  },
  boldText: {
    fontWeight: "bold"
  },
  input: {
    borderWidth: 1,
    borderColor: "#777",
    padding: 8,
    margin: 10,
    width: 200
  }
});

export default Login;
