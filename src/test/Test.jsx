import React from "react";
import {
  CaretDownOutlined,
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Divider, Layout, Menu, theme } from "antd";
import { FaLongArrowAltDown } from "react-icons/fa";
import logo from "../../public/Logo.png";
const { Header, Content, Sider } = Layout;
const items1 = ["1", "2", "3"].map((key) => ({
  key,
  label: `nav ${key}`,
}));
const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map(
  (icon, index) => {
    const key = String(index + 1);
    return {
      key: `sub${key}`,
      icon: React.createElement(icon),
      label: `subnav ${key}`,
      children: new Array(4).fill(null).map((_, j) => {
        const subKey = index * 4 + j + 1;
        return {
          key: subKey,
          label: `option${subKey}`,
        };
      }),
    };
  }
);
import { Typography } from "antd";
import TableData from "./Table";

const { Text } = Typography;

const Test = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout>
      <Header
        style={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "#fff",
          marginBottom: "10px",
        }}
      >
        <div>
          {" "}
          <img src={logo} alt="" />
        </div>
        <Breadcrumb
          style={{
            margin: "16px 0",
            cursor: "pointer",
          }}
        >
          <Breadcrumb.Item>Trang Chủ</Breadcrumb.Item>
          <Breadcrumb.Item>Quản Lý Tomxu</Breadcrumb.Item>
        </Breadcrumb>
      </Header>
      <Layout>
        <Layout
          style={{
            padding: "0 24px 24px",
          }}
        >
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <div className="flex gap-5 justify-center text-[1.2rem] ">
              <div>
                <p className=" text-black hover:opacity-[0.6] cursor-pointer font-bold">
                  {" "}
                  Trang Quảng Lý Giao Dịch
                </p>
                <Divider
                  style={{
                    borderColor: "black",
                    borderWidth: 1,
                    paddingTop: 0,
                    marginTop: "10px",
                  }}
                />
              </div>
              <div>
                <p className=" text-black hover:opacity-[0.6] cursor-pointer">
                  {" "}
                  Trang Quảng Lý Giao Dịch
                </p>
                {/*  <Divider
                  style={{
                    borderColor: "black",
                    borderWidth: 1,
                    paddingTop: 0,
                    marginTop: "10px",
                  }}
                /> */}
              </div>
            </div>
            <div className="mb-[20px] w-[100vw] flex">
              <span className="px-[10px] py-[5px] border-[1px] rounded-[8px] border-black  mr-[20px] ">
                <span className="text-[#474747]"> Loại giao dịch:</span>{" "}
                <span className="font-bold">Tất Cả</span>
                <CaretDownOutlined />
              </span>
              <span className="px-[10px] py-[5px] border-[1px] rounded-[8px] border-black flex cursor-pointer gap-2">
                <span className="text-[#474747]"> Loại TOMXU:</span>{" "}
                <span className="font-bold flex items-center ">
                  {" "}
                  <FaLongArrowAltDown className="" />
                  <span> Tất Cả</span>
                </span>
                <CaretDownOutlined />
              </span>
            </div>
            <div>
              <TableData />
            </div>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};
export default Test;
