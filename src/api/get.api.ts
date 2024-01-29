import axios from "axios"
import { config } from "../config/config"

/**
 * GET | 데이터베이스로 부터 페이지네이션된 지역 음식정보를 가져온다.
 * @param page 
 * @returns 
 */
export const getLocalFoodListFormDB = async (page:number=0) => {
    const url = config.prefix + config.host + '/localfood?page='+page
    const response = await axios.get(url)
    const data = response.data
    return data
}