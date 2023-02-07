/* eslint-disable */
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';


// Constants
import { ROUTES } from '../../../config/routes';

const ApplicationContainer = ({ children }) => {
  const [routes] = useState(ROUTES);
 

  return (
    children &&
    children({
      routes,
    })
  );
};

ApplicationContainer.propTypes = {
  children: PropTypes.func.isRequired,
};

export default ApplicationContainer;
