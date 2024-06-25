import { useInfiniteQuery } from '@tanstack/react-query';
import axios from 'axios';
import { config } from '../config/config';

/**
 * 무한 스크롤 커스텀 훅
 * @param key 쿼리 식별키 ex 'localfood'
 * @param url api 경로 ex /localfood?page=
 * @returns
 */
export const useInfiniteScroll = (url: string, ...key: string[]) => {
  const baseUrl = config.protocol + config.host + url + 0;

  const { data, ...props } = useInfiniteQuery({
    queryKey: key,
    queryFn: async ({ pageParam = baseUrl }) => {
      const res = await axios.get(pageParam);
      return res.data;
    },
    initialPageParam: baseUrl,
    getNextPageParam: (lastPage) => {
      return lastPage.next || undefined;
    },
  });

  const items = data?.pages.map((pageData) => {
    return pageData.items || [];
  });

  const isLastPage = items && items[items.length - 1].length < 15;
  const totalCount = data?.pages[0].totalCount || 0;
  const concatItems = items ? [].concat(...items) : [];

  return { items: concatItems, totalCount, isLastPage, ...props };
};
