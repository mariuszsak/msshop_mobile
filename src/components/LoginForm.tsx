import React, { useState } from "react";
import { Button, TextInput, View, Text, StyleSheet } from "react-native";
import firebase from "firebase";
import { useLogin } from "../context/LoginContext";

export const LoginForm = (props: { navigation: { navigate: any; }; }) => {

  const { navigate } = props.navigation;
  const { isLogged, setIsLogged, setToken } = useLogin();
  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");


  function login(val1: string, val2: string) {
    firebase
      .auth()
      .signInWithEmailAndPassword(val1, val2)
      .then((r: firebase.auth.UserCredential) => {
        if (r) {
          r.user?.getIdToken().then(tok => {
            console.log(tok);
            setToken(tok);
          });
          setIsLogged(true);
        }
      }).catch(e => {
      console.warn(e);
    });
  }

  const handleEmailChange = (data: any) => {
    setEmail(data);
  };

  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <View>
          <TextInput
            style={styles.input}
            onChangeText={handleEmailChange}
            value={email}
            placeholder={'Type your login'}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>
        <View>
          <TextInput
            style={styles.input}
            onChangeText={setPassword}
            value={password}
            placeholder={'Type your password'}
            autoCapitalize="none"
          />
        </View>
      </View>
      <View>
        <View style={styles.btn}>
          <Button
            title={"LOGIN"}
            onPress={() => login(email, password)}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 15
  },
  body: {
    backgroundColor: "#fff"
  },
  btn: {
    backgroundColor: "#fff",
    padding: 10
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1
  }
});