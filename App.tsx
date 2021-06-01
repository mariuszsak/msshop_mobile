import React, { useEffect } from "react";
import AppTabNavigator from "./src/components/navigator/AppTabNavigator";
import { AppContextProvider, useProduct } from "./src/context/ItemContext";
import { fetchData } from "./src/services/fetchData";
import './src/services/firebase-config';

const App = () => {
  const { setGlassItems } = useProduct();

  const handleFetchData = () => {
    fetchData("products").then(response => {
      setGlassItems(response);
    });
  };

  useEffect(() => {
    handleFetchData();
  }, []);

  return (
    <AppTabNavigator />
  );
};

export default () => {
  return (
    <AppContextProvider>
      <App />
    </AppContextProvider>
  );
};
