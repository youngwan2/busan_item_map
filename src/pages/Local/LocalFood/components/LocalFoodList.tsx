import { useNavigate } from 'react-router-dom';
import LocalCard from '@/pages/Local/Common/LocalCard';

interface PropsType {
  localfoods: {
    content: string;
    content_url: string;
    create_at: string;
    keyword: string;
    lcc_address: string;
    local_food_id: number;
    main_thumb_url: string;
    rel_rest_address: string;
    rel_rest_name: string;
    rel_rest_tel: string;
    sub_title: string;
    title: string;
    update_at: string;
    view_count: number;
  }[];
}
const LocalFoodList = ({ localfoods = [] }: PropsType) => {
  const navigate = useNavigate();
  function onClickPageChange(id: number) {
    navigate('/localfood/' + id);
  }

  return (
    <>
      {localfoods.map((localfood) => {
        const { local_food_id, main_thumb_url, title } = localfood;
        return (
          <LocalCard key={local_food_id} onClick={() => onClickPageChange(local_food_id)} thnumUrl={main_thumb_url} title={title} />
        );
      })}
    </>
  );
};

export default LocalFoodList;
