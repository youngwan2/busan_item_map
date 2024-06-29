import { create } from 'zustand';

/** ai 음식 가이드 모달의 상태 저장 */
interface AiModalStateType {
  isOpen: boolean;
  setIsOpen: (newState: boolean) => void;
}
export const useAimodalState = create<AiModalStateType>((set) => ({
  isOpen: false,
  setIsOpen: () => set((state) => ({ isOpen: !state.isOpen })),
}));
