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
    key: "/entrepreneurship",
    label: <Link to="/entrepreneurship">Chapter 1</Link>,
    icon: <MailOutlined />,
    children: [
      {
        key: "sub1",
        label: "Introduction",
        children: [
          {
            key: "1",
            label: (
              <Link to="/entrepreneurship/chapter1/sub1" className="group">
                Understanding Entrepreneurship Uncertainty
              </Link>
            ),
          },
          {
            key: "2",
            label: <Link to="/entrepreneurship/chapter1/sub2" className="group">The Power of Contrarian Thinking</Link>,
          },
          {
            key: "3",
            label: <Link to="/entrepreneurship/chapter1/sub3" className="group">Prepare for Black Swan Events</Link>,
          },
          {
            key: "4",
            label: <Link to="/entrepreneurship/chapter1/sub4" className="group">Start Small, Learn Fast</Link>,
          },
          {
            key: "5",
            label: <Link to="/entrepreneurship/chapter1/sub5" className="group">Create a Monopoly Through Innovation</Link>,
          },
        ],
      },
    ],
  },
  {
    key: "entrepreneurship/chapter2",
    label: <Link to="/entrepreneurship/chapter2" className="group">Chapter 2</Link>,
    icon: <AppstoreOutlined />,
    children: [
      { key: "6", label: <Link to="/entrepreneurship/chapter2/sub1" className="group">Decentralize Risk in Your Startup</Link> },
      { key: "7", label: <Link to="/entrepreneurship/chapter2/sub2" className="group">Pivot, Don’t Persevere</Link> },
      { key: "8", label: <Link to="/entrepreneurship/chapter2/sub3" className="group">Understand Optionality</Link> },
      { key: "9", label: <Link to="/entrepreneurship/chapter2/sub4" className="group">Build Resilience, Not Fragility</Link> },
      { key: "10", label: <Link to="/entrepreneurship/chapter2/sub5" className="group">Prepare for Extreme Outcomes</Link> },
    ],
  },
  {
    key: "entrepreneurship/chapter3",
    label: <Link to="/entrepreneurship/chapter3" className="group">Chapter 3</Link>,
    icon: <SettingOutlined />,
    children: [
      { key: "11", label: <Link to="/entrepreneurship/chapter3/sub1" className="group">Bet on the Unseen</Link> },
      { key: "12", label: <Link to="/entrepreneurship/chapter3/sub2" className="group">Don’t Be Fooled by Randomness</Link> },
      { key: "13", label: <Link to="/entrepreneurship/chapter3/sub3" className="group">Fail Fast, Fail Smart</Link> },
      { key: "14", label: <Link to="/entrepreneurship/chapter3/sub4" className="group">Plan for Asymmetric Payoffs</Link> },
      { key: "15", label: <Link to="/entrepreneurship/chapter3/sub5" className="group">Iterate Until You Get It Right</Link> },
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
