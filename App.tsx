import React, { Component } from "react";
import AppTabNavigator from "./src/components/navigator/AppTabNavigator";
import { AppContext, ContextDefaultValue } from "./src/context";

export default class App extends Component {

  render() {
    return (
      <AppContext.Provider value={ContextDefaultValue}>
        <AppTabNavigator />
      </AppContext.Provider>
    );
  }
}
