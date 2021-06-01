import { View, Text, StyleSheet, Button } from "react-native";
import React, { useEffect, useState } from "react";
import Logo from "../components/logo";
import firebase from "firebase/app";
import "firebase/auth";

export default function MyAccount() {

  const [logged, setLogged] = useState<boolean>(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(r => {
      if (r) {
        setLogged(true);
      }
    });
  });

  function login(email: string, password: string) {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      // .then((r: firebase.auth.UserCredential) => {
      //   if (r) {
      //     setLogged(true);
      //   }
      .then();
  }

return (
  <View style={styles.container}>
    <View style={styles.header}>
      <Logo />
    </View>
    <View style={styles.body}>
      <Text>My account</Text>
      {logged ? <Text>You are logged in</Text> :
        <Button title={"hi"} onPress={() => login("abc@aaa.pl", "bumbum")} />}

    </View>
  </View>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    flex: 1,
    backgroundColor: "pink"
  },
  body: {
    flex: 9
  }
});
