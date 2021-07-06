import React, { createContext, Dispatch, SetStateAction, useContext, useState } from "react";
import { BasketItem } from "../../types";

type BasketContext = {
  currentBasket: BasketItem[];
  setCurrentBasket: Dispatch<SetStateAction<BasketItem[]>>
}

export const ContextDefaultValue: BasketContext = {
  currentBasket: [],
  setCurrentBasket: () => {}
};

export const BasketContext = createContext<BasketContext>(ContextDefaultValue);

export const useBasket = () => {
  const context = useContext(BasketContext);
  if (!context) {
    throw new Error("Error while reading context!");
  }
  return context;
};


export const BasketContextProvider = ({ children }: {
  children: React.ReactNode
}) => {
  const [currentBasket, setCurrentBasket] = useState<BasketItem[]>([]);

  return (
    <BasketContext.Provider
      value={{
        currentBasket,
        setCurrentBasket
      }}>
      {children}
    </BasketContext.Provider>
  );
};


export const AppContextConsumer = BasketContext.Consumer;
