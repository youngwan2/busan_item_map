import styles from "../NutritionDetail.module.scss";
import GeneralInfo from "./GeneralInfo";
import VitaminInfo from "./VitaminInfo";
import EtcNutritionInfo from "./EtcNutritionInfo";
import ThreeNutritionInfo from "./ThreeNutritionInfo";
import MineralInfo from "./MineralInfo";

interface PropsType {
  detailNutritionData: any; // 여기서는 any 타입을 두고 각 자식 컴포넌트에서 명확한 타입을 지정하여 값을 받도록 함
}

const DetailContent = ({ detailNutritionData }: PropsType) => {

  return (
    <section className={styles.detail_contents} key={detailNutritionData.id}>
      <h2 className={styles.detail_page_title}>
        {detailNutritionData ? (
          `${detailNutritionData.식품명} : ${detailNutritionData.식품기원명}`
        ) : (
          <br />
        )}
      </h2>
      {/* 상단 그룹(일반정보, 비타민, 기타 영양성분, 그외) */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <GeneralInfo detailNutritionData={detailNutritionData} />
        <VitaminInfo detailNutritionData={detailNutritionData} />
        <EtcNutritionInfo detailNutritionData={detailNutritionData} />
      </div>
      {/* 하단 그룹(3대 영양소, 미네랄) */}
      
      <div className={styles.bottom_group}>
      <ThreeNutritionInfo detailNutritionData={detailNutritionData} />
        <MineralInfo detailNutritionData={detailNutritionData} />
        <hr />
      </div>
    </section>
  );
};

export default DetailContent;
