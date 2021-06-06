import React, { useEffect } from "react";
import { AppContextProvider, useProduct } from "./src/context/ItemContext";
import { fetchData } from "./src/services/fetchData";
import "./src/services/firebase-config";
import { LoginContextProvider, useLogin } from "./src/context/LoginContext";
import DrawerNavigation from "./src/components/navigator/DrawerNavigation";

const App = () => {
  const { setGlassItems } = useProduct();
  const { token } = useLogin();

  const handleFetchData = () => {
    fetchData("products", token)
      .then(response => {
        setGlassItems(response);
      });
  };

  useEffect(() => {
    handleFetchData();
  }, []);

  return (
      <DrawerNavigation />
  );
};

export default () => {
  return (
    <AppContextProvider>
      <LoginContextProvider>
        <App />
      </LoginContextProvider>
    </AppContextProvider>
  );
};
