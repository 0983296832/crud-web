export interface Animal {
  animal_id: number | any;
  animal_name: string;
  animal_desc: string;
  animal_avatar: string | null;
  animal_price: string | null;
  animal_short: string;
}

export interface AnimalList {
  animals: [Animal] | any;
  loading: boolean;
  error: boolean;
  total: number;
}
