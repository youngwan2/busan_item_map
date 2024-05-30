
import styles from './LocalMarketDetail.module.scss';

import { useParams } from 'react-router-dom';
import useDefaultQuery from '@/hooks/useDefaultQuery';

import PageError from '@/components/Errors/PageError';
import GuideMessage from '@/components/GuideMessage';
import BackMove from '@/components/BackMove';

import Maps from '@/components/Map/Maps';
import LoadingSpinner from '@/components/Common/Spinner/LoadingSpinner';

export default function LocalMarketDetailPage() {
  const { id } = useParams();
  
  const {
    data: localMarket,
    isError,
    isPending,
    isFetching,
    error,
  } = useDefaultQuery(['localmarket', id], '/localmarkets/' + id) as {
    data: any;
    isError: boolean;
    isFetching:boolean;
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
    era,
    main_thumb_url,
    la,
    lo,
    middle_title,
    sub_title,
    title,
  } = localMarket || REPLACE_VALUE

  
  if (isPending || isFetching) return <LoadingSpinner/>;
  if (isError) return <PageError error={error?.message} />;

  return (
    <section className={styles.LocalMarket_Detail}>
      <BackMove/>
      <GuideMessage stylesClassName={styles.page_path_guide_message} path="/localmarket" subPath='' mainName="향토 이야기" subName='향토시장이야기' finalPathName={title} />
      {/* 좌측 컨텐츠 */}
      <article className={styles.left_content}>
        <h3 className={styles.sub_title}>{sub_title}{'>' + middle_title}</h3>
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
          <a target='_blank' href={content_url}>{content_url}</a>
        </div>
        <div>
          <hr />
          <h3>시대/연대</h3>
          <span>{era || '조회된 데이터가 없습니다.'}</span>
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
        <div>
          <hr />
          <h3>위치정보/지방문화원</h3>
          <span>{lcc_address || '조회된 데이터가 없습니다.'}</span>
          <Maps defaultCenter={{lat:la, lng:lo}} address={lcc_address} />
        </div>
      </article>
    </section>
  );
}


const REPLACE_VALUE =  {
  content: '',
  content_url: '',
  create_at: '',
  update_at: '',
  keyword: '',
  era: '',
  la: 37.566826,
  lo: 126.9786567,
  lcc_address: '',
  main_thumb_url: '',
  rel_rest_address: '',
  rel_rest_name: '',
  rel_rest_tel: '',
  sub_title: '',
  title: '',
};