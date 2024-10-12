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
    key: "social/chapter1",
    label: <Link to="/social/chapter1">Chapter 1</Link>,
    icon: <MailOutlined />,
    children: [
      {
        key: "sub1",
        label: "Introduction",
        children: [
          {
            key: "1",
            label: (
              <Link to="/chapter1/sub1">Understanding social </Link>
            ),
          },
          {
            key: "2",
            label: <Link to="/chapter1/sub2">Implementing Best Practices</Link>,
          },
          {
            key: "3",
            label: <Link to="/chapter1/sub3">Addressing Violations</Link>,
          },
          {
            key: "4",
            label: (
              <Link to="/chapter1/sub4">Promoting a Culture of Integrity</Link>
            ),
          },
          {
            key: "5",
            label: <Link to="/chapter1/sub5">Continuous Improvement</Link>,
          },
        ],
      },
    ],
  },
  {
    key: "social/chapter2",
    label: <Link to="/social/chapter2">Chapter 2</Link>,
    icon: <AppstoreOutlined />,
    children: [
      { key: "6", label: <Link to="/social/chapter2/sub1">Phase 1</Link> },
      { key: "7", label: <Link to="/social/chapter2/sub2">Phase 2</Link> },
      { key: "8", label: <Link to="/social/chapter2/sub3">Phase 3</Link> },
      { key: "9", label: <Link to="/social/chapter2/sub4">Phase 4</Link> },
      { key: "10", label: <Link to="/social/chapter2/sub5">Phase 5</Link> },
    ],
  },
  {
    key: "social/chapter3",
    label: <Link to="/social/chapter3">Chapter 3</Link>,
    icon: <SettingOutlined />,
    children: [
      { key: "11", label: <Link to="/social/chapter3/sub1">Phase 1</Link> },
      { key: "12", label: <Link to="/social/chapter3/sub2">Phase 2</Link> },
      { key: "13", label: <Link to="/social/chapter3/sub3">Phase 3</Link> },
      { key: "14", label: <Link to="/social/chapter3/sub4">Phase 4</Link> },
      { key: "15", label: <Link to="/social/chapter3/sub5">Phase 5</Link> },
    ],
  },
];

const socialSidebar: React.FC = () => {
  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
  };

  return (
    <Menu
      onClick={onClick}
      style={{ width: 384 }}
      defaultSelectedKeys={["1"]}
      defaultOpenKeys={["social/chapter1"]}
      mode="inline"
      items={items}
      className="text-lg custom-menu group"
    />
  );
};

export default socialSidebar;
