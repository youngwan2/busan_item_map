import axios from 'axios';
import { config } from '../config/config';

export enum ApiType {
  INTERNAL = 'INTERNAL', // 자체 백엔드 api
  EXTERNAL = 'EXTERNAL' // 타사 백엔드 api
}

/**
 * GET | 데이터베이스로 부터 특정 주소의 데이터를 가져온다.
 * @param url
 * @param type 
 * @returns data 반환
 */

export const getDefaultFetcher = async (url: string | null, type: ApiType) => {
  if (!url) return;
  const baseUrl = ApiType.INTERNAL === type ? config.protocol + config.host + url : url
  try {
    const response = await axios.get(baseUrl);
    const data = response.data;
    return data;
  } catch (error) {
    console.error('데이터 요청 실패:', error)
    return false
  }
};
