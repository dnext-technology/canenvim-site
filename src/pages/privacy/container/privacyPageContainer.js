/* eslint-disable */
import PropTypes from 'prop-types';

const PrivacyPageContainer = ({ children}) => {

  return children && children({ });
};

PrivacyPageContainer.propTypes = {
  children: PropTypes.func.isRequired,
};




export default PrivacyPageContainer;
