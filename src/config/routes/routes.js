import React from 'react';
import { PATHS } from '../../constants/routePaths';
import { HomePage, NotFoundPage, AboutPage, Guest, HousePage } from '../../pages';
import PrivacyPage from '../../pages/privacy/viev/privacyPageView';

const routes = {
  homePage: {
    path: PATHS.HOME_PAGE,
    element: <HomePage />,
  },
  aboutPage: {
    path: PATHS.ABOUT_PAGE,
    element: <AboutPage />,
  },
  privacyPage: {
    path: PATHS.PRIVACY_PAGE,
    element: <PrivacyPage />,
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
