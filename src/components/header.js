import PropTypes from 'prop-types';
import React from 'react';

function Header({ siteTitle }) {
  return <h3></h3>;
}

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
