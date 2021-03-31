import React, { createContext } from "react";

type Item = {
  value: number
}

type ContextProps = {
  items: Item[]
}

const ContextDefaultValue: ContextProps = {

}

export const AppContext = createContext<ContextProps>({
  items: []
});

//
export class ItemProvider extends React.Component {
  updateItem = (newItem: any) => {
    this.setState({ item: newItem })
  }

  state = {
    items: []
  }


  render() {
    return (
      <AppContext.Provider value={this.state}>
         {this.props.children}
         </AppContext.Provider>
     );
   }
}
//
//
// export const ItemConsumer = Context.Consumer;