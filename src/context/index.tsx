import React, { createContext } from "react";

interface Brand {
  id: number,
  name: string
}

export interface MyItem {
  id: number,
  name: string,
  type: string,
  gender: string,
  description: string,
  price: number,
  brandId: number,
  brand: Brand
}

interface ContextProps {
  items: MyItem[]
}

export const EmptyContextDefaultValue: ContextProps = {
  items: []
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

export const AppContext = createContext<ContextProps>(EmptyContextDefaultValue);
export const AppContextProvider = AppContext.Provider;
export const AppContextConsumer = AppContext.Consumer;
