import React from 'react';
import '../style/notFoundPageStyles.scss';
import NotFoundContainer from '../container/notFoundPageContainer';

const NotFoundPage = () => (
  <NotFoundContainer>
    {({ image }) => (
      <div className="not-found-container">
        <img alt={image} className="not-found-image" src={image} />
      </div>
    )}
  </NotFoundContainer>
);
export default NotFoundPage;
