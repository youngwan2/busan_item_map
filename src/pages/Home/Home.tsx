import LoadingSpinner from '@/components/Common/Spinner/LoadingSpinner';
import Introduce from './components/Introduce';
import { Suspense } from 'react';
const Home = () => {
  return (
    <Suspense
      fallback={<LoadingSpinner />}
    >
      <Introduce />
    </Suspense>
  );
};
export default Home;
