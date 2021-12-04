import 'antd/dist/antd.css';
import { Card, Space } from "antd";
import WriteForm from './components/WriteForm';
import MemoCard from './components/MemoCard';
import React, { useState } from 'react';


function App() {
  const [memoList, setMemoList] = useState([]);

  const handleMemoSubmit = (memoData) => {
    setMemoList([...memoList, memoData])
  }

  return (
    <Space>
      <Card title='나의 메모장'>
        <WriteForm onSubmit={handleMemoSubmit} />
        {
          memoList.map((data, index) => (
            <MemoCard 
              title={ data.title }
              memo={ data.memo }
              id={ index }
              key={ index }
            />
          ))
        }
      </Card>
    </Space>
  );
}

export default App;
