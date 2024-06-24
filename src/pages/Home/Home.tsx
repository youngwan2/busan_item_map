import Header from '@/components/Layout/Header';
import styles from './Home.module.scss';

import FeatureList from './components/FeatureList';
import Section from './components/Section';
import BackgroundVideo from './components/BackgroundVideo';

export default function Home() {
  return (
    <section className={styles.container} id="container">
      <Header />
      <Section className={`${styles.section} section`}>
        <FeatureList />
      </Section>
      <BackgroundVideo />
    </section>
  );
}
