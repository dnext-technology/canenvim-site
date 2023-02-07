import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Favicon from 'react-favicon';
import { Helmet } from 'react-helmet';
import ApplicationContainer from '../container/applicationContainer';
import '../styles/applicationStyles.scss'

// Components
import { Loader, Header, Footer } from '../../../components';

const ApplicationView = () => (
  <ApplicationContainer>
    {({ routes, isLoading }) => (
      <div className="main">
        <Favicon url="https://reactjs.org/favicon.ico" />
        <Helmet htmlAttributes={{ lang: 'en' }}>
          <title>Misafirperver</title>
        </Helmet>
        {isLoading && <Loader />}
        <Header />
        <div className="body">
          <Routes>
            {Object.keys(routes).map((index) => {
              return (
                <Route key={index} path={routes[index].path} element={routes[index].element} />
              );
            })}
          </Routes>
        </div>
        {/* <Footer /> */}
      </div>
    )}
  </ApplicationContainer>
);

export default ApplicationView;
