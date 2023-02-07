/* eslint-disable */
import PropTypes from 'prop-types';

const HomePageContainer = ({ children}) => {

  return children && children({ });
};

HomePageContainer.propTypes = {
  children: PropTypes.func.isRequired,
};




export default HomePageContainer;
