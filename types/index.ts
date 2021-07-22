
export type ItemButton = {
  title: string;
  onPress: () => void;
  isEnabled: boolean;
}

export type GlassBrand = {
  brand_name: string;
}

export type GlassGender = {
  gender_name: string;
}

export type GlassType = {
  type_name: string;
}

export type GlassItem = {
  id: number;
  name: string;
  description: string;
  price: number;
  brand: GlassBrand;
  gender: GlassGender;
  type: GlassType;
  isBookmarked: boolean;
}

export type ProductType = { id: number } & GlassType;

export type GlassSelections = GlassType | GlassBrand | GlassGender;

export type UserData = {
  firstName: string;
  email: string;
}

export type BookmarkedItem = {
  glassItem: GlassItem;
  isBookmarked: boolean;
}

export type BasketItem = {
  glassItem: GlassItem;
  quantity: number;
}