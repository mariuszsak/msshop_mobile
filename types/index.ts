export type ItemButton = {
  title: string;
  onPress: () => void;
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
}

export type ProductType = { id: number } & GlassType;

export type GlassSelections = GlassType | GlassBrand | GlassGender;
