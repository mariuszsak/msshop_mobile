import React, { createContext } from "react";

type MyItem = {
  name: string,
  price: number
}

export type ContextProps = {
  items: MyItem[]
}

export const ContextDefaultValue: ContextProps = {
  items: [
    {
      name: "test1",
      price: 100
    },
    {
      name: "test2",
      price: 100
    }
  ]
};

export const AppContext = createContext<ContextProps>(ContextDefaultValue);

export class ItemProvider extends React.Component {
  updateItem = (newItem: any) => {
    this.setState({ items: newItem });
  };

  state = {
    items: []
  };

  render() {
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}
