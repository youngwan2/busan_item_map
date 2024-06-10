import { ApiType, getDefaultFetcher } from '@/api/get.api'
import { useState, useEffect } from 'react'

interface PropsType {
    (url: string, type: ApiType):  { data:any, isLoading:boolean, isError:boolean, error:string }
}
const useFetch: PropsType = (url, type) => {

    const [data, setData] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)
    const [error, setError] = useState('')

    function stateUpdate(isLoading: boolean, isError: boolean, error: string) {
        setIsLoading(isLoading)
        setIsError(isError)
        setError(error)
    }


    useEffect(() => {
        async function getFetch(url: string, type: ApiType) {

            if(!url || !type) return 

            stateUpdate(true, false, '')
            const data = await getDefaultFetcher(url, type)
            if (!data) {
                stateUpdate(false, true, '데이터 조회 실패')
            } else {
                setData(data)
                stateUpdate(false, false, '')
            }
        }

        getFetch(url, type)
    }, [])

    return { data, isLoading, isError, error }
}

export default useFetch