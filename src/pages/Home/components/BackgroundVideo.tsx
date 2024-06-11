import styles from '../Home.module.scss'
export default function BackgroundVideo() {
    return (
        <>
            <picture className={styles.background_image}>
                <source srcSet='/assets/slide/background_640.jpg' type='image/jpg' media='(max-width:640px)' />
                <source srcSet='/assets/slide/background_1280.jpg' type='image/jpg' media='(max-width:1280px)' />
                <img src="/assets/slide/background_1920.jpg" alt="홈 배경 이미지" />
            </picture>
            <div className={styles.video_overlay}></div>
        </>
    )
}