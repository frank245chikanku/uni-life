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

const AdjustmentSidebar: React.FC = () => {
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
          key: "/adjustment/chapter1",
          label: (
            <Link to="/adjustment/chapter1" onClick={closeDrawer}>
              What Adjustment Means
            </Link>
          ),
        },
        {
          key: "/adjustment/chapter1/sub2",
          label: (
            <Link to="/adjustment/chapter1/sub2" onClick={closeDrawer}>
              Building Your Confidence
            </Link>
          ),
        },
        {
          key: "/adjustment/chapter1/sub3",
          label: (
            <Link to="/adjustment/chapter1/sub3" onClick={closeDrawer}>
              Goal-Setting Made Easy
            </Link>
          ),
        },
        {
          key: "/adjustment/chapter1/sub4",
          label: (
            <Link to="/adjustment/chapter1/sub4" onClick={closeDrawer}>
              Stepping Into Adjustment
            </Link>
          ),
        },
        {
          key: "/adjustment/chapter1/sub5",
          label: (
            <Link to="/adjustment/chapter1/sub5" onClick={closeDrawer}>
              Crafting Your Own Path
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
          key: "/adjustment/chapter2/sub1",
          label: (
            <Link to="/adjustment/chapter2/sub1" onClick={closeDrawer}>
              Paths Less Traveled
            </Link>
          ),
        },
        {
          key: "/adjustment/chapter2/sub2",
          label: (
            <Link to="/adjustment/chapter2/sub2" onClick={closeDrawer}>
              Building Your Blueprint
            </Link>
          ),
        },
        {
          key: "/adjustment/chapter2/sub3",
          label: (
            <Link to="/adjustment/chapter2/sub3" onClick={closeDrawer}>
              Wandering and Wondering
            </Link>
          ),
        },
        {
          key: "/adjustment/chapter2/sub4",
          label: (
            <Link to="/adjustment/chapter2/sub4" onClick={closeDrawer}>
              The Art of Direction
            </Link>
          ),
        },
        {
          key: "/adjustment/chapter2/sub5",
          label: (
            <Link to="/adjustment/chapter2/sub5" onClick={closeDrawer}>
              The Compass Within
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
          key: "/adjustment/chapter3/sub1",
          label: (
            <Link to="/adjustment/chapter3/sub1" onClick={closeDrawer}>
              Getting Things Done
            </Link>
          ),
        },
        {
          key: "/adjustment/chapter3/sub2",
          label: (
            <Link to="/adjustment/chapter3/sub2" onClick={closeDrawer}>
              Focus and Finish
            </Link>
          ),
        },
        {
          key: "/adjustment/chapter3/sub3",
          label: (
            <Link to="/adjustment/chapter3/sub3" onClick={closeDrawer}>
              Creating Balance
            </Link>
          ),
        },
        {
          key: "/adjustment/chapter3/sub4",
          label: (
            <Link to="/adjustment/chapter3/sub4" onClick={closeDrawer}>
              Evaluating Your Progress
            </Link>
          ),
        },
        {
          key: "/adjustment/chapter3/sub5",
          label: (
            <Link to="/adjustment/chapter3/sub5" onClick={closeDrawer}>
              Using Checkpoints
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
      className="custom-menu text-base"
    />
  );

  return (
    <>
      {/* Mobile menu button */}
      <div className="md:hidden mb-4">
        <Button icon={<MenuOutlined />} onClick={() => setOpen(true)}>
          Menu
        </Button>
      </div>

      {/* Mobile drawer */}
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

      {/* Desktop sidebar */}
      <div className="hidden md:block">{menu}</div>
    </>
  );
};

export default AdjustmentSidebar;
