import React from 'react';
import Hello from './Hello';

const App = () => {
    return <Hello render={(data) => <p>{data.value}</p>} />;
};

export default App;
