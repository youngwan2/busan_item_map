import { atom } from "recoil"

export const NutritionData = atom({
    key:'nutritionState',
    default:[]
})
export const NutritionKeyItemData = atom({
    key:'nutritionItemKeyState',
    default:0
})