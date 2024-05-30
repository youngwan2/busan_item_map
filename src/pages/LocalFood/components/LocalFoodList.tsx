import styles from '../LocalFood.module.scss';
import { useNavigate } from 'react-router-dom';
import LocalCard from '@/components/LocalCard';

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

  if (localfoods.length < 1)
    return <ul className={styles.localfood_list_container} id="localfood-ul">
      <h2 className={styles.localfood_list_title}>향토음식 목록</h2>
      <li>조회된 목록이 존재하지 않습니다.</li></ul>
  return (
    <ul className={styles.localfood_list_container} id="localfood-ul">
      <h2 className={styles.localfood_list_title}>향토음식 목록</h2>
      {localfoods.map((localfood) => {
        const { local_food_id, main_thumb_url, title } = localfood;
        return (
          <LocalCard key={local_food_id} onClick={() => onClickPageChange(local_food_id)} id={local_food_id} thnumUrl={main_thumb_url} title={title} />
        );
      })}

    </ul>
  );
};

export default LocalFoodList;
