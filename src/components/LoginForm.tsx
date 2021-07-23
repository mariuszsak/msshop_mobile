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
    <View>
      <View>
        <Text>Type your login: </Text>
        <TextInput
          style={styles.input}
          onChangeText={handleEmailChange}
          value={email}
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>
      <View>
        <Text>Type your password:</Text>
        <TextInput
          style={styles.input}
          onChangeText={setPassword}
          value={password}
          autoCapitalize="none"
        />
      </View>
      <View style={styles.btn}>
        <Button
          title={"LOGIN"}
          onPress={() => login(email, password)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  btn: {
    backgroundColor: "#fff",
    padding: 10
    // borderWidth: 1,
    // borderRadius: 15
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1
  }
});