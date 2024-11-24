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
    key: "/discrimination",
    label: <Link to="/discrimination">Chapter 1</Link>,
    icon: <MailOutlined />,
    children: [
      {
        key: "sub1",
        label: "Introduction",
        children: [
          {
            key: "1",
            label: (
              <Link to="/discrimination/chapter1">Understanding discrimination and bias</Link>
            ),
          },
          {
            key: "2",
            label: <Link to="/discrimination/chapter1/sub2">Recognize the Reality of Bias</Link>,
          },
          {
            key: "3",
            label: <Link to="/discrimination/chapter1/sub3">Confront Injustice with Truth</Link>,
          },
          {
            key: "4",
            label: (
              <Link to="/discrimination/chapter1/sub4">Cultivate Resilience</Link>
            ),
          },
          {
            key: "5",
            label: <Link to="/discrimination/chapter1/sub5">Challenge Bias in Yourself</Link>,
          },
        ],
      },
    ],
  },
  {
    key: "discrimination/chapter2",
    label: <Link to="/discrimination/chapter2">Chapter 2</Link>,
    icon: <AppstoreOutlined />,
    children: [
      { key: "6", label: <Link to="/discrimination/chapter2/sub1">Challenge the System, Not Individuals</Link> },
      { key: "7", label: <Link to="/discrimination/chapter2/sub2">Pursue Justice, Not Revenge</Link> },
      { key: "8", label: <Link to="/discrimination/chapter2/sub3">Recognize Subtle Biases</Link> },
      { key: "9", label: <Link to="/discrimination/chapter2/sub4">Develop Emotional Intelligence</Link> },
      { key: "10", label: <Link to="/discrimination/chapter2/sub5">Stay Curious, Not Defensive</Link> },
    ],
  },
  {
    key: "discrimination/chapter3",
    label: <Link to="/discrimination/chapter3">Chapter 3</Link>,
    icon: <SettingOutlined />,
    children: [
      { key: "11", label: <Link to="/discrimination/chapter3/sub1">Challenge Assumptions</Link> },
      { key: "12", label: <Link to="/discrimination/chapter3/sub2">Don’t Internalize Negativity</Link> },
      { key: "13", label: <Link to="/discrimination/chapter3/sub3">Encourage Open Dialogue</Link> },
      { key: "14", label: <Link to="/discrimination/chapter3/sub4">Practice Humility</Link> },
      { key: "15", label: <Link to="/discrimination/chapter3/sub5">Stay Grounded in Facts</Link> },
    ],
  },
];

const DiscriminationSidebar: React.FC = () => {
  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
  };

  return (
    <Menu
      onClick={onClick}
      style={{ width: 384 }}
      defaultSelectedKeys={["1"]}
      defaultOpenKeys={["discrimination/chapter1"]}
      mode="inline"
      items={items}
      className="text-lg custom-menu group"
    />
  );
};

export default DiscriminationSidebar;
