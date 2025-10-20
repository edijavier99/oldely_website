
// ==================== routes/index.tsx ====================
import { useRoutes } from 'react-router-dom';
import { Suspense } from 'react';
import LoadingSpinner from '../../core/components/LoadingSpinner';
import { routes } from './router.config';

const AppRoutes = () => {
  const element = useRoutes(routes);

  return (
    <Suspense fallback={<LoadingSpinner />}>
      {element}
    </Suspense>
  );
};

export default AppRoutes;

