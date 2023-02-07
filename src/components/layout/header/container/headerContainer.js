import { useState } from 'react';
import PropTypes from 'prop-types';
import Logo from '../../../../assets/images/bw.png';

const HeaderContainer = ({ children }) => {
  const [logo] = useState(Logo);
  return children && children({ logo });
};

HeaderContainer.propTypes = {
  children: PropTypes.func.isRequired,
};


export default HeaderContainer
