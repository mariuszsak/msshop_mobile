import React, { createContext, Dispatch, SetStateAction, useContext, useState } from "react";
import { GlassBrand, GlassGender, GlassItem, GlassSelections, GlassType, ProductType } from "../../types";

type GlassContext = {
  glassItems: GlassItem[];
  setGlassItems: Dispatch<SetStateAction<GlassItem[]>>;
  glassItemsByType: GlassType[];
  setGlassItemsByType: Dispatch<SetStateAction<GlassType[]>>;
  glassItemsByGender: GlassGender[];
  setGlassItemsByGender: Dispatch<SetStateAction<GlassGender[]>>;
  glassItemsByBrand: GlassBrand[];
  setGlassItemsByBrand: Dispatch<SetStateAction<GlassBrand[]>>;
  selectedGlasses: GlassSelections[];
  setSelectedGlasses: Dispatch<SetStateAction<GlassSelections[]>>;
}

export const ContextDefaultValue: GlassContext = {
  glassItems: [],
  setGlassItems: () => {},
  glassItemsByType: [],
  setGlassItemsByType: () => {},
  glassItemsByGender: [],
  setGlassItemsByGender: () => {},
  glassItemsByBrand: [],
  setGlassItemsByBrand: () => {},
  selectedGlasses: [],
  setSelectedGlasses: () => {}
};

export const AppContext = createContext<GlassContext>(ContextDefaultValue);

export const useProduct = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("Error while reading context!");
  }
  return context;
};


export const AppContextProvider = ({ children }: {
  children: React.ReactNode
}) => {
  // general state with al items
  const [glassItems, setGlassItems] = useState<GlassItem[]>([]);


  const [glassItemsByType, setGlassItemsByType] = useState<GlassType[]>([]);
  const [glassItemsByGender, setGlassItemsByGender] = useState<GlassGender[]>([]);
  const [glassItemsByBrand, setGlassItemsByBrand] = useState<GlassBrand[]>([]);
  const [selectedGlasses, setSelectedGlasses] = useState<GlassSelections[]>([]);


  return (
    <AppContext.Provider
      value={{
        glassItems,
        setGlassItems,
        glassItemsByType,
        setGlassItemsByType,
        glassItemsByGender,
        setGlassItemsByGender,
        glassItemsByBrand,
        setGlassItemsByBrand,
        selectedGlasses,
        setSelectedGlasses
      }}>
      {children}
    </AppContext.Provider>
  );
};


export const AppContextConsumer = AppContext.Consumer;
