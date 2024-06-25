import styles from '@pages/Local/LocalDetail.module.scss';
import { localFoodType } from '../types/localFood.types';
import Maps from '@/components/Map/Maps';
import { HiPhone } from 'react-icons/hi2';

interface PropsType {
  info: localFoodType;
}

export default function RightContent({ info }: PropsType) {
  const {
    content_url,
    keyword,
    create_at,
    update_at,
    rel_rest_address,
    rel_rest_name,
    rel_rest_tel,
    lcc_address,
  } = info;
  return (
    <div className={styles.right_content}>
      <div className={styles.content}>
        <h3>콘텐츠 바로가기</h3>
        <a href={content_url}>{content_url}</a>
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
        <h3>연관식당</h3>
        <span>
          {rel_rest_name
            ? rel_rest_name + `(${rel_rest_address})`
            : '조회된 데이터가 없습니다.'}
        </span>
        {rel_rest_tel ? (
          <span className={styles.rel_tel}>
            <HiPhone /> {rel_rest_tel}
          </span>
        ) : null}
        <Maps
          defaultCenter={{ lat: 37.566826, lng: 126.9786567 }}
          address={rel_rest_address}
          name={rel_rest_name || '조회된 이름이 없습니다.'}
        />
      </div>
      <div className={styles.content}>
        <hr />
        <h3>지방문화원</h3>
        <span>{lcc_address || '조회된 데이터가 없습니다.'}</span>
      </div>
    </div>
  );
}
