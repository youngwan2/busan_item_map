import { useEffect } from "react";
import { useAppDispatch } from "../app/hooks";
import { setHeaderTheme } from "../features/themeSlice/headerTheme";


export default function useHeaderTheme() {

    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(setHeaderTheme(true))
        return () => {
            dispatch(setHeaderTheme(false))
        }
    }, [])


}