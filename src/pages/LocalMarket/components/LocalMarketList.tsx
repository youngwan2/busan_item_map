import { HiSearchCircle } from 'react-icons/hi';
import styles from '../LocalMarket.module.scss';
import { useNavigate } from 'react-router-dom';
import LocalCard from '@/components/LocalCard';

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

  if (localmarkets.length < 1)
    return     <ul className={styles.localmarket_list_container} id="localmarket-ul">
    <h2 className={styles.localmarket_list_title}>향토시장 목록</h2>
      <li>조회된 목록이 존재하지 않습니다.</li></ul>
  return (
    <ul className={styles.localmarket_list_container} id="localmarket-ul">
      <h2 className={styles.localmarket_list_title}>향토시장 목록</h2>
      {localmarkets.map((localmarket) => {
        const { local_market_id, main_thumb_url, title } = localmarket;
        return (
          <LocalCard onClick={()=> onClickPageChange(local_market_id)} id={local_market_id} thnumUrl={main_thumb_url} title={title}/>
        );
      })}
    </ul>
  );
};

export default LocalMarketList;
