import { useState, lazy } from 'react';
import PropTypes from 'prop-types';
import Logo from '../../../../assets/images/canevim-logo-dark-landscape.svg';
import MenuIcon from '../../../../assets/images/menu-icon.svg';

const SubPageHeaderContainer = ({ children }) => {
  const [logo] = useState(Logo);
  const [menuIcon] = useState(MenuIcon);
  return children && children({ logo, menuIcon });
};

SubPageHeaderContainer.propTypes = {
  children: PropTypes.func.isRequired,
};


export default SubPageHeaderContainer
