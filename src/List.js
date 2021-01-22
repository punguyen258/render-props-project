import React from 'react';
import PropTypes from 'prop-types';

const List = ({ render, data }) => {
  return <div>{data.map((item, index) => render(item, index))}</div>;
};

List.propTypes = {
  render: PropTypes.string.isRequired,
  data: PropTypes.string.isRequired,
};

export default List;
