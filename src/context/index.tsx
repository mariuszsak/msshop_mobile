import React, { createContext } from "react";

type Brand = {
  id: number,
  name: string
}

type MyItem = {
  id: number,
  name: string,
  type: string,
  gender: string,
  description: string,
  price: number,
  brandId: number,
  brand: Brand
}

export type ContextProps = {
  items: MyItem[]
}

export const ContextDefaultValue: ContextProps = {
  items: [
    {
      id: 1,
      name: "Hugo Boss TEST 1",
      type: "EYEGLASSES",
      gender: "MALE",
      description: "HB glasses model TEST1",
      price: 800,
      brandId: 2,
      brand: {
        id: 2,
        name: "Hugo Boss"
      }
    },
    {
      id: 2,
      name: "Hugo Boss TEST 2",
      type: "EYEGLASSES",
      gender: "UNISEX",
      description: "HB glasses model TEST2",
      price: 1000,
      brandId: 2,
      brand: {
        id: 2,
        name: "Hugo Boss"
      }
    },
  ]
};

export const AppContext = createContext<ContextProps>(ContextDefaultValue);
//
// export class ItemProvider extends React.Component {
//   updateItem = (newItem: any) => {
//     this.setState({ items: newItem });
//   };
//
//   state = {
//     items: []
//   };
//
//   render() {
//     return (
//       <AppContext.Provider value={this.state}>
//         {this.props.children}
//       </AppContext.Provider>
//     );
//   }
// }
