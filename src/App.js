import React from 'react';
import Hello from './Hello';
import List from './List';

const App = () => {
  const bookNNA = ['Hạ đỏ', 'Mắt biếc', 'Tôi thấy hoa vàng'];
  const bookBC = ['Quân khu Nam Đồng', 'Đi trốn'];

  return (
    <div className="App">
      <Hello
        name="Nguyễn Nhật Ánh"
        render={(name) => <p>{`Tác giả : ${name}`}</p>}
      />
      <List
        data={bookNNA}
        render={(item, index) => (
          <ul key={index}>
            <li>{item}</li>
          </ul>
        )}
      />
      <Hello name="Bình Ca" render={(name) => <p>{`Tác giả : ${name}`}</p>} />
      <List
        data={bookBC}
        render={(item, index) => (
          <ul key={index}>
            <li>{item}</li>
          </ul>
        )}
      />
    </div>
  );
};

export default App;
