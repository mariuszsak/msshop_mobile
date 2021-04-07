import React, { Component } from "react";
import AppTabNavigator from "./src/components/navigator/AppTabNavigator";
import { AppContext, ContextDefaultValue } from "./src/context";
import { fetchData } from "./src/services/fetchData";

type AppState = {
  items: [];
};

interface Props {
  navigation: any
}

export default class App extends Component<Props, AppState> {
  constructor(props: Props) {
    super(props);
    this.state = {
      items: []
    };
  }

  componentDidMount() {
    fetchData('products').then((response) => {
      this.setState({
        items: response
      });
    });

  }

  render() {
    return (
      <AppContext.Provider value={this.state}>
        <AppTabNavigator />
      </AppContext.Provider>
    );
  }
}
