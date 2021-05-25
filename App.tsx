import React, { Component } from "react";
import AppTabNavigator from "./src/components/navigator/AppTabNavigator";
import { AppContextProvider } from "./src/context/ItemContext";
import { fetchData } from "./src/services/fetchData";

interface AppState {
  items: [];
}

interface Props {
  navigation: any;
}

class App extends Component<Props, AppState> {
  constructor(props: Props) {
    super(props);
    this.state = {
      items: []
    };
  }

  componentDidMount() {
    fetchData("products").then((response) => {
      this.setState({
        items: response
      });
    });
  }

  render() {
    return (
      <AppContextProvider value={this.state}>
        <AppTabNavigator />
      </AppContextProvider>
    );
  }
}

export default App;
