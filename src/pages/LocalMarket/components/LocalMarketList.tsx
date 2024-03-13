import { HiSearchCircle } from 'react-icons/hi';
import styles from '../LocalMarket.module.scss';
import { useNavigate } from 'react-router-dom';

interface PropsType {
  localmarkets: {
    content: string;
    content_url: string;
    create_at: string;
    la: number
    lo: number
    era: string
    keyword: string;
    view_count:number;
    lcc_address: string;
    local_market_id: number;
    main_thumb_url: string;
    middle_title:string
    sub_title: string;
    title: string;
    update_at: string;
  }[];
}
const LocalMarketList = ({ localmarkets }: PropsType) => {
  const navigate = useNavigate();

  function onClickPageChange(id: number) {
    navigate('/localmarket/' + id);
  }

  if (!localmarkets) return <></>;
  return (
    <ul className={styles.localmarket_ul} id="localmarket-ul">
      {localmarkets.map((localmarket) => {
        const { local_market_id, main_thumb_url, title } = localmarket;
        return (
          <li className={styles.localmarket_li} key={local_market_id}>
            <img
              className={styles.main_thumb}
              src={main_thumb_url || '/not-image.png'}
              width={250}
              height={250}
            ></img>
            <p className={styles.main_thumb_title}>{title}</p>
            <button
              onClick={() => onClickPageChange(local_market_id)}
              aria-label="세부 페이지 이동 버튼"
            >
              <span>
                <HiSearchCircle />
              </span>
              더보기
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default LocalMarketList;
