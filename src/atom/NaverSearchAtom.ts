import { StorageType, getStoreage } from '@/utils/storage'
import {atom} from 'recoil'

export const naverSearchAtom = atom<string[]>({
    key:'naver',
    default:[...getStoreage(StorageType.SESSION, 'naver')]
})