import React, { useState } from "react";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu, Drawer, Button } from "antd";
import { Link, useLocation } from "react-router-dom";

type MenuItem = Required<MenuProps>["items"][number];

const SocialSidebar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const closeDrawer = () => setOpen(false);

  const items: MenuItem[] = [
    {
      key: "social",
      label: "Chapter 1",
      icon: <MailOutlined />,
      children: [
        {
          key: "/social/chapter1",
          label: (
            <Link to="/social/chapter1" onClick={closeDrawer}>
              Understanding Social Responsibility
            </Link>
          ),
        },
        {
          key: "/social/chapter1/sub2",
          label: (
            <Link to="/social/chapter1/sub2" onClick={closeDrawer}>
              The Role of Individuals
            </Link>
          ),
        },
        {
          key: "/social/chapter1/sub3",
          label: (
            <Link to="/social/chapter1/sub3" onClick={closeDrawer}>
              Social Impact Assessment
            </Link>
          ),
        },
        {
          key: "/social/chapter1/sub4",
          label: (
            <Link to="/social/chapter1/sub4" onClick={closeDrawer}>
              Corporate Social Responsibility
            </Link>
          ),
        },
        {
          key: "/social/chapter1/sub5",
          label: (
            <Link to="/social/chapter1/sub5" onClick={closeDrawer}>
              Community Engagement
            </Link>
          ),
        },
      ],
    },
    {
      key: "chapter2",
      label: "Chapter 2",
      icon: <AppstoreOutlined />,
      children: [
        {
          key: "/social/chapter2/sub1",
          label: (
            <Link to="/social/chapter2/sub1" onClick={closeDrawer}>
              Global Citizenship
            </Link>
          ),
        },
        {
          key: "/social/chapter2/sub2",
          label: (
            <Link to="/social/chapter2/sub2" onClick={closeDrawer}>
              Philanthropy
            </Link>
          ),
        },
        {
          key: "/social/chapter2/sub3",
          label: (
            <Link to="/social/chapter2/sub3" onClick={closeDrawer}>
              Digital Responsibility
            </Link>
          ),
        },
        {
          key: "/social/chapter2/sub4",
          label: (
            <Link to="/social/chapter2/sub4" onClick={closeDrawer}>
              Cultural Awareness
            </Link>
          ),
        },
        {
          key: "/social/chapter2/sub5",
          label: (
            <Link to="/social/chapter2/sub5" onClick={closeDrawer}>
              Addressing Inequality
            </Link>
          ),
        },
      ],
    },
    {
      key: "chapter3",
      label: "Chapter 3",
      icon: <SettingOutlined />,
      children: [
        {
          key: "/social/chapter3/sub1",
          label: (
            <Link to="/social/chapter3/sub1" onClick={closeDrawer}>
              Listening Circles
            </Link>
          ),
        },
        {
          key: "/social/chapter3/sub2",
          label: (
            <Link to="/social/chapter3/sub2" onClick={closeDrawer}>
              Finding Meaning in Service
            </Link>
          ),
        },
        {
          key: "/social/chapter3/sub3",
          label: (
            <Link to="/social/chapter3/sub3" onClick={closeDrawer}>
              Order and Chaos
            </Link>
          ),
        },
        {
          key: "/social/chapter3/sub4",
          label: (
            <Link to="/social/chapter3/sub4" onClick={closeDrawer}>
              The Value of Truth
            </Link>
          ),
        },
        {
          key: "/social/chapter3/sub5",
          label: (
            <Link to="/social/chapter3/sub5" onClick={closeDrawer}>
              Finding Your Place in the Community
            </Link>
          ),
        },
      ],
    },
  ];

  const menu = (
    <Menu
      selectedKeys={[location.pathname]}
      defaultOpenKeys={["social", "chapter2", "chapter3"]}
      mode="inline"
      items={items}
      className="custom-menu text-base"
    />
  );

  return (
    <>
      <div className="md:hidden mb-4">
        <Button icon={<MenuOutlined />} onClick={() => setOpen(true)}>
          Menu
        </Button>
      </div>

      <Drawer
        title="Chapters"
        placement="left"
        onClose={closeDrawer}
        open={open}
        className="md:hidden"
        bodyStyle={{ padding: 0 }}
      >
        {menu}
      </Drawer>

      <div className="hidden md:block">{menu}</div>
    </>
  );
};

export default SocialSidebar;
