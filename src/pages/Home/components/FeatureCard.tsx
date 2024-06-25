import styles from '../Home.module.scss';

interface PropsType {
  feature: {
    index: number;
    id: string;
    title: string;
    description: string;
    link: string;
    imageUrl: string;
  };
}

export default function FeatureCard({ feature }: PropsType) {
  return (
    <div
      data-index={feature.index}
      className={`${styles.feature_card} home_feature_card`}
      id={feature.id}
    >
      <figure className={styles.img_wrapper}>
        <img src={feature.imageUrl} alt={feature.title} />
      </figure>
      <h2>{feature.title}</h2>
      <p>{feature.description}</p>
      <a href={feature.link}>더보기</a>
    </div>
  );
}
