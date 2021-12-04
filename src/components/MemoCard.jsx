import { Card } from "antd";
import React from "react";

function MemoCard({ title, memo }) {
    return (
        <Card title={title}>
            {memo}
        </Card>
    )
}

export default MemoCard;
