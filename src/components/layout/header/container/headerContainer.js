import { useState, lazy } from 'react';
import PropTypes from 'prop-types';
import Logo from '../../../../assets/images/logo.svg';
import MenuIcon from '../../../../assets/images/menu-icon.svg';

const HeaderContainer = ({ children }) => {
  const [logo] = useState(Logo);
  const [menuIcon] = useState(MenuIcon);
  return children && children({ logo, menuIcon });
};

HeaderContainer.propTypes = {
  children: PropTypes.func.isRequired,
};


export default HeaderContainer
