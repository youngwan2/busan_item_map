import styles from "./IntroSlide.module.scss";
import localfood from "../../../assets/localfoodback.png";
import bmi from "../../../assets/bmi.png";
import recipe from "../../../assets/recipe.png";
import haccp from "../../../assets/haccpback.png";
import nutrition from "../../../assets/nutritionback.png";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
interface PropsType {
  page: number;
  setPage: (p:number)=> void
}

const IntroSlide = ({ page = 0, setPage}: PropsType) => {
  const ulRef = useRef<HTMLUListElement>(null);
  const ItemsTopRef = useRef<number[]>([])

  useEffect(() => {
    if (ulRef.current instanceof HTMLUListElement) {
      const li = ulRef.current.childNodes;

      li.forEach((el) => {
        if (el instanceof HTMLLIElement) {
          el.style.cssText = `
          transform : translateY(${-100 * (page - 1)}%);
          z-index: -1;
          padding:0; margin:0;
        `;
          if (Number(el.dataset.index) === page) {
            el.style.cssText = `
          `;
          }
        }
      });
    }
  }, [page]);

  useEffect(()=>{
    if(ulRef.current instanceof HTMLUListElement) {
      const lis = [...ulRef.current.childNodes]
      lis.forEach((li)=>{
        if(li instanceof HTMLLIElement) {
          const top=li.getBoundingClientRect().top
          ItemsTopRef.current.push(top)
        }
      })
    }
  },[])


  return (
    <ul className={styles.slide_con} ref={ulRef}>
      <li className={styles.slide_item}>
        <figure>
          <img  src={localfood} alt="향토음식 소개의 배경이미지" />
        </figure>
        <article className={styles.contents}>
          <strong>
            <p>
              우리나라 지역별 자부심이라 부를 수 있는 <mark>향토음식정보</mark>
              를 제공합니다. 과연, 우리지역에는 어떤 향토음식이 있을까요?
            </p>
          </strong>
          <Link to={"/localfood"}>콘텐츠 바로가기</Link>
        </article>
      </li>
      <li className={styles.slide_item}>
        <figure>
          <img src={nutrition} alt="식품영양장보 소개의 배경이미지" />
        </figure>
        <article className={styles.contents}>
          <strong>
            <p>
              우리가 즐겨먹는 먹거리의 <mark>영양정보</mark>가 궁금하시다면 참고
              해보세요.
            </p>
          </strong>
          <Link to={"/nutrition"}>콘텐츠 바로가기</Link>
        </article>
      </li>
      <li className={styles.slide_item}>
        <figure>
          <img src={haccp} alt="HACCP 소개의 배경이미지" />
        </figure>
        <article className={styles.contents}>
          <strong>
            <p>
              <mark>HACCP</mark> 인증을 받은 식품은 안심하고 먹을 수 있습니다.
              혹시 그 식품, 인증된 제품이 맞나요?
            </p>
          </strong>
          <Link to={"/haccp"}>콘텐츠 바로가기</Link>
        </article>
      </li>
      <li className={styles.slide_item}>
        <figure>
          <img src={recipe} alt="레시피 조회 페이지 소개의 배경이미지" />
        </figure>
        <article className={styles.contents}>
          <strong>
            <p>
              간편하게 먹을 수 있는 음식, 어떻게 만들 수 있을까요? 간편한{" "}
              <mark>레시피</mark>정보가 궁금하다면 활용해보세요.
            </p>
          </strong>
          <Link to={"/recipe"}>콘텐츠 바로가기</Link>
        </article>
      </li>
      <li className={styles.slide_item}>
        <figure>
          <img src={bmi} alt="체질량지수 페이지 소개의 배경이미지" />
        </figure>
        <article className={styles.contents}>
          <strong>
            <p>
              먹는 것도 중요하지만, 스스로 건강을 챙기는 것도 중요하겠죠?
              간단하지만 참고하실 수 있는 <mark> BMI 계산기</mark>를
              활용해보세요!
            </p>
          </strong>
          <Link to={"/bmi"}>콘텐츠 바로가기</Link>
        </article>
      </li>
    </ul>
  );
};

export default IntroSlide;
