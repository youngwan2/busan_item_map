import styles from '../Home.module.scss';
import FeatureButton from './FeatureButton';

import FeatureCard from './FeatureCard';

import { features } from '@/data';

export default function FeatureList() {
  return (
    <div className={styles.feature_list_container} id="feature_list_container">
      {features.map((feature) => (
        <FeatureCard key={feature.id} feature={feature} />
      ))}
      <FeatureButton />
    </div>
  );
}
