import React from 'react'
import { Table } from "antd";

const columns = [
  {
    title: "SNo",
    dataIndex: "key",
  },
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Email",
    dataIndex: "email",
  },
  {
    title: "Mobile",
    dataIndex: "mobile",
  },
  {
    title: "Status",
    dataIndex: "status",
  },

  {
    title: "Action",
    dataIndex: "action",
  },
];

const data = [];
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    email: `satty${i}@gmail.com`,
    mobile: 32,
    status: `London, Park Lane no. ${i}`,
  });
}

const CategoryList = () => {
  return (
    <div>
      <h3 className="mb-4 title">Category</h3>
      <div>
        <Table columns={columns} dataSource={data} />
      </div>
    </div>
  )
}

export default CategoryList