import { Button, Input, Space, } from "antd";
import { EditOutlined } from '@ant-design/icons';
import React, { useState } from "react";

function WriteForm({ onSubmit }) {
    const [memo, setMemo] = useState('');
    
    const handleMemoChange = e => {
        setMemo(e.target.value);
    }

    const handleSubmit = () => {
        onSubmit({
            title: new Date().toLocaleDateString(),
            memo
        })
    }

    return (
        <Space>
            <Input 
                placeholder='할일 목록'
                value={memo}
                onChange={handleMemoChange}
            />
            <Button type='primary' icon={ <EditOutlined /> } onClick={handleSubmit}>
                작성
            </Button>
        </Space>
    );
}

export default WriteForm;