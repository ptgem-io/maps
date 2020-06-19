import React from 'react';
import PropTypes from 'prop-types';
import SEO from './seo';

const Layout = ({children}) => (
  <>
    <SEO title="Maps" keywords={[`gatsby`, `maps`, `ptgem`]} />
    {children}
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
