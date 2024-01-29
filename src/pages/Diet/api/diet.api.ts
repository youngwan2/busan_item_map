import axios from "axios";
import { DietType } from "../types/Diet.types";
async function axiosReqByEnvMode(url: string): Promise<DietType[]> {
    const response = await axios.get(url)
    const { data } = response
    return data

}

function requestChildDietDataFromDB(choiceKeyword: string, choiceFoodIngredient: string): Promise<DietType[]> {
    if (import.meta.env.MODE !== 'production') {
        const result = axiosReqByEnvMode(`http://localhost:3000/diet/child-diet?keyword=${choiceKeyword}&ingredient=${choiceFoodIngredient}`)
        return result
    }

    else {
        const result = axiosReqByEnvMode(`/diet/child-diet?keyword=${choiceKeyword}&ingredient=${choiceFoodIngredient}`)
        return result
    }
}

export default requestChildDietDataFromDB