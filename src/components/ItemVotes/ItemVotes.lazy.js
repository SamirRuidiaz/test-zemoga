import React, { lazy, Suspense } from 'react';

const LazyItemVotes = lazy(() => import('./ItemVotes'));

const ItemVotes = props => (
  <Suspense fallback={null}>
    <LazyItemVotes {...props} />
  </Suspense>
);

export default ItemVotes;
