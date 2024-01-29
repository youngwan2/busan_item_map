
import styles from './ChildDiet.module.scss'
import { useEffect, useState } from "react";
import requestChildDietDataFromDB from './api/diet.api';

import ChildDietResults from "./components/ChildDietResults";
import ChildDietFilterMenu from "./components/ChildDietFIlterMenu";
import { useQuery } from "@tanstack/react-query";

const ChildDietPage = () => {

    const [choiceKeyword, setChoiceKeyword] = useState('')
    const [choiceFoodIngredient, setChoiceFoodIngredient] = useState('')
    const [totalItemCount, setTotalItemCount] = useState(0)

    const { data: childDietList } = useQuery({
        queryKey: ['child-diet', `${choiceKeyword}`, `${choiceFoodIngredient}`],
        queryFn: () => requestChildDietDataFromDB(choiceKeyword, choiceFoodIngredient)
    })

    useEffect(()=>{
        if(childDietList) setTotalItemCount(childDietList.length)
    },[childDietList])

    useEffect(()=>{
        document.title = "유아 식단 | FoodPicker"
    },[])

    return (
        <section className={styles.Diet_section}>
            <h2 className={styles.page_title}> <p>유아 식단</p></h2>
            <div className={styles.diet_body_area}>
                <ChildDietFilterMenu setChoiceKeyword={setChoiceKeyword} setChoiceFoodIngredient={setChoiceFoodIngredient} totalItemCount={totalItemCount} />
                <ChildDietResults childDietList={childDietList} />
            </div>
        </section>
    );
}

export default ChildDietPage;