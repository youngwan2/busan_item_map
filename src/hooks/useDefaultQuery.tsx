import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { ApiType, getDefaultFetcher } from '../api/get.api';
import { toast } from 'react-toastify';

/**
 * 내부 백엔드 호출용 리액트 쿼리
 * @param key 예) useQuery의 식별키 ['localfood', 5]
 * @param url 예) fetch 요청 주소 '/localfood?page=1'
 * @returns
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function useDefaultQuery(key: any[], url: string) {
  const { data, isPending, isError, error, isFetching, isPlaceholderData } =
    useQuery({
      queryKey: key,
      queryFn: () => getDefaultFetcher(url, ApiType.INTERNAL),
      placeholderData: keepPreviousData,
    });
  if (isError) toast.error('데이터 조회에 실패하였습니다.');
  return { data, isPending, isError, error, isFetching, isPlaceholderData };
}
