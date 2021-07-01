import { View, Text, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import Logo from "../components/logo";
import "firebase/auth";
import { UserData } from "../../types";
import axios from "axios";
import LoginForm from "../components/LoginForm";
import { useLogin } from "../context/LoginContext";
import styles from "../styles/style";

interface Props {
  navigation: any;
}

export default function MyAccount(props: Props) {

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
}
