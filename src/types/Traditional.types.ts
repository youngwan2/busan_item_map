export interface TraditionalProductType {
  detail_category: string;
  food_type: string;
  main_category: string;
  name: string;
  product_id: number;
  sub_category: string;
  traditional_food_count: number;
}

export interface TraditionalFoodCategoryType {
  main: string[];
  sub: string[];
  detail: string[];
  foodType: string[];
}
