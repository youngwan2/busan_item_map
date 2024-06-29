import styles from '@pages/Local/LocalDetail.module.scss';

import { useParams } from 'react-router-dom';
import useDefaultQuery from '@/hooks/useDefaultQuery';

import PageError from '@/components/Errors/PageError';
import GuideMessage from '@/components/GuideMessage';
import BackMove from '@/components/BackMove';

import { localFoodType } from '../LocalFood/types/localFood.types';
import LoadingSpinner from '@/components/Spinner/LoadingSpinner';
import { Helmet } from 'react-helmet';
import LeftContent from './components/LeftContent';
import RightContent from './components/RightContent';

export default function LocalFoodDetailPage() {
  const { id } = useParams();
  const {
    data: localFoodInfo,
    isError,
    isPending,
    isFetching,
    error,
  } = useDefaultQuery(['localfood', id], '/localfoods/' + id) as {
    data: localFoodType;
    isError: boolean;
    isPending: boolean;
    isFetching: boolean;
    error: Error | null;
  };
  const { sub_title, title } = localFoodInfo || replaceInfo;

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
          path="/localfood"
          subPath=""
          mainName="향토 이야기"
          finalPathName={title}
          subName="향토음식이야기"
        />
        {/* 좌측 컨텐츠 */}
        <LeftContent info={localFoodInfo} />

        {/* 우측 컨텐츠 */}
        <RightContent info={localFoodInfo} />
      </section>
    </>
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
};
