import { DietType } from '../types/Diet.types';
import styles from '../ChildDiet.module.scss';
import { FiX } from 'react-icons/fi';
import { useEffect } from 'react';
interface PropsType {
  dietList: DietType[];
  setCloseModal: (p: boolean) => void;
  index: number;
  setIndex: (p: number) => void;
}
const ChildDietDetailModal = ({ dietList, setCloseModal, index, setIndex }: PropsType) => {
  const split = dietList[index].COOK_MTH_CONT.split('.');
  const prevItemIndex = index - 1;
  const nextItemIndex = index + 1;
  const hasNext = dietList.length - 1 > index;
  const hasPrev = index > 0;

  if (dietList) {
    return (
      <>
        <section className={styles.Diet_modal_section}>
          <ul className={styles.modal_left}>
            <li>
              <h3 className={styles.modal_id}>
                {' '}
                CHAPTER {dietList[index].id} : {dietList[index].MEAL_NM} 만들기
              </h3>
            </li>
            <li className={styles.modal_close_btn}>
              <button
                onClick={() => {
                  setCloseModal(false);
                }}
              >
                <FiX fontSize={20} />
              </button>
            </li>
            <li>
              <strong>음식명</strong> <p>{dietList[index].MEAL_NM}</p>
            </li>
            <li>
              <strong>재료명</strong>
              <p>{dietList[index].MATRL_NM}</p>
            </li>
            <li>
              <strong>레시피</strong> <br />
              {split.map((cook) => {
                return <p key={cook}>{cook.replaceAll('<br>', '')}</p>;
              })}
            </li>
            <li
              style={hasPrev ? { visibility: 'visible' } : { visibility: 'hidden' }}
              className={styles.prev_btn}
              onClick={() => {
                hasPrev && setIndex(prevItemIndex);
              }}
            >
              {hasPrev &&
                `CHAPTER ${dietList[prevItemIndex].id} | ` + dietList[prevItemIndex].MEAL_NM}
            </li>
          </ul>
          <ul className={styles.modal_right}>
            <li>
              <strong>칼로리</strong>
              <p>{dietList[index].CALORIE_QY || '알수없음'}(kcal)</p>
            </li>
            <li>
              <strong>칼슘</strong>
              <p>{dietList[index].CALCIUM_QY || '알수없음'}(mg)</p>
            </li>
            <li>
              <strong>칼륨</strong>
              <p>{dietList[index].RIBOFLAMIN_QY || '알수없음'}(mg)</p>
            </li>
            <li>
              <strong>탄수화물</strong>
              <p>{dietList[index].CARBOH_QY || '알수없음'}(g)</p>
            </li>
            <li>
              <strong>지방</strong>
              <p>{dietList[index].FAT_QY || '알수없음'}(g)</p>
            </li>
            <li>
              <strong>단백질</strong>
              <p>{dietList[index].PROTEIN_QY || '알수없음'}(g)</p>
            </li>
            <li>
              <strong>나트륨</strong>
              <p>{dietList[index].NATRIUM_QY || '알수없음'}(mg)</p>
            </li>
            <li>
              <strong>나이아신</strong>
              <p>{dietList[index].NIACIN_QY || '알수없음'}(㎍)</p>
            </li>
            <li>
              <strong>인</strong>
              <p>{dietList[index].PHOSPH_QY || '알수없음'}(mg)</p>
            </li>
            <li>
              <strong>비타민A</strong>
              <p>{dietList[index].VITAMINA_QY || '알수없음'}(㎍)</p>
            </li>
            <li>
              <strong>비타민C</strong>
              <p>{dietList[index].VITAMINC_QY || '알수없음'}(mg)</p>
            </li>
            <li
              style={hasNext ? { visibility: 'visible' } : { visibility: 'hidden' }}
              className={styles.next_btn}
              onClick={() => {
                hasNext && setIndex(nextItemIndex);
              }}
            >
              {hasNext &&
                `CHAPTER ${dietList[nextItemIndex].id} | ` + dietList[nextItemIndex].MEAL_NM}
            </li>
          </ul>
        </section>
        <div
          className={styles.modal_overlay}
          onClick={() => {
            setCloseModal(false);
          }}
        ></div>
      </>
    );
  }
  return (
    <section className={styles.Diet_modal_section}>
      <h2 style={{ textAlign: 'center' }}>
        데이터 로드에 실패하였습니다. 잠시 후 다시 시도해주세요
      </h2>
    </section>
  );
};

export default ChildDietDetailModal;
