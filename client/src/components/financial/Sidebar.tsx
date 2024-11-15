import React from "react";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import { Link } from "react-router-dom";

type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
  {
    key: "/financial",
    label: <Link to="/financial">Chapter 1</Link>,
    icon: <MailOutlined />,
    children: [
      {
        key: "sub1",
        label: "Introduction",
        children: [
          {
            key: "1",
            label: (
              <Link to="/financial/chapter1">Understanding financial strain</Link>
            ),
          },
          {
            key: "2",
            label: <Link to="/financial/chapter1/sub2">Importance of Saving</Link>,
          },
          {
            key: "3",
            label: <Link to="/financial/chapter1/sub3">Living Below Your Means</Link>,
          },
          {
            key: "4",
            label: (
              <Link to="/financial/chapter1/sub4">Avoiding Debt</Link>
            ),
          },
          {
            key: "5",
            label: <Link to="/financial/chapter1/sub5">Diversifying Income Streams</Link>,
          },
        ],
      },
    ],
  },
  {
    key: "/financial/chapter2",
    label: <Link to="/finacial/chapter2">Chapter 2</Link>,
    icon: <AppstoreOutlined />,
    children: [
      { key: "6", label: <Link to="/financial/chapter2/sub1">Financial Literacy</Link> },
      { key: "7", label: <Link to="/financial/chapter2/sub2">Tracking Your Expenses</Link> },
      { key: "8", label: <Link to="/financial/chapter2/sub3">Creating a Financial Safety Net</Link> },
      { key: "9", label: <Link to="/financial/chapter2/sub4">Assessing Your Financial Values</Link> },
      { key: "10", label: <Link to="/financial/chapter2/sub5">The Benefits of Minimalism</Link> },
    ],
  },
  {
    key: "financial/chapter3",
    label: <Link to="/financial/chapter3">Chapter 3</Link>,
    icon: <SettingOutlined />,
    children: [
      { key: "11", label: <Link to="/financial/chapter3/sub1">Navigating Financial Failure</Link> },
      { key: "12", label: <Link to="/financial/chapter3/sub2">The Importance of Accountability</Link> },
      { key: "13", label: <Link to="/financial/chapter3/sub3">Confronting Your Financial Fears</Link> },
      { key: "14", label: <Link to="/financial/chapter3/sub4">The Ripple Effect of Financial Decisions</Link> },
      { key: "15", label: <Link to="/financial/chapter3/sub5">The Art of Delayed Gratification</Link> },
    ],
  },
];

const FinancialSidebar: React.FC = () => {
  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
  };

  return (
    <Menu
      onClick={onClick}
      style={{ width: 384 }}
      defaultSelectedKeys={["1"]}
      defaultOpenKeys={["financial/chapter1"]}
      mode="inline"
      items={items}
      className="text-lg custom-menu group"
    />
  );
};

export default FinancialSidebar;
