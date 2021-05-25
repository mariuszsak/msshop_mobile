import React, { createContext } from "react";
import { MyItem } from "../interfaces/MyItem";

export interface ContextProps {
  items: MyItem[];
}

export const EmptyContextDefaultValue: ContextProps = {
  items: []
};

export const ContextDefaultValue: ContextProps = {
  items: [
    {
      id: 1,
      name: "Hugo Boss TEST 1",
      description: "HB glasses model TEST1",
      price: 800,
      brand: {
        brand_name: "Hugo Boss"
      },
      gender: {
        gender_name: "Male"
      },
      type: {
        type_name: "Eyeglasses"
      }
    },
    {
      id: 2,
      name: "Hugo Boss TEST 2",
      description: "HB glasses model TEST2",
      price: 1000,
      brand: {
        brand_name: "Hugo Boss"
      },
      gender: {
        gender_name: "Female"
      },
      type: {
        type_name: "Eyeglasses"
      }
    }
  ]
};

export const AppContext = createContext<ContextProps>(EmptyContextDefaultValue);
export const AppContextProvider = AppContext.Provider;
export const AppContextConsumer = AppContext.Consumer;
