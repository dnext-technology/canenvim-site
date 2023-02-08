/* eslint-disable */
import PropTypes from 'prop-types';

const AboutPageContainer = ({ children}) => {

  return children && children({ });
};

AboutPageContainer.propTypes = {
  children: PropTypes.func.isRequired,
};




export default AboutPageContainer;
