import styles from './LocalFoodDetail.module.scss';

import { useParams } from 'react-router-dom';
import useDefaultQuery from '@/hooks/useDefaultQuery';

import PageError from '@/components/Errors/PageError';
import GuideMessage from '@/components/Common/GuideMessage';
import BackMove from '@/components/Common/BackMove';
import Maps from '@/components/Common/Map/Maps';
import ReactSpinner from '@/components/UI/ReactSpinner';

import { localFoodType } from '../LocalFood/types/localFood.types';


export default function LocalFoodDetailPage() {
  const { id } = useParams();
  const {
    data: localFood,
    isError,
    isPending,
    error,
  } = useDefaultQuery(['localfood', id], '/localfoods/' + id) as {
    data: localFoodType;
    isError: boolean;
    isPending: boolean;
    error: Error | null;
  };
  const {
    content,
    content_url,
    create_at,
    update_at,
    keyword,
    lcc_address,
    main_thumb_url,
    rel_rest_address,
    rel_rest_name,
    sub_title,
    title,
  } = localFood || replaceInfo


  if (isPending) return <ReactSpinner />;
  if (isError) return <PageError error={error?.message} />;

  return (
    <section className={styles.LocalFood_Detail}>
      <BackMove />
      <GuideMessage stylesClassName={styles.page_path_guide_message} path="/localfood" subPath='' mainName="향토 이야기" finalPathName={title} subName='향토음식이야기' />
      {/* 좌측 컨텐츠 */}
      <article className={styles.left_content}>
        <h3 className={styles.sub_title}>{sub_title}</h3>
        <h2 className={styles.title}>{title}</h2>
        <img
          className={styles.thumb}
          src={main_thumb_url || '/not-image.png'}
          alt="썸네일 이미지"
        />
        <p className={styles.sumary}>{content}</p>
      </article>
      {/* 우측 컨텐츠 */}
      <article className={styles.right_content}>
        <div>
          <h3>콘텐츠 바로가기</h3>
          <a href={content_url}>{content_url}</a>
        </div>
        <div>
          <hr />
          <h3>연관 키워드</h3>
          <span>{keyword || '조회된 데이터가 없습니다.'}</span>
        </div>
        <div>
          <hr />
          <h3>등록일자</h3>
          <span>{create_at || '조회된 데이터가 없습니다.'}</span>
        </div>
        <div>
          <hr />
          <h3>갱신일자</h3>
          <span>{update_at || '조회된 데이터가 없습니다.'}</span>
        </div>
        <div className={styles.rel_rest || '조회된 데이터가 없습니다.'}>
          <hr />
          <h3>연관식당</h3>
          <span>
            {rel_rest_name ? rel_rest_name + `(${rel_rest_address})` : '조회된 데이터가 없습니다.'}
          </span>
          <Maps defaultCenter={{ lat: 37.566826, lng: 126.9786567 }} address={rel_rest_address} name={rel_rest_name || '조회된 이름이 없습니다.'} />
        </div>
        <div>
          <hr />
          <h3>지방문화원</h3>
          <span>{lcc_address || '조회된 데이터가 없습니다.'}</span>
        </div>
      </article>
    </section>
  );
}


const replaceInfo = {
  content: '',
  content_url: '',
  create_at: '',
  update_at: '',
  keyword: '',
  lcc_address: '',
  main_thumb_url: '',
  rel_rest_address: '',
  rel_rest_name: '',
  rel_rest_tel: '',
  sub_title: '',
  title: '',
}