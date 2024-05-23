import { HiSearchCircle } from 'react-icons/hi';
import styles from '../LocalFood.module.scss';
import { useNavigate } from 'react-router-dom';

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
const LocalFoodList = ({ localfoods }: PropsType) => {
  const navigate = useNavigate();

  function onClickPageChange(id: number) {
    navigate('/localfood/' + id);
  }

  if (!localfoods) return <></>;

  return (
    <ul className={styles.localfood_ul} id="localfood-ul">
      {localfoods.map((localfood) => {
        const { local_food_id, main_thumb_url, title } = localfood;
        return (
          <li className={styles.localfood_li} key={local_food_id}>
            <img
              className={styles.main_thumb}
              src={main_thumb_url || '/not-image.png'}
              width={250}
              height={250}
            ></img>
            <p className={styles.main_thumb_title}>{title}</p>
            <button
              onClick={() => onClickPageChange(local_food_id)}
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

export default LocalFoodList;
