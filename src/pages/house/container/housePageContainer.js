/* eslint-disable */
import PropTypes from 'prop-types';

const HousePageContainer = ({ children}) => {

  return children && children({ });
};

HousePageContainer.propTypes = {
  children: PropTypes.func.isRequired,
};




export default HousePageContainer;
