import { useEffect, useRef } from 'react';
import styles from '../RecipeDetail.module.scss';
import { Link } from 'react-router-dom';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';
import useIntersection from '../../../hooks/useIntersection';

interface PropsType {
  param?: string;
}
function NextRecipe({ param }: PropsType) {

  const articleRef = useRef<HTMLAreaElement>(null);

  const { isEnd } = useIntersection(articleRef)

  function showNext(isShow: boolean) {
    if (!articleRef.current) return

    if (isShow) {
      articleRef.current.style.cssText = `
    opacity:1;
    visibility: visible;
    transform:translate(0,0);
 `;
    } else {
      articleRef.current.style.cssText = `
      opacity:0;
      visibility: hidden;
      transform:translate(0,-50px);
   `;
    }

  }

  useEffect(() => {

    isEnd && showNext(true);
  }, [isEnd]);

  return (
    <article className={styles.pagination_article} ref={articleRef}>
      {/* <button
        style={
          currentIndex <= 0
            ? { visibility: 'hidden', opacity: 0 }
            : { visibility: 'visible', opacity: 1 }
        }
      >
        <Link to={`/recipe/${prevRecipe?.RCP_SEQ}`}>
          <h4 style={{ background: `url(${prevRecipe?.ATT_FILE_NO_MAIN})` }}>
            {prevRecipe?.RCP_NM || '아이템이 존재하지 않습니다'}
          </h4>
          <span className={styles.btn_icons_left}>
            <FaArrowAltCircleLeft />
          </span>
        </Link>
      </button>
      
      <button
        style={
          currentIndex === lastIndex
            ? { visibility: 'hidden', opacity: 0 }
            : { visibility: 'visible', opacity: 1 }
        }
      >
        <Link to={`/recipe/${nextRecipe?.RCP_SEQ}`}>
          <h4 style={{ background: `url(${nextRecipe?.ATT_FILE_NO_MAIN})` }}>
            {nextRecipe?.RCP_NM || '아이템이 존재하지 않습니다.'}
          </h4>
          <span className={styles.btn_icons_right}>
            <FaArrowAltCircleRight />
          </span>
        </Link>
      </button> */}
    </article>
  );
}

export default NextRecipe;
