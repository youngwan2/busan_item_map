import styles from '../Home.module.scss'

import { useEffect, useState} from 'react'
import Button from "@/components/Common/Button"

import gsap from 'gsap'

import { HiMiniChevronLeft, HiMiniChevronRight } from 'react-icons/hi2';
import { BiPlay } from "react-icons/bi";


function getElements(target:string){
    return gsap.utils.toArray(target) as HTMLDivElement[]

}

export default function FeatureButton() {
    const [pause, setPause] = useState(false)

    // 슬라이드 자동 재생
    function autoSlide() {
        const timerId = setInterval(() => {
            onNextCard()
        }, 2000)
        return timerId
    }

    // 이전 슬라이드 이동
    function onPrevCard() {
        const containers = getElements('#feature_list_container') // memo: FeatureList.tsx 확인
        const cards = getElements('.home_feature_card') // memo: FeatureCard.tsx 확인

        const firstCard = cards[0]
        containers[0].append(firstCard)
    }

    // 다음 슬라이드 이동
    function onNextCard() {
        const containers = getElements('#feature_list_container')
        const cards = getElements('.home_feature_card')

        const choiceCard = cards[cards.length - 1]
        containers[0].prepend(choiceCard)
    }

    // 슬라이드 중지/실행 버튼
    function onPlayAndPauseCard() {
        setPause(old => !old)
    }

    // 슬라이드 일시중지
    function onPause() {
        setPause(true)
    }

    // 슬라이드 재생
    function onPlay() {
        setPause(false)
    }

    useEffect(() => {
        if (pause) return
        const timeId = autoSlide()
        return () => {
            clearInterval(timeId)
        }

    }, [pause])

    useEffect(()=> {
        const cards = getElements('.home_feature_card')
        cards[0].addEventListener('mouseenter', onPause)
        cards[0].addEventListener('mouseleave', onPlay)

        return ()=>{
            removeEventListener('mouseenter', onPause)
            removeEventListener('mouseleave', onPlay)
        }
    },[pause])


    return (
        <div  className={`${styles.home_feature_card_control_button_container}`}>
            <Button title='이전 슬라이드 이동' stylesClassName={styles.home_feature_card_control_button} onClick={onPrevCard}><HiMiniChevronLeft /> </Button>
            <Button title={!pause?'슬라이드 중지 버튼' :'슬라이드 재생 버튼'}stylesClassName={styles.home_feature_card_control_button} onClick={onPlayAndPauseCard}>{!pause ? '=' : <BiPlay />} </Button>
            <Button title='다음 슬라이드 이동' stylesClassName={styles.home_feature_card_control_button} onClick={onNextCard}><HiMiniChevronRight /></Button>
        </div>
    )
}