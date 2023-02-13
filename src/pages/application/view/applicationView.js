import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import ApplicationContainer from '../container/applicationContainer';
import '../styles/applicationStyles.scss'

// Components
import { Loader, Header, Footer } from '../../../components';
import SubPageHeader from '../../../components/layout/sub-page-header/view/subPageHeaderView';

const ApplicationView = () => {
  const location = useLocation();
  return (
    <ApplicationContainer>
      {({ routes, isLoading }) => (
        <div className="main">
          <Helmet htmlAttributes={{ lang: 'en' }}>
            <title>Can Evim</title>
          </Helmet>
          {isLoading && <Loader />}
          {location.pathname === '/'
            ? <Header />
            : <SubPageHeader />}
          <div className="body">
            <Routes>
              {Object.keys(routes).map((index) => {
                return (
                  <Route key={index} path={routes[index].path} element={routes[index].element} />
                );
              })}
            </Routes>
          </div>
          <Footer />
        </div>
      )}
    </ApplicationContainer>
  )
};


export default ApplicationView;
