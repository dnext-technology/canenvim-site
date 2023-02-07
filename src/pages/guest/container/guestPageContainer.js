/* eslint-disable */
import PropTypes from 'prop-types';

const GuestPageContainer = ({ children}) => {

  return children && children({ });
};

GuestPageContainer.propTypes = {
  children: PropTypes.func.isRequired,
};




export default GuestPageContainer;
