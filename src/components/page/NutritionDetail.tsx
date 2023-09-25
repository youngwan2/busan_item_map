import Chart from "../../chart/Chart"
import { useParams } from "react-router-dom"
import { useSelector } from "react-redux/es/hooks/useSelector"

const NutritionDetail = () => {

    /** id
    : 
    13
    나트륨(mg)
    : 
    "328"
    니아신(mg)
    : 
    "7.585"
    단백질(g)
    : 
    "6.31"
    당류(g)
    : 
    "0"
    대표식품코드
    : 
    "6260"
    데이터기준일자
    : 
    "2023-08-31"
    데이터생성일자
    : 
    "2018-12-31"
    레티놀(μg)
    : 
    "1"
    리보플라빈(mg)
    : 
    "0.009"
    베타카로틴(μg)
    : 
    "381"
    비타민 A(μg RAE)
    : 
    "33"
    비타민 C(mg)
    : 
    "2.35"
    비타민 D(μg)
    : 
    "0"
    수분(g)
    : 
    "86.2"
    식이섬유(g)
    : 
    "2.4"
    식품기원명
    : 
    "가정식(분석 함량)"
    식품명
    : 
    "감자탕"
    식품중량
    : 
    "530g"
    업체명
    : 
    "해당없음"
    에너지(kcal)
    : 
    "71"
    영양성분함량기준량
    : 
    "100g"
    인(mg)
    : 
    "43"
    지방(g)
    : 
    "4.06"
    철(mg)
    : 
    "1.06"
    출처명
    : 
    "식품의약품안전처"
    칼륨(mg)
    : 
    "98"
    칼슘(mg)
    : 
    "38"
    콜레스테롤(mg)
    : 
    "38.53"
    탄수화물(g)
    : 
    "2.27"
    트랜스지방산(g)
    : 
    "0.01"
    티아민(mg)
    : 
    "0.164"
    포화지방산(g)
    : 
    "1.16"
    회분(g)
    : 
    "1.18" */

    const detailNutritionData = useSelector<any>((state) => state.nutrition) as any

    console.log(detailNutritionData)

    return (
        <div>
            <article
                key={detailNutritionData.id}
            >
                <section id={`${detailNutritionData.id}`}>
                    <h4>{detailNutritionData.식품명}</h4>
                    <strong>일반정보</strong>
                    <>
                        <p>
                            <span>식품기원명</span>
                            {detailNutritionData.식품기원명 || "정보 없음"}
                        </p>
                        <p>
                            <span>출처명</span>
                            {detailNutritionData.출처명 || "정보 없음"}
                        </p>
                        <p>
                            <span>식품중량</span>
                            {detailNutritionData.식품중량 || "정보 없음"}
                        </p>
                        <p>
                            <span>데이터생성일자</span>
                            {detailNutritionData.데이터생성일자 || "정보 없음"}
                        </p>
                        <p>
                            <span>데이터기준일자</span>
                            {detailNutritionData.데이터기준일자 || "정보 없음"}
                        </p>
                        <p>
                            <span>영양성분함량기준량</span>
                            {detailNutritionData.영양성분함량기준량 || "정보 없음"}
                        </p>
                        <p>
                            <span>에너지(kcal)</span>
                            {detailNutritionData["에너지(kcal)"] || "정보 없음"}
                        </p>
                    </>
                </section>

                {/* 3대 영양소 */}
                <section>
                    <strong>3대 영양소 </strong>
                    <>
                        <p>
                            <span>탄수화물(g)</span>
                            {detailNutritionData["탄수화물(g)"] || "정보 없음"}
                        </p>
                        <p>
                            <span>단백질(g)</span>
                            {detailNutritionData["단백질(g)"] || "정보 없음"}
                        </p>
                        <p>
                            <span>지방(g)</span>
                            {detailNutritionData["지방(g)"] || "정보 없음"}
                        </p>
                    </>
                </section>

                {/* 무기질 */}
                <section>
                    <strong>무기질</strong>
                    <>
                        <p>
                            <span>칼슘(mg)</span>
                            {detailNutritionData["칼슘(mg)"] || "정보 없음"}
                        </p>
                        <p>
                            <span>철(mg)</span>
                            {detailNutritionData["철(mg)"] || "정보 없음"}
                        </p>
                        <p>
                            <span>인(mg)</span>
                            {detailNutritionData["인(mg)"] || "정보 없음"}
                        </p>
                        <p>
                            <span>칼륨(mg)</span>
                            {detailNutritionData["칼륨(mg)"] || "정보 없음"}
                        </p>
                        <p>
                            <span>나트륨(mg)</span>
                            {detailNutritionData["나트륨(mg)"] || "정보 없음"}
                        </p>
                    </>
                </section>

                {/* 비타민 */}
                <section>
                    <strong>비타민</strong>
                    <>
                        <p>
                            <span>비타민A(μg RAE)</span>
                            {detailNutritionData["비타민 A(μg RAE)"] || "정보 없음"}
                        </p>
                    </>
                </section>
                {/* 기타 영양소 */}
                <section>
                    <strong>기타 영양소</strong>
                    <>
                        <p>
                            <span>당류(g)</span>
                            {detailNutritionData["당류(g)"] || "정보 없음"}
                        </p>
                        <p>
                            <span>식이섬유(g)</span>
                            {detailNutritionData["식이섬유(g)"] || "정보 없음"}
                        </p>
                    </>
                </section>

                {/* 그 외 성분 */}
                <section>
                    <strong>그 외 성분</strong>
                    <>
                        <p>
                            <span>레티놀(ug)</span>
                            {detailNutritionData["레티놀(μg)"] || "정보 없음"}
                        </p>
                        <p>
                            <span>베타카로틴(μg)</span>
                            {detailNutritionData["베타카로틴(μg)"] || "정보 없음"}
                        </p>
                        <p>
                            <span>티아민(mg)</span>
                            {detailNutritionData["티아민(mg)"] || "정보 없음"}
                        </p>
                        <p>
                            <span>리보플라빈(mg)</span>
                            {detailNutritionData["리보플라빈(mg)"] || "정보 없음"}
                        </p>
                        <p>
                            <span>콜레스테롤(mg)</span>
                            {detailNutritionData["콜레스테롤(mg)"] || "정보 없음"}
                        </p>
                        <p>
                            <span>포화지방산(g)</span>
                            {detailNutritionData["포화지방산(g)"] || "정보 없음"}
                        </p>
                        <p>
                            <span>트랜스지방산(g)</span>
                            {detailNutritionData["트랜스지방산(g)"] || "정보 없음"}
                        </p>
                    </>
                </section>
            </article>
        </div>
    )
}

export default NutritionDetail