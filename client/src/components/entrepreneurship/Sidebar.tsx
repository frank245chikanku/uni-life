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

const EntrepreneurshipSidebar: React.FC = () => {
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
          key: "/entrepreneurship/chapter1/sub1",
          label: (
            <Link to="/entrepreneurship/chapter1/sub1" onClick={closeDrawer}>
              Understanding Entrepreneurship Uncertainty
            </Link>
          ),
        },
        {
          key: "/entrepreneurship/chapter1/sub2",
          label: (
            <Link to="/entrepreneurship/chapter1/sub2" onClick={closeDrawer}>
              The Power of Contrarian Thinking
            </Link>
          ),
        },
        {
          key: "/entrepreneurship/chapter1/sub3",
          label: (
            <Link to="/entrepreneurship/chapter1/sub3" onClick={closeDrawer}>
              Prepare for Black Swan Events
            </Link>
          ),
        },
        {
          key: "/entrepreneurship/chapter1/sub4",
          label: (
            <Link to="/entrepreneurship/chapter1/sub4" onClick={closeDrawer}>
              Start Small, Learn Fast
            </Link>
          ),
        },
        {
          key: "/entrepreneurship/chapter1/sub5",
          label: (
            <Link to="/entrepreneurship/chapter1/sub5" onClick={closeDrawer}>
              Create a Monopoly Through Innovation
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
          key: "/entrepreneurship/chapter2/sub1",
          label: (
            <Link to="/entrepreneurship/chapter2/sub1" onClick={closeDrawer}>
              Decentralize Risk in Your Startup
            </Link>
          ),
        },
        {
          key: "/entrepreneurship/chapter2/sub2",
          label: (
            <Link to="/entrepreneurship/chapter2/sub2" onClick={closeDrawer}>
              Pivot, Don’t Persevere
            </Link>
          ),
        },
        {
          key: "/entrepreneurship/chapter2/sub3",
          label: (
            <Link to="/entrepreneurship/chapter2/sub3" onClick={closeDrawer}>
              Understand Optionality
            </Link>
          ),
        },
        {
          key: "/entrepreneurship/chapter2/sub4",
          label: (
            <Link to="/entrepreneurship/chapter2/sub4" onClick={closeDrawer}>
              Build Resilience, Not Fragility
            </Link>
          ),
        },
        {
          key: "/entrepreneurship/chapter2/sub5",
          label: (
            <Link to="/entrepreneurship/chapter2/sub5" onClick={closeDrawer}>
              Prepare for Extreme Outcomes
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
          key: "/entrepreneurship/chapter3/sub1",
          label: (
            <Link to="/entrepreneurship/chapter3/sub1" onClick={closeDrawer}>
              Bet on the Unseen
            </Link>
          ),
        },
        {
          key: "/entrepreneurship/chapter3/sub2",
          label: (
            <Link to="/entrepreneurship/chapter3/sub2" onClick={closeDrawer}>
              Don’t Be Fooled by Randomness
            </Link>
          ),
        },
        {
          key: "/entrepreneurship/chapter3/sub3",
          label: (
            <Link to="/entrepreneurship/chapter3/sub3" onClick={closeDrawer}>
              Fail Fast, Fail Smart
            </Link>
          ),
        },
        {
          key: "/entrepreneurship/chapter3/sub4",
          label: (
            <Link to="/entrepreneurship/chapter3/sub4" onClick={closeDrawer}>
              Plan for Asymmetric Payoffs
            </Link>
          ),
        },
        {
          key: "/entrepreneurship/chapter3/sub5",
          label: (
            <Link to="/entrepreneurship/chapter3/sub5" onClick={closeDrawer}>
              Iterate Until You Get It Right
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

export default EntrepreneurshipSidebar;
