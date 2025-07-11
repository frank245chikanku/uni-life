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

const PeerSidebar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();            

  const closeDrawer = () => setOpen(false);

  const items: MenuItem[] = [
    {
      key: "chapter1",
      label: "Chapter 1",
      icon: <MailOutlined />,
      children: [
        {
          key: "/peer/chapter1",
          label: (
            <Link to="/peer/chapter1" onClick={closeDrawer}>
              Understanding Peer Pressure
            </Link>
          ),
        },
        {
          key: "/peer/chapter1/sub2",
          label: (
            <Link to="/peer/chapter1/sub2" onClick={closeDrawer}>
              Who Are Your Peers
            </Link>
          ),
        },
        {
          key: "/peer/chapter1/sub3",
          label: (
            <Link to="/peer/chapter1/sub3" onClick={closeDrawer}>
              Groupthink and Conformity
            </Link>
          ),
        },
        {
          key: "/peer/chapter1/sub4",
          label: (
            <Link to="/peer/chapter1/sub4" onClick={closeDrawer}>
              Communication and Assertiveness
            </Link>
          ),
        },
        {
          key: "/peer/chapter1/sub5",
          label: (
            <Link to="/peer/chapter1/sub5" onClick={closeDrawer}>
              Refusing Pressure Tactfully
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
          key: "/peer/chapter2/sub1",
          label: (
            <Link to="/peer/chapter2/sub1" onClick={closeDrawer}>
              Understanding Assertiveness
            </Link>
          ),
        },
        {
          key: "/peer/chapter2/sub2",
          label: (
            <Link to="/peer/chapter2/sub2" onClick={closeDrawer}>
              Active Listening Skills
            </Link>
          ),
        },
        {
          key: "/peer/chapter2/sub3",
          label: (
            <Link to="/peer/chapter2/sub3" onClick={closeDrawer}>
              The Pressure to Conform
            </Link>
          ),
        },
        {
          key: "/peer/chapter2/sub4",
          label: (
            <Link to="/peer/chapter2/sub4" onClick={closeDrawer}>
              Encouraging Diverse Opinions
            </Link>
          ),
        },
        {
          key: "/peer/chapter2/sub5",
          label: (
            <Link to="/peer/chapter2/sub5" onClick={closeDrawer}>
              How to Say No
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
          key: "/peer/chapter3/sub1",
          label: (
            <Link to="/peer/chapter3/sub1" onClick={closeDrawer}>
              Finding Your Voice
            </Link>
          ),
        },
        {
          key: "/peer/chapter3/sub2",
          label: (
            <Link to="/peer/chapter3/sub2" onClick={closeDrawer}>
              The Pull of the Crowd
            </Link>
          ),
        },
        {
          key: "/peer/chapter3/sub3",
          label: (
            <Link to="/peer/chapter3/sub3" onClick={closeDrawer}>
              Mapping Your Social Circle
            </Link>
          ),
        },
        {
          key: "/peer/chapter3/sub4",
          label: (
            <Link to="/peer/chapter3/sub4" onClick={closeDrawer}>
              Crafting Your No
            </Link>
          ),
        },
        {
          key: "/peer/chapter3/sub5",
          label: (
            <Link to="/peer/chapter3/sub5" onClick={closeDrawer}>
              The Influence Spectrum
            </Link>
          ),
        },
      ],
    },
  ];

  const menu = (
    <Menu
      selectedKeys={[location.pathname]}
      defaultOpenKeys={["chapter1", "chapter2", "chapter3"]}
      mode="inline"
      items={items}
      className="text-base custom-menu"
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

export default PeerSidebar;
