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
    key: "adjustment/chapter1",
    label: <Link to="/adjustment/chapter1">Chapter 1</Link>,
    icon: <MailOutlined />,
    children: [
      {
        key: "sub1",
        label: "Introduction",
        children: [
          {
            key: "1",
            label: (
              <Link to="/chapter1/sub1">What Independence Means</Link>
            ),
          },
          {
            key: "2",
            label: <Link to="/chapter1/sub2">Building Your Confidence</Link>,
          },
          {
            key: "3",
            label: <Link to="/chapter1/sub3">Goal-Setting Made Easy</Link>,
          },
          {
            key: "4",
            label: (
              <Link to="/chapter1/sub4">Stepping Into Independence</Link>
            ),
          },
          {
            key: "5",
            label: <Link to="/chapter1/sub5">Crafting Your Own Path</Link>,
          },
        ],
      },
    ],
  },
  {
    key: "adjustment/chapter2",
    label: <Link to="/adjustment/chapter2">Chapter 2</Link>,
    icon: <AppstoreOutlined />,
    children: [
      { key: "6", label: <Link to="/adjustment/chapter2/sub1">Paths Less Traveled</Link> },
      { key: "7", label: <Link to="/adjustment/chapter2/sub2">Building Your Blueprint</Link> },
      { key: "8", label: <Link to="/adjustment/chapter2/sub3">Wandering and Wondering</Link> },
      { key: "9", label: <Link to="/adjustment/chapter2/sub4">The Art of Direction</Link> },
      { key: "10", label: <Link to="/adjustment/chapter2/sub5">The Compass Within</Link> },
    ],
  },
  {
    key: "adjustment/chapter3",
    label: <Link to="/adjustment/chapter3">Chapter 3</Link>,
    icon: <SettingOutlined />,
    children: [
      { key: "11", label: <Link to="/adjustment/chapter3/sub1">Getting Things Done</Link> },
      { key: "12", label: <Link to="/adjustment/chapter3/sub2">Focus and Finish</Link> },
      { key: "13", label: <Link to="/adjustment/chapter3/sub3">Creating Balance</Link> },
      { key: "14", label: <Link to="/adjustment/chapter3/sub4">Evaluating Your Progress</Link> },
      { key: "15", label: <Link to="/adjustment/chapter3/sub5">Using Checkpoints</Link> },
    ],
  },
];

const AdjustmentSidebar: React.FC = () => {
  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
  };

  return (
    <Menu
      onClick={onClick}
      style={{ width: 384 }}
      defaultSelectedKeys={["1"]}
      defaultOpenKeys={["adjustment/chapter1"]}
      mode="inline"
      items={items}
      className="text-lg custom-menu group"
    />
  );
};

export default AdjustmentSidebar;
