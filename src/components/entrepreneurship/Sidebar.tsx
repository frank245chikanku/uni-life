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
    key: "entrepreneurship/chapter1",
    label: <Link to="/entrepreneurship/chapter1">Chapter 1</Link>,
    icon: <MailOutlined />,
    children: [
      {
        key: "sub1",
        label: "Introduction",
        children: [
          {
            key: "1",
            label: (
              <Link to="/chapter1/sub1">Understanding Entrepreneurship Uncertainty</Link>
            ),
          },
          {
            key: "2",
            label: <Link to="/chapter1/sub2">The Power of Contrarian Thinking</Link>,
          },
          {
            key: "3",
            label: <Link to="/chapter1/sub3">Prepare for Black Swan Events</Link>,
          },
          {
            key: "4",
            label: (
              <Link to="/chapter1/sub4">Start Small, Learn Fast</Link>
            ),
          },
          {
            key: "5",
            label: <Link to="/chapter1/sub5">Create a Monopoly Through Innovation</Link>,
          },
        ],
      },
    ],
  },
  {
    key: "entrepreneurship/chapter2",
    label: <Link to="/entrepreneurship/chapter2">Chapter 2</Link>,
    icon: <AppstoreOutlined />,
    children: [
      { key: "6", label: <Link to="/entrepreneurship/chapter2/sub1">Decentralize Risk in Your Startup</Link> },
      { key: "7", label: <Link to="/entrepreneurship/chapter2/sub2">Pivot,Don’t Persevere</Link> },
      { key: "8", label: <Link to="/entrepreneurship/chapter2/sub3">Understand Optionality</Link> },
      { key: "9", label: <Link to="/entrepreneurship/chapter2/sub4">Build Resilience, Not Fragility</Link> },
      { key: "10", label: <Link to="/entrepreneurship/chapter2/sub5">Prepare for Extreme Outcomes</Link> },
    ],
  },
  {
    key: "entrepreneurship/chapter3",
    label: <Link to="/entrepreneurship/chapter3">Chapter 3</Link>,
    icon: <SettingOutlined />,
    children: [
      { key: "11", label: <Link to="/entrepreneurship/chapter3/sub1">Bet on the Unseen</Link> },
      { key: "12", label: <Link to="/entrepreneurship/chapter3/sub2">Don’t Be Fooled by Randomness</Link> },
      { key: "13", label: <Link to="/entrepreneurship/chapter3/sub3">Fail Fast, Fail Smart</Link> },
      { key: "14", label: <Link to="/entrepreneurship/chapter3/sub4">Plan for Asymmetric Payoffs</Link> },
      { key: "15", label: <Link to="/entrepreneurship/chapter3/sub5"> Iterate Until You Get It Right</Link> },
    ],
  },
];

const EntrepreneurshipSidebar: React.FC = () => {
  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
  };

  return (
    <Menu
      onClick={onClick}
      style={{ width: 384 }}
      defaultSelectedKeys={["1"]}
      defaultOpenKeys={["entrepreneurship/chapter1"]}
      mode="inline"
      items={items}
      className="text-lg custom-menu group"
    />
  );
};

export default EntrepreneurshipSidebar;
