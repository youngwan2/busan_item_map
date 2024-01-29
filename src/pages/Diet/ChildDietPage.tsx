import axios from "axios";
import styles from './ChildDiet.module.scss'
import { useCallback, useEffect, useRef, useState } from "react";
import { DietType } from "./types/Diet.types";
import ChildDietResults from "./components/ChildDietResults";
import ChildDietFilterMenu from "./components/ChildDietFIlterMenu";
import { SplitText } from "text-split-simple-js";
import gsap from "gsap";

const ChildDietPage = () => {
    const h1Ref = useRef<HTMLHeadingElement>(null)
    const [childDietList, setChildDietList] = useState<DietType[]>([])
    const [choiceKeyword, setChoiceKeyword] = useState('')
    const [choiceFoodIngredient, setChoiceFoodIngredient] = useState('')
    const [totalItemCount, setTotalItemCount] = useState(0)

    async function axiosReqByEnvMode(url: string) {
        const response = await axios.get(url)
        const { data } = response
        setChildDietList(data)
        setTotalItemCount(data.length)
    }

    useEffect(() => {
        if (h1Ref.current instanceof HTMLHeadingElement) {
            const id = "#" + h1Ref.current.id
            const chars = new SplitText(id).chars()
            gsap.from(chars, {
                y: 150, stagger: {
                    from: 'center',
                    amount: 1
                }
            })
        }
    }, [])

    const requestChildDietDataFromDB = useCallback((choiceKeyword: string, choiceFoodIngredient: string) => {
        try {
            if (import.meta.env.MODE !== 'production') {
                axiosReqByEnvMode(`http://localhost:3000/diet/child-diet?keyword=${choiceKeyword}&ingredient=${choiceFoodIngredient}`)

            } else {
                axiosReqByEnvMode(`/diet/child-diet?keyword=${choiceKeyword}&ingredient=${choiceFoodIngredient}`)
            }
        } catch (error) {
            console.error(error)
        }
    }, [])

    useEffect(() => {
        requestChildDietDataFromDB(choiceKeyword, choiceFoodIngredient)
    }, [requestChildDietDataFromDB, choiceFoodIngredient, choiceKeyword])

    return (
        <section className={styles.Diet_section}>

            <h2 className={styles.page_title}> <p>유아 식단</p></h2>
            <div className={styles.diet_body_area}>
                <ChildDietFilterMenu setChoiceKeyword={setChoiceKeyword} setChoiceFoodIngredient={setChoiceFoodIngredient} totalItemCount={totalItemCount} />
                <ChildDietResults childDietList={childDietList} />
                <h1 ref={h1Ref} id="diet_title">안녕하세요 제목입니다.</h1>
            </div>

        </section>
    );
}

export default ChildDietPage;