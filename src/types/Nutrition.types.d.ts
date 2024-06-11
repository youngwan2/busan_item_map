  export interface NutritionProductType{
  /** 고유 식별자 */
  id: number;
  /** 제품 코드 */
  product_code: string;
  /** 제품 이름 */
  name: string;
  /** 분류 */
  sort: string;
  /** 기준량 */
  base_g: string;
  /** 칼로리 (kcal) */
  kcal_g: number;
  /** 수분 함량 */
  water_g: string;
  /** 단백질 함량 (g) */
  protein_g: number;
  /** 지방 함량 (g) */
  fat_g: number;
  /** 탄수화물 함량 (g) */
  carbohydrate_g: number;
  /** 당류 함량 (g) */
  sugar_g: number;
  /** 식이 섬유 함량 (g) */
  dietary_fiber_g: string;
  /** 칼슘 함량 (mg) */
  calcium_mg: string;
  /** 철 함량 (mg) */
  iron_mg: string;
  /** 인 함량 (mg) */
  phosphorus_mg: string;
  /** 칼륨 함량 (mg) */
  potassium_mg: string;
  /** 나트륨 함량 (mg) */
  sodium_mg: number;
  // 비타민 정보
  /** 비타민 A 함량 (μg RAE) */
  vitamin_a_μg_rae: string;
  /** 레티놀 함량 (μg) */
  retinol_μg: string;
  /** 베타카로틴 함량 (μg) */
  beta_carotene_μg: string;
  /** 비타민 C 함량 (mg) */
  vitamin_c_mg: string;
  /** 비타민 D 함량 (μg) */
  vitamin_d_μg: string;
  /** 비타민B1(= 티아민)(mg) */
  thiamine_mg:string
  /** 비타민B2(= 리보플라빈)(mg) */
  riboflavin_mg:string
  /** 비타민B3(= 나이아신)(mg) */
  niacin_mg:string
  // 기타 영양소 정보
  /** 콜레스테롤 함량 (mg) */
  cholesterol_mg: number;
  /** 포화지방산 함량 (g) */
  saturated_fatty_acid_g: number;
  /** 트랜스지방산 함량 (g) */
  trans_fatty_acid_g: number;
  // 일반 정보
  /** 출처 이름 */
  source_name: string;
  /** 식품 중량 */
  food_weight: string;
  /** 원산지 국가명 */
  origin_country_name: string;
  /** 업체명 */
  company_name: string;
  /** 데이터 생성일자 */
  data_generation_date: string;
  /** 데이터 기준일자 */
  data_reference_date: string;
}
