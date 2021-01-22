import React from 'react';
import PropTypes from 'prop-types';

const Hello = ({ render, name }) => {
  return <h3>{render(name)}</h3>;
};

Hello.propTypes = {
  render: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Hello;
