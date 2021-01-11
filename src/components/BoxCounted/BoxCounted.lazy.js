import React, { lazy, Suspense } from 'react';

const LazyBoxCounted = lazy(() => import('./BoxCounted'));

const BoxCounted = props => (
  <Suspense fallback={null}>
    <LazyBoxCounted {...props} />
  </Suspense>
);

export default BoxCounted;
