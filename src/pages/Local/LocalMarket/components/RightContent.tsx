import styles from '@pages/Local/LocalDetail.module.scss'

import Maps from '@/components/Map/Maps'

import { LocalMarketDetailType } from "../types/localMarket.types"


interface PropsType {
    info: LocalMarketDetailType
}

export default function RightContent({ info }: PropsType) {

    const { content_url, era, keyword, create_at, update_at, lcc_address, la, lo } = info
    return (
        <div className={styles.right_content}>
            <div className={styles.content}>
                <h3>콘텐츠 바로가기</h3>
                <a target='_blank' href={content_url}>{content_url}</a>
            </div>
            <div className={styles.content}>
                <hr />
                <h3>시대/연대</h3>
                <span>{era || '조회된 데이터가 없습니다.'}</span>
            </div>
            <div className={styles.content}>
                <hr />
                <h3>연관 키워드</h3>
                <span>{keyword || '조회된 데이터가 없습니다.'}</span>
            </div>
            <div className={styles.content}>
                <hr />
                <h3>등록일자</h3>
                <span>{create_at || '조회된 데이터가 없습니다.'}</span>
            </div>
            <div className={styles.content}>
                <hr />
                <h3>갱신일자</h3>
                <span>{update_at || '조회된 데이터가 없습니다.'}</span>
            </div>
            <div className={styles.content}>
                <hr />
                <h3>위치정보/지방문화원</h3>
                <span>{lcc_address || '조회된 데이터가 없습니다.'}</span>
                <Maps defaultCenter={{ lat: la, lng: lo }} address={lcc_address} />
            </div>
        </div>
    )
}