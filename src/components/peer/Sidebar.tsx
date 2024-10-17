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
    key: "peer/chapter1",
    label: <Link to="/peer/chapter1">Chapter 1</Link>,
    icon: <MailOutlined />,
    children: [
      {
        key: "sub1",
        label: "Introduction",
        children: [
          {
            key: "1",
            label: (
              <Link to="/chapter1/sub1">Understanding Peer Pressure</Link>
            ),
          },
          {
            key: "2",
            label: <Link to="/chapter1/sub2">Who Are Your Peers </Link>,
          },
          {
            key: "3",
            label: <Link to="/chapter1/sub3">Groupthink and Comformity</Link>,
          },
          {
            key: "4",
            label: (
              <Link to="/chapter1/sub4">Communication and Assertiveness</Link>
            ),
          },
          {
            key: "5",
            label: <Link to="/chapter1/sub5">Refusing Pressure Tactfully</Link>,
          },
        ],
      },
    ],
  },
  {
    key: "peer/chapter2",
    label: <Link to="/peer/chapter2">Chapter 2</Link>,
    icon: <AppstoreOutlined />,
    children: [
      { key: "6", label: <Link to="/peer/chapter2/sub1">Understanding Assertiveness</Link> },
      { key: "7", label: <Link to="/peer/chapter2/sub2">Active Listening Skills</Link> },
      { key: "8", label: <Link to="/peer/chapter2/sub3">The Pressure to Conform</Link> },
      { key: "9", label: <Link to="/peer/chapter2/sub4">Encouraging Diverse Opinions</Link> },
      { key: "10", label: <Link to="/peer/chapter2/sub5">How to Say No</Link> },
    ],
  },
  {
    key: "peer/chapter3",
    label: <Link to="/peer/chapter3">Chapter 3</Link>,
    icon: <SettingOutlined />,
    children: [
      { key: "11", label: <Link to="/peer/chapter3/sub1">Finding Your Voice</Link> },
      { key: "12", label: <Link to="/peer/chapter3/sub2">The Pull of the Crowd</Link> },
      { key: "13", label: <Link to="/peer/chapter3/sub3">Mapping Your Social Circle</Link> },
      { key: "14", label: <Link to="/peer/chapter3/sub4">Crafting Your No</Link> },
      { key: "15", label: <Link to="/peer/chapter3/sub5">The Influence Spectrum</Link> },
    ],
  },
];

const PeerSidebar: React.FC = () => {
  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
  };

  return (
    <Menu
      onClick={onClick}
      style={{ width: 384 }}
      defaultSelectedKeys={["1"]}
      defaultOpenKeys={["peer/chapter1"]}
      mode="inline"
      items={items}
      className="text-lg custom-menu group"
    />
  );
};

export default PeerSidebar;
