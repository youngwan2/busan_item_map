import styles from './IntroSlide.module.scss';
import nutrition from '/assets/nutritionback.png';
import recipe from '/assets/recipe.png';
import haccp from '/assets/haccpback.png';

import { useEffect, useRef, useLayoutEffect, useState } from 'react';
import { Link } from 'react-router-dom';
interface PropsType {
  page: number;
}

const IntroSlide = ({ page = 0 }: PropsType) => {
  const ulRef = useRef<HTMLUListElement>(null);
  const localImageRef = useRef<HTMLImageElement>(null);
  const ItemsTopRef = useRef<number[]>([]);
  const [preload, setPreload] = useState('');

  useLayoutEffect(() => {
    const image = new Image();
    image.src = '/assets/localfoodback.png';
    image.onload = () => {
      setPreload(image.src);
    };
  }, []);

  // ul의 자식요소를 가져와서 해당 자식 요소에 트렌스레이트 애니메이션 적용
  useEffect(() => {
    if (ulRef.current instanceof HTMLUListElement) {
      const lis = ulRef.current.childNodes;

      lis.forEach((li) => {
        if (li instanceof HTMLLIElement) {
          li.style.cssText = `
          transform : translateY(${-100 * (page - 1)}%);
          z-index: -1;
          padding:0; margin:0;
        `;
          if (Number(li.dataset.index) === page) {
            li.style.cssText = `
          `;
          }
        }
      });
    }
  }, [page]);
  // 각 ul 태그의 자식 요소(li)의 높이를 측정하여 저장
  useEffect(() => {
    if (ulRef.current instanceof HTMLUListElement) {
      const lis = [...ulRef.current.childNodes];
      lis.forEach((li) => {
        if (li instanceof HTMLLIElement) {
          const top = li.getBoundingClientRect().top;
          ItemsTopRef.current.push(top);
        }
      });
    }
  }, []);

  return (
    <ul className={styles.slide_con} ref={ulRef}>
      <li className={styles.slide_item}>
        <figure>
          <img
            ref={localImageRef}
            src={preload}
            alt="향토음식 소개의 배경이미지"
            width={1709}
            height={598}
          />
        </figure>
        <article className={styles.contents}>
          <strong>
            <p>
              우리나라 지역별 자부심이라 부를 수 있는 <mark>향토음식정보</mark>를 제공합니다. 과연,
              우리지역에는 어떤 향토음식이 있을까요?
            </p>
          </strong>
          <Link to={'/localfood'}>콘텐츠 바로가기</Link>
        </article>
      </li>
      <li className={styles.slide_item}>
        <figure>
          <img src={nutrition} alt="식품영양장보 소개의 배경이미지" />
        </figure>
        <article className={styles.contents}>
          <strong>
            <p>
              우리가 즐겨먹는 먹거리의 <mark>영양정보</mark>가 궁금하시다면 참고 해보세요.
            </p>
          </strong>
          <Link to={'/nutrition'}>콘텐츠 바로가기</Link>
        </article>
      </li>
      <li className={styles.slide_item}>
        <figure>
          <img src={haccp} alt="HACCP 소개의 배경이미지" />
        </figure>
        <article className={styles.contents}>
          <strong>
            <p>
              <mark>HACCP</mark> 인증을 받은 식품은 안심하고 먹을 수 있습니다. 혹시 그 식품, 인증된
              제품이 맞나요?
            </p>
          </strong>
          <Link to={'/haccp'}>콘텐츠 바로가기</Link>
        </article>
      </li>
      <li className={styles.slide_item}>
        <figure>
          <img src={recipe} alt="레시피 조회 페이지 소개의 배경이미지" />
        </figure>
        <article className={styles.contents}>
          <strong>
            <p>
              간편하게 먹을 수 있는 음식, 어떻게 만들 수 있을까요? 간편한 <mark>레시피</mark>정보가
              궁금하다면 활용해보세요.
            </p>
          </strong>
          <Link to={'/recipe'}>콘텐츠 바로가기</Link>
        </article>
      </li>
    </ul>
  );
};

export default IntroSlide;
