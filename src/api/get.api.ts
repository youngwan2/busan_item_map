import axios from 'axios';
import { config } from '../config/config';

/**
 * GET | 데이터베이스로 부터 특정 주소의 데이터를 가져온다.
 * @param url
 * @returns data 반환
 */

export const getDefaultFetcher = async (url: string) => {
  if (!url) return;
  const baseUrl = config.prefix + config.host + url;
  const response = await axios.get(baseUrl);
  const data = response.data;
  return data;
};
