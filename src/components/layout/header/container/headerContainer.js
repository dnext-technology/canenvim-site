import { useState, lazy } from 'react';
import PropTypes from 'prop-types';
import Logo from '../../../../assets/images/dashboard-logo.svg';

const HeaderContainer = ({ children }) => {
  const [logo] = useState(Logo);
  return children && children({ logo });
};

HeaderContainer.propTypes = {
  children: PropTypes.func.isRequired,
};


export default HeaderContainer
