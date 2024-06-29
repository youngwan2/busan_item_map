import { create } from 'zustand';

/** Local 페이지 지역명 저장 */
interface useLocalRegionState {
  foodRegion: string;
  marketRegion: string;
  setFoodRegion: (newRegion: string) => void;
  setMarketRegion: (newRegion: string) => void;
}
export const useLocalRegionState = create<useLocalRegionState>((set) => ({
  foodRegion: '',
  marketRegion: '',
  setFoodRegion: (newRegion) => set({ foodRegion: newRegion }),
  setMarketRegion: (newRegion) => set({ marketRegion: newRegion }),
}));
