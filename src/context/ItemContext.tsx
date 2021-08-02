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
  bookmarkedItems: GlassItem[],
  setBookmarkedItems: Dispatch<SetStateAction<GlassItem[]>>,
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
  setFilteredGlassItems: ()=>{},
  bookmarkedItems: [],
  setBookmarkedItems: () => {}
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
  const [glassItems, setGlassItems] = useState<GlassItem[]>([]);

  const [glassItemsByType, setGlassItemsByType] = useState<GlassType[]>([]);
  const [glassItemsByGender, setGlassItemsByGender] = useState<GlassGender[]>([]);
  const [glassItemsByBrand, setGlassItemsByBrand] = useState<GlassBrand[]>([]);

  const [selectedGlasses, setSelectedGlasses] = useState<GlassSelections[]>([]);

  const [isFiltered, setIsFiltered] = useState<boolean>(false);
  const [filteredGlassItems, setFilteredGlassItems] = useState<GlassItem[]>([]);

  const [bookmarkedItems, setBookmarkedItems] = useState<GlassItem[]>([])

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
        setFilteredGlassItems,
        bookmarkedItems,
        setBookmarkedItems
      }}>
      {children}
    </AppContext.Provider>
  );
};

export const AppContextConsumer = AppContext.Consumer;
