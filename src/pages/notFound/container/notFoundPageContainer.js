import { useState } from 'react';
import PropTypes from 'prop-types';
import NOT_FOUND from '../../../assets/images/notfound.svg';

const NotFoundContainer = ({ children }) => {
  const [image] = useState(NOT_FOUND);
  return children && children({ image });
};

NotFoundContainer.propTypes = {
  children: PropTypes.func.isRequired,
};

export default NotFoundContainer;
