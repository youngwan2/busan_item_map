import {
    useInfiniteQuery,
} from '@tanstack/react-query'
import axios from 'axios'
import { config } from '../config/config'

/**
 * 무한 스크롤 커스텀 훅
 * @param key 쿼리 식별키 ex 'localfood'
 * @param url api 경로 ex /localfood?page=
 * @returns 
 */
export const useInfiniteScroll = (key: string, url: string) => {

    const baseUrl = config.prefix + config.host + url +0
    const { data, isFetching, fetchNextPage, hasNextPage } = useInfiniteQuery({
        queryKey: [key],
        queryFn: async ({pageParam = baseUrl}) => {
            const res = await axios.get(pageParam)
            return res.data
        },
        initialPageParam: baseUrl,
        getNextPageParam: (lastPage) => {
            return lastPage.next || undefined
        }
    })

    const items = data?.pages.map((pageData) => { return pageData.items })
    const totalCount = data?.pages[0].totalCount || 0
    const concatItems = items? [].concat(...items) : []

    return { items:concatItems, totalCount, isFetching, hasNextPage, fetchNextPage }
}