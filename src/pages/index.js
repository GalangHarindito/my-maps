import { Suspense, lazy } from 'react';

const Suspensed = (Element) => function (props) {
    console.log(props)
  return (
    <Suspense fallback={<div />}>
      <Element {...props} />
    </Suspense>
  );
};

export const lazyLoad =  {
  Home: Suspensed(lazy(() => import('./Home/index'))),
};

