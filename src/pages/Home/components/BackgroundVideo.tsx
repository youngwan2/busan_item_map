import styles from '../Home.module.scss'
export default function BackgroundVideo() {
    return (
        <>
            <video className={styles.background_video} autoPlay muted preload='metedata' loop>
                <source src="/assets/slide/background-video.webm" type="video/webm" />
                <source src="/assets/slide/background-video.mp4" type="video/mp4" />
            </video>
            <div className={styles.video_overlay}></div>
        </>
    )
}