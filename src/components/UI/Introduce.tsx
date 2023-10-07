import styles from "./Introduce.module.css";
import { Link } from "react-router-dom";

const Introduce = () => {
  return (
    <div className={styles.Introduce}>
      <section className={styles.intro_header}>
        <h2 className={styles.intro_title}>FoodPick 사이트 소개</h2>
        <article className={styles.intro_content}>
          <p>
            저희 사이트는 다양한 음식 관련 데이터를 간편하게 조회하여 필요한
            정보를 얻어가실 수 있도록 하는 정보 조회 및 제공 사이트 입니다.
          </p>
        </article>
      </section>
      <section className={styles.intro_main}>
        <h2 className={styles.intro_title}>주요 콘텐츠</h2>
        <article className={styles.intro_content}>
          <p>
            현재는 향토음식조회, 식품영양조회, 부산생필품정보, HACCP 제품조회
            서비스를 제공하고 있습니다. 아래 항목의 각 제목을 클릭하면 해당 서비스를 제공하는 페이지로 이동할 수 있으니 참고바랍니다.
          </p>
          <nav>
            <ul className={styles.intro_main_menu}>
              <li>
                <strong>
                  <Link to={"/localfood"}>향토음식조회</Link>
                </strong>
                <p>각 지역의 명물이라 할 수 있는 향토음식을 주제별로 조회할 수 있는 서비스를 제공합니다.</p>
              </li>
              <li>
                <strong>
                  <Link to={"/nutrition"}>식품영양조회</Link>
                </strong>
                <p>우리가 자주 시켜먹는 배달음식뿐만 아니라 각종 식품에 대한 영양정보를 조회하여 제공합니다.</p>
              </li>
              <li>
                <strong>
                  <Link to={"/item"}> 부산생필품정보</Link>
                </strong>
                <p>부산광역시 내 각종 생필품 정보를 테이블 형식으로 페이지 단위로 나눠서 정보를 제공합니다. 항목을 클릭하면 해당 장소의 위치 정보를 지도 api를 사용하여 제공합니다.</p>
              </li>
              <li>
                <strong>
                  <Link to={"/haccp"}> HACCP제품조회</Link>
                </strong>
                <p>무엇이든 안전한 식품이 좋겠죠? HACCP로 등록된 식품 정보에 대한 조회 서비스를 제공합니다. 이미지뿐만 아니라 해당 제품의 영양정보도 제공하니 활용해보시기 추천드립니다.</p>
              </li>
            </ul>
          </nav>
        </article>
      </section>
      <section className={styles.intro_footer}>
        <h2 className={styles.intro_title}>추후 계획</h2>
        <article className={styles.intro_content}>
          <p>
            향후 데이터를 시각적으로 나타내어, 사용자가 필요한 정보를 한 눈에 파악하여 정보를 검색하는 시간을 최대한 줄일 수 있도록 기능을 추가해 나갈 예정입니다.
            <br /> 또한, 머신러닝 기술을 활용하여 제공된 정보뿐만 아니라 생산성 있는 정보를 얻어갈 수 있도록 해볼 예정입니다.
          </p>
        </article>
      </section>
    </div>
  );
};

export default Introduce;
