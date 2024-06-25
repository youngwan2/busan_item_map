import { useNavigate } from 'react-router-dom';
import LocalCard from '@/pages/Local/Common/LocalCard';

interface PropsType {
  localmarkets: {
    content: string;
    content_url: string;
    create_at: string;
    la: number;
    lo: number;
    era: string;
    keyword: string;
    view_count: number;
    lcc_address: string;
    local_market_id: number;
    main_thumb_url: string;
    middle_title: string;
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

  return (
    <>
      {localmarkets.map((localmarket) => {
        const { local_market_id, main_thumb_url, title } = localmarket;
        return (
          <LocalCard
            key={local_market_id}
            onClick={() => onClickPageChange(local_market_id)}
            thnumUrl={main_thumb_url}
            title={title}
          />
        );
      })}
    </>
  );
};

export default LocalMarketList;
