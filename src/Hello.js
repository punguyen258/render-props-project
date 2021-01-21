import React from 'react';

const Hello = () => {
  return <div render={(data) => <p>{data.value}</p>} />;
};

export default Hello;
