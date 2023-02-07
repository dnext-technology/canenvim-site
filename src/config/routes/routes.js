import React from 'react';
import { PATHS } from '../../constants/routePaths';
import { HomePage, NotFoundPage, AboutPage, Guest, HousePage } from '../../pages';

const routes = {
  homePage: {
    path: PATHS.HOME_PAGE,
    element: <HomePage />,
  },
  aboutPage: {
    path: PATHS.ABOUT_PAGE,
    element: <AboutPage />,
  },
  housePage: {
    path: PATHS.HOUSE_PAGE,
    element: <HousePage />,
  },
  guestPage: {
    path: PATHS.GUEST_PAGE,
    element: <Guest />,
  },
  notFound: {
    path: '*',
    element: <NotFoundPage />,
  },
};

export default routes;
