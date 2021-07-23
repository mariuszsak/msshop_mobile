import { View, Text, StyleSheet, StatusBar } from "react-native";
import React, { useEffect, useState } from "react";
import { Logo } from "../components/logo";
import "firebase/auth";
import { UserData } from "../../types";
import axios from "axios";
import { LoginForm } from "../components/LoginForm";
import { useLogin } from "../context/LoginContext";

interface Props {
  navigation: any;
}

export const AccountScreen = (props: Props) => {

  const { token, isLogged } = useLogin();
  const [userData, setUserData] = useState<UserData[]>([]);

  useEffect(() => {
    if (token) {
      fetchUserData(token);
    }
  }, [token, isLogged]);

  const fetchUserData = async (token: string) => {
    const res = await axios.get("http://192.168.0.2:3000/users", {
      headers: {
        Authorization: "Bearer " + token
      }
    }).then();
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Logo />
      </View>
      <View style={styles.body}>
        <Text>My account</Text>
        {isLogged
          ?
          <Text>You are logged in</Text>
          :
          <LoginForm navigation={props.navigation} />
        }
      </View>
      <View style={styles.footer} />
    </View>
  );
};

const styles = StyleSheet.create({
  //wtf
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight
  },
  header: {
    flex: 2
  },
  body: {
    flex: 15,
    backgroundColor: "#fff",
    paddingLeft: 20,
    paddingRight: 20
    // margin: 10
  },
  footer: {
    flex: 3,
    backgroundColor: "#fff"
  }
});

