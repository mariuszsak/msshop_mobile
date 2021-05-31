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
  isFiltered: boolean;
  setIsFiltered: Dispatch<SetStateAction<boolean>>;
  filteredGlassItems: GlassItem[];
  setFilteredGlassItems: Dispatch<SetStateAction<GlassItem[]>>;
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
  setSelectedGlasses: () => {},
  isFiltered: false,
  setIsFiltered: () => {},
  filteredGlassItems: [],
  setFilteredGlassItems: ()=>{}
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

  // data from endpoints
  const [glassItemsByType, setGlassItemsByType] = useState<GlassType[]>([]);
  const [glassItemsByGender, setGlassItemsByGender] = useState<GlassGender[]>([]);
  const [glassItemsByBrand, setGlassItemsByBrand] = useState<GlassBrand[]>([]);

  // data for filtering
  const [selectedGlasses, setSelectedGlasses] = useState<GlassSelections[]>([]);

  // filtered data
  const [isFiltered, setIsFiltered] = useState<boolean>(false);
  const [filteredGlassItems, setFilteredGlassItems] = useState<GlassItem[]>([]);


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
        setSelectedGlasses,
        isFiltered,
        setIsFiltered,
        filteredGlassItems,
        setFilteredGlassItems
      }}>
      {children}
    </AppContext.Provider>
  );
};


export const AppContextConsumer = AppContext.Consumer;
