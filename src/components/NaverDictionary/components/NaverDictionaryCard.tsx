import styles from '../NaverDictionary.module.scss';

import {type SyntheticEvent} from 'react'
import { DictionaryType } from '../NaverDictionary';


interface PropsType {
    item: DictionaryType
    i: number
}

export default function NaverDictionaryCard({ item, i }: PropsType) {
    const hasThumbnail = item.thumbnail.length > 1
    const { description, link, thumbnail, title } = item

    function handleImageRenderError(e:SyntheticEvent<HTMLImageElement>){
        const target = e.currentTarget
        target.src='/not-image.png'

    }
    return (
        <li className={styles.naver_dictionary_card} key={item.link}>
            <ul className={styles.naver_dictionary_card_content}>

                <li className={styles.naver_dictionary_card_content_left}>

                    <figure> <img onError={handleImageRenderError} width={280} height={200} src={hasThumbnail ? thumbnail : '/not-image.png'} alt={title + '이미지'} /></figure>

                </li>
                <li className={styles.naver_dictionary_card_content_right}>
                    <h3>
                        {i + 1}. {title.replaceAll('<b>', '').replaceAll('</b>', '')}
                    </h3>
                    <p className={styles.naver_dictionary_card_summary}>{description.replaceAll('<b>', '').replaceAll('</b>', '')||'미리보기 텍스트가 존재하지 않습니다.'}</p>
                    <a target="_blank" href={`${link}`}>
                        상세보기
                    </a></li>
            </ul>
        </li>
    )
}