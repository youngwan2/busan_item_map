import styles from './Maps.module.scss'

interface PropsType { name?: string }

export default function MapInfoWindow({ name }: PropsType) {
  return (
    < div className={styles.info_window}>
      <h2>{name || '조회 장소 없음'}</h2>
    </div>
  )
}