import { StorageType, getStoreage } from '@/utils/storage';
import { create } from 'zustand';

interface NaverSearchStoreType {
  searchList: string[];
  setSearchList: (searchList: string[]) => void;
}
export const useNaverSearchStore = create<NaverSearchStoreType>((set) => ({
  searchList: [...getStoreage(StorageType.SESSION, 'naver')],
  setSearchList: (newSearchList) => set(() => ({ searchList: newSearchList })),
}));
