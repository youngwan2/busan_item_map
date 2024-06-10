import { atom } from 'recoil';

export const NutritionPageNumber = atom({
  key: 'pageNumber',
  default: 1,
});

export const nutritionKcalFilter = atom({
  key:'kcal',
  default: {
    min:0,
    max:1000
  }
})