import React from 'react';
import { PATHS } from '../../constants/routePaths';
import { HomePage, NotFoundPage } from '../../pages';

const routes = {
  homePage: {
    path: PATHS.HOME_PAGE,
    element: <HomePage />,
  },
  notFound: {
    path: '*',
    element: <NotFoundPage />,
  },
};

export default routes;
