import { StorageType, getStoreage } from '@/utils/storage'
import {atom} from 'recoil'

export const naverSearchAtom = atom<string[]>({
    key:'naver-search',
    default:[...getStoreage(StorageType.SESSION, 'naver')]
})