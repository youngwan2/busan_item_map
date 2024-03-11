import { useQuery } from '@tanstack/react-query';
import { getDefaultFetcher } from '../api/get.api';

/**
 *
 * @param key 예) useQuery의 식별키 ['localfood', 5]
 * @param url 예) fetch 요청 주소 '/localfood?page=1'
 * @returns
 */
export default function useDefaultQuery(key: any[], url: string) {
  const { data, isPending, isError, error, isFetching } = useQuery({
    queryKey: key,
    queryFn: () => getDefaultFetcher(url),
  });
  return { data, isPending, isError, error, isFetching };
}
