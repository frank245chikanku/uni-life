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

const DiscriminationSidebar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const closeDrawer = () => setOpen(false);

  const items: MenuItem[] = [
    {
      key: "discrimination",
      label: "Chapter 1",
      icon: <MailOutlined />,
      children: [
        {
          key: "/discrimination/chapter1",
          label: (
            <Link to="/discrimination/chapter1" onClick={closeDrawer}>
              Understanding discrimination and bias
            </Link>
          ),
        },
        {
          key: "/discrimination/chapter1/sub2",
          label: (
            <Link to="/discrimination/chapter1/sub2" onClick={closeDrawer}>
              Recognize the Reality of Bias
            </Link>
          ),
        },
        {
          key: "/discrimination/chapter1/sub3",
          label: (
            <Link to="/discrimination/chapter1/sub3" onClick={closeDrawer}>
              Confront Injustice with Truth
            </Link>
          ),
        },
        {
          key: "/discrimination/chapter1/sub4",
          label: (
            <Link to="/discrimination/chapter1/sub4" onClick={closeDrawer}>
              Cultivate Resilience
            </Link>
          ),
        },
        {
          key: "/discrimination/chapter1/sub5",
          label: (
            <Link to="/discrimination/chapter1/sub5" onClick={closeDrawer}>
              Challenge Bias in Yourself
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
          key: "/discrimination/chapter2/sub1",
          label: (
            <Link to="/discrimination/chapter2/sub1" onClick={closeDrawer}>
              Challenge the System, Not Individuals
            </Link>
          ),
        },
        {
          key: "/discrimination/chapter2/sub2",
          label: (
            <Link to="/discrimination/chapter2/sub2" onClick={closeDrawer}>
              Pursue Justice, Not Revenge
            </Link>
          ),
        },
        {
          key: "/discrimination/chapter2/sub3",
          label: (
            <Link to="/discrimination/chapter2/sub3" onClick={closeDrawer}>
              Recognize Subtle Biases
            </Link>
          ),
        },
        {
          key: "/discrimination/chapter2/sub4",
          label: (
            <Link to="/discrimination/chapter2/sub4" onClick={closeDrawer}>
              Develop Emotional Intelligence
            </Link>
          ),
        },
        {
          key: "/discrimination/chapter2/sub5",
          label: (
            <Link to="/discrimination/chapter2/sub5" onClick={closeDrawer}>
              Stay Curious, Not Defensive
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
          key: "/discrimination/chapter3/sub1",
          label: (
            <Link to="/discrimination/chapter3/sub1" onClick={closeDrawer}>
              Challenge Assumptions
            </Link>
          ),
        },
        {
          key: "/discrimination/chapter3/sub2",
          label: (
            <Link to="/discrimination/chapter3/sub2" onClick={closeDrawer}>
              Don’t Internalize Negativity
            </Link>
          ),
        },
        {
          key: "/discrimination/chapter3/sub3",
          label: (
            <Link to="/discrimination/chapter3/sub3" onClick={closeDrawer}>
              Encourage Open Dialogue
            </Link>
          ),
        },
        {
          key: "/discrimination/chapter3/sub4",
          label: (
            <Link to="/discrimination/chapter3/sub4" onClick={closeDrawer}>
              Practice Humility
            </Link>
          ),
        },
        {
          key: "/discrimination/chapter3/sub5",
          label: (
            <Link to="/discrimination/chapter3/sub5" onClick={closeDrawer}>
              Stay Grounded in Facts
            </Link>
          ),
        },
      ],
    },
  ];

  const menu = (
    <Menu
      selectedKeys={[location.pathname]}
      defaultOpenKeys={["discrimination", "chapter2", "chapter3"]}
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

export default DiscriminationSidebar;
