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
    key: "/career",
    label: <Link to="/career">Chapter 1</Link>,
    icon: <MailOutlined />,
    children: [
      {
        key: "sub1",
        label: "Introduction",
        children: [
          {
            key: "1",
            label: (
              <Link to="/career/chapter1">understanding Career uncertainty</Link>
            ),
          },
          {
            key: "2",
            label: <Link to="/career/chapter1/sub2">Start with What You Know</Link>,
          },
          {
            key: "3",
            label: <Link to="/career/chapter1/sub3">Define Your Values</Link>,
          },
          {
            key: "4",
            label: (
              <Link to="/career/chapter1/sub4">Accept Responsibility</Link>
            ),
          },
          {
            key: "5",
            label: <Link to="/career/chapter1/sub5">Build Competence</Link>,
          },
        ],
      },
    ],
  },
  {
    key: "career/chapter2",
    label: <Link to="/career/chapter2">Chapter 2</Link>,
    icon: <AppstoreOutlined />,
    children: [
      { key: "6", label: <Link to="/career/chapter2/sub1">Embrace Failure as Growth</Link> },
      { key: "7", label: <Link to="/career/chapter2/sub2">Set Small Goals</Link> },
      { key: "8", label: <Link to="/career/chapter2/sub3">Align Career with Character</Link> },
      { key: "9", label: <Link to="/career/chapter2/sub4">Know When to Pivot</Link> },
      { key: "10", label: <Link to="/career/chapter2/sub5">The Importance of Networking</Link> },
    ],
  },
  {
    key: "career/chapter3",
    label: <Link to="/career/chapter3">Chapter 3</Link>,
    icon: <SettingOutlined />,
    children: [
      { key: "11", label: <Link to="/career/chapter3/sub1">Stay Grounded in Reality</Link> },
      { key: "12", label: <Link to="/career/chapter3/sub2">Find Mentors, Not Idols</Link> },
      { key: "13", label: <Link to="/career/chapter3/sub3">Resist Cynicism</Link> },
      { key: "14", label: <Link to="/career/chapter3/sub4">Focus on Long-Term Vision</Link> },
      { key: "15", label: <Link to="/career/chapter3/sub5">Define Your Legacy</Link> },
    ],
  },
];

const CareerSidebar: React.FC = () => {
  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
  };

  return (
    <Menu
      onClick={onClick}
      style={{ width: 384 }}
      defaultSelectedKeys={["1"]}
      defaultOpenKeys={["career/chapter1"]}
      mode="inline"
      items={items}
      className="text-lg custom-menu group"
    />
  );
};

export default CareerSidebar;
