import React from 'react';
import { PATHS } from '../../constants/routePaths';
import { HomePage, NotFoundPage, AboutPage } from '../../pages';

const routes = {
  homePage: {
    path: PATHS.HOME_PAGE,
    element: <HomePage />,
  },
  aboutPage: {
    path: PATHS.ABOUT_PAGE,
    element: <AboutPage />,
  },
  notFound: {
    path: '*',
    element: <NotFoundPage />,
  },
};

export default routes;
