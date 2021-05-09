export interface Brand {
  brand_name: string;
}

export interface Gender {
  gender_name: string;
}

export interface Type {
  type_name: string;
}

export interface MyItem {
  id: number;
  name: string;
  description: string;
  price: number;
  brand: Brand;
  gender: Gender;
  type: Type;
}
