import styles from '@pages/Nutrition/NutritionProductFliter.module.scss'

import React, { useState, ChangeEventHandler } from 'react'

import Container from "@/components/Common/Container";
import { restaurants } from '@/data';



interface PropsType {
  onChangeRestaurantValue:ChangeEventHandler<HTMLInputElement>
}

const limitRestaurantCount = 50
const fullRestaurantCount = restaurants.length
const hiddenRestaurantCount = fullRestaurantCount - limitRestaurantCount

export default function RestaurantFilter({onChangeRestaurantValue}:PropsType) {

  const [isAllRestaurant, setIsAllRestaurant] = useState(false)
  const visibleRestaurantCount = isAllRestaurant ? fullRestaurantCount : limitRestaurantCount

  function handleRestaurantVisibility(state: boolean, setState: React.Dispatch<React.SetStateAction<boolean>>) {
    setState(!state)
  }

  return (
    <Container container={'div'} className={styles.filter_content_wrapper}  >
      <h3>상호명</h3>
      <div className={styles.filter_contents}>
        {restaurants.slice(0, visibleRestaurantCount).map((restaurant) => {
          return (
            <div className={styles.input_container} key={restaurant.id}>
              <input onChange={onChangeRestaurantValue} name='restaurant' type="checkbox" id={restaurant.name + restaurant.id} value={restaurant.name} />
              <label htmlFor={restaurant.name + restaurant.id}>{restaurant.name}</label>
            </div>)
        })}
        {
          !isAllRestaurant
            ? <button className={styles.add_btn} onClick={() => handleRestaurantVisibility(isAllRestaurant, setIsAllRestaurant)} >{`...${hiddenRestaurantCount}개 더보기`}</button>
            : <button className={styles.hide_btn} onClick={() => handleRestaurantVisibility(isAllRestaurant, setIsAllRestaurant)} >...숨기기</button>
        }
      </div>
    </Container>
  )
}