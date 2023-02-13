/* eslint-disable */
import PropTypes from 'prop-types';

const GuestListPageContainer = ({ children}) => {

  return children && children({ });
};

GuestListPageContainer.propTypes = {
  children: PropTypes.func.isRequired,
};




export default GuestListPageContainer;
