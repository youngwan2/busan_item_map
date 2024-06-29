import { create } from 'zustand';

interface NutritionStoreType {
  page: number;
  setPage: (newPage: number) => void;
}
/** 식품영양정보조회 페이지 번호 관리 */
export const useNutritionPageStore = create<NutritionStoreType>(() => ({
  page: 1,
  setPage: (newPage) => ({ page: newPage }),
}));

interface NutritionKcalStoreType {
  kcal: {
    min: number;
    max: number;
  };
  setKcal: (newKcal: { min: number; max: number }) => void;
}

/** 식품영양정보조회 칼로리 필터 상태 관리 */
export const useNutritionKcalFilterStore = create<NutritionKcalStoreType>(
  (set) => ({
    kcal: {
      min: 0,
      max: 1000,
    },
    setKcal: (newKcal) => set(() => ({ kcal: newKcal })),
  }),
);
