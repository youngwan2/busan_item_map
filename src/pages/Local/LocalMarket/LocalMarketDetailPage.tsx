import styles from '@pages/Local/LocalDetail.module.scss';

import { useParams } from 'react-router-dom';
import useDefaultQuery from '@/hooks/useDefaultQuery';

import PageError from '@/components/Errors/PageError';
import GuideMessage from '@/components/GuideMessage';
import BackMove from '@/components/BackMove';

import LoadingSpinner from '@/components/Spinner/LoadingSpinner';
import { Helmet } from 'react-helmet';
import LeftContent from './components/LeftContent';
import RightContent from './components/RightContent';
import { LocalMarketDetailType } from './types/localMarket.types';

export default function LocalMarketDetailPage() {
  const { id } = useParams();

  const {
    data: localMarket,
    isError,
    isPending,
    isFetching,
    error,
  } = useDefaultQuery(['localmarket', id], '/localmarkets/' + id) as {
    data: LocalMarketDetailType;
    isError: boolean;
    isFetching: boolean;
    isPending: boolean;
    error: Error | null;
  };

  const { sub_title, title } = localMarket || REPLACE_VALUE;

  if (isPending || isFetching) return <LoadingSpinner />;
  if (isError && error) return <PageError>{error.message}</PageError>;

  return (
    <>
      <BackMove />
      <section className={styles.local_detail_page_container}>
        <Helmet>
          <meta charSet="utf-8" />
          <title> {title} | FoodPicker</title>
          <meta name="description" content={sub_title} />
        </Helmet>

        <GuideMessage
          stylesClassName={styles.page_path_guide_message}
          path="/localmarket"
          subPath=""
          mainName="향토 이야기"
          subName="향토시장이야기"
          finalPathName={title}
        />
        {/* 좌측 컨텐츠 */}
        <LeftContent info={localMarket} />
        {/* 우측 컨텐츠 */}
        <RightContent info={localMarket} />
      </section>
    </>
  );
}

const REPLACE_VALUE = {
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
