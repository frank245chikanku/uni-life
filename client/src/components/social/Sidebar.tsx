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
    key: "/social",
    label: <Link to="/social">Chapter 1</Link>,
    icon: <MailOutlined />,
    children: [
      {
        key: "sub1",
        label: "Introduction",
        children: [
          {
            key: "1",
            label: (
              <Link to="/social/chapter1">Understanding Social Responsibility</Link>
            ),
          },
          {
            key: "2",
            label: <Link to="/social/chapter1/sub2">The Role of Individuals</Link>,
          },
          {
            key: "3",
            label: <Link to="/social/chapter1/sub3">Corporate Social Responsibility</Link>,
          },
          {
            key: "4",
            label: (
              <Link to="/social/chapter1/sub4"> Community Engagement</Link>
            ),
          },
          {
            key: "5",
            label: <Link to="/social/chapter1/sub5">Ethical Consumerism</Link>,
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
      { key: "6", label: <Link to="/social/chapter2/sub1">Global Citizenship</Link> },
      { key: "7", label: <Link to="/social/chapter2/sub2">Philanthropy</Link> },
      { key: "8", label: <Link to="/social/chapter2/sub3">Digital Responsibility</Link> },
      { key: "9", label: <Link to="/social/chapter2/sub4">Cultural Awareness</Link> },
      { key: "10", label: <Link to="/social/chapter2/sub5">Addressing Inequality</Link> },
    ],
  },
  {
    key: "social/chapter3",
    label: <Link to="/social/chapter3">Chapter 3</Link>,
    icon: <SettingOutlined />,
    children: [
      { key: "11", label: <Link to="/social/chapter3/sub1">Listening Circles</Link> },
      { key: "12", label: <Link to="/social/chapter3/sub2">Finding Meaning in Service</Link> },
      { key: "13", label: <Link to="/social/chapter3/sub3">Order and Chaos</Link> },
      { key: "14", label: <Link to="/social/chapter3/sub4">The Value of Truth</Link> },
      { key: "15", label: <Link to="/social/chapter3/sub5">Finding Your Place in the Community</Link> },
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
