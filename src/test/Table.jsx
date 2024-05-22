import React from "react";

import { Space, Table, Tag } from "antd";
import { CaretDownOutlined } from "@ant-design/icons";
import PaginationTable from "./Pagination";
const columns = [
  {
    title: "Mã Giao Dịch",
    dataIndex: "magiaodich",
    key: "magiaodich",
  },
  {
    title: "Loại  Giao Dịch",
    dataIndex: "loaidgiaodich",
    key: "loaidgiaodich",
    sorter: true,
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color;
          if (tag == "Nhận Tiền") {
            color = "#91FF7F";
          } else if (tag == "Thưởng Đăng Kí") {
            color = "#F0C428";
          } else if (tag == "Mua Gói") {
            color = "#7FBAFF";
          } else if (tag == "Chuyển Tiền") {
            color = "#FF967F";
          } else {
            color = "#F0C428";
          }

          return (
            <Tag color={color} key={tag}>
              <p className="text-black"> {tag.toUpperCase()}</p>
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: "Số Lượng",
    dataIndex: "soluong",
    key: "soluong",
  },
  {
    title: "Từ",
    dataIndex: "tu",
    key: "tu",
    sorter: true,
  },
  {
    title: "Đến",
    dataIndex: "den",
    key: "den",
    sorter: true,
  },
  {
    title: "Token",
    dataIndex: "token",
    key: "token",
    sorter: true,
  },
  {
    title: "Thời Gian",
    dataIndex: "thoigian",
    key: "thoigian",
    render: (_, { thoigian }) => (
      <>
        <div>
          {" "}
          {thoigian.time} <br /> {thoigian.date}
        </div>
      </>
    ),
  },
];
const data = {
  key: "1",
  magiaodich: 123123123,
  loaidgiaodich: 32,
  soluong: "+123123",
  tu: "NguyenVanA",
  den: "NguyenVanA",
  token: "PTMOu",
  thoigian: {
    time: " 22:22:22",
    date: "22/08/2023",
  },

  tags: ["Nhận Tiền"],
};
/*  {
    key: "2",
    magiaodich: 123123123,
    loaidgiaodich: 32,
    soluong: "+123123",
    tu: "NguyenVanA",
    den: "NguyenVanA",
    token: "PTMOu",
    thoigian: {
      time: " 22:22:22",
      date: "22/08/2023",
    },
    tags: ["Thưởng Đăng Kí"],
  }, */

function createArray(element) {
  return new Array(1000).fill(element);
}

// Sử dụng hàm
const myArray = createArray(data);
console.log(myArray);
const TableData = () => (
  <>
    <div className="table-data">
      <Table columns={columns} dataSource={myArray} />
    </div>
  </>
);
export default TableData;
